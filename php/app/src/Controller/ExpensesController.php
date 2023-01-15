<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Route\Route;
use App\Manager\ExpensesManager;
use App\Manager\TokenManager;
use App\Route\Rouate;
class ExpensesController extends AbstractController
{
    #[Route('/expenses/add', name: "expenses", methods: ["POST"])]
    public function expenses()
    {   
        $tokenManager = new TokenManager();
        $id = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($id) {
            exit;
        }
        $manager = new ExpensesManager(new PDOFactory());
        $flatsharing_id = $_POST['flatsharing_id'];
        $date = $_POST['date'];
        $description = $_POST['description'];
        $amount = $_POST['amount'];
        $expenses = $manager->addExpenses($id, $flatsharing_id, $date, $description, $amount);
        var_dump('added');
        exit;
    }
    #[Route('/expenses/delete', name: "expenses", methods: ["POST"])]
    public function deleteexpenses()
    {   
        $tokenManager = new TokenManager();
        $id = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($id) {
            exit;
        }
        $manager = new ExpensesManager(new PDOFactory());
        $expenses_id = $_POST['expenses_id'];
        $expenses = $manager->deleteExpenses($id, $expenses_id);
        var_dump('deleted');

    }
    #[Route('/expenses/get', name: "expenses", methods: ["POST"])]
    public function getexpenses()
    {   
        $tokenManager = new TokenManager();
        $id = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($id) {
            exit;
        }
        $manager = new ExpensesManager(new PDOFactory());
        $flatsharing_id = $_POST['flatsharing_id'];
        $expenses = $manager->viewExpenses($flatsharing_id);
        var_dump($expenses);
        exit;
    }

}
