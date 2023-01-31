<?php

namespace App\Manager;

use App\Entity\Expenses;

class ExpensesManager extends BaseManager
{

   
    public function addExpenses($user_Id, $flatsharing_id, $date, $description, $amount)
    {
        $query = $this->pdo->query("INSERT INTO expenses(user_id, flatsharing_id, date, description, amount) VALUES ('$user_Id','$flatsharing_id', '$date', '$description', '$amount')");
        
    }
    public function deleteExpenses($user_Id, $date)
    {
        $query = $this->pdo->query("DELETE FROM expenses WHERE user_id = '$user_Id' AND date = '$date'");
        
    }
    public function viewExpenses($flatsharing_id)
    {
        $query = $this->pdo->query("SELECT * FROM expenses WHERE flatsharing_id = '$flatsharing_id'");
        $expenses = $query->fetchAll();
        return $expenses;
        
    }

    


}
