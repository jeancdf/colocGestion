import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

interface Props {
    colocId: string;
    
    
    }

export default function AddExpensesForm () {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [assignee, setAssignee] = useState('');
    const [error, setError] = useState('');
    const [assignees, setAssignees] = useState([]);
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    // const handleSubmit = async (event: { preventDefault: () => void; }) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post(`/api/tricounts/${colocId}/expenses`, { name, amount, assignee });
    //         console.log(response.data);
    //         setName('');
    //         setAmount('');
    //         setAssignee('');
    //     } catch (error) {
    //         console.error(error);
    //         setError('Error adding expense');
    //     }
    // };

    // function handleChange(event: { target: { name: string | number; checked: any; }; }) {
    //     var updatedState = Object.assign({}, state);
    //     updatedState[event.target.name] = event.target.checked;
    //     setState(updatedState);
    // }

    const { gilad, jason, antoine } = state;


    return (
        <Container className="d-flex  justify-content-center" style={{ minHeight: '100vh' }}>
            <Form >
                <FormGroup>
                    <FormLabel htmlFor="name">Expense Name:</FormLabel>
                    <FormControl
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="amount">Amount:</FormLabel>
                    <FormControl
                        id="amount"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="assignees">Assignees:</FormLabel>
                    
                </FormGroup>
               
                        <FormLabel component="legend">Assign responsibility</FormLabel>
                        {/* <FormGroup sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormControlLabel
                                control={
                                    <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                }
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                }
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                        </FormGroup> */}
                        <FormHelperText>Be careful</FormHelperText>

                    
                {error && <p>{error}</p>}
                <Button type="submit">Add Expense</Button>
            </Form>
        </Container>

    );
}
