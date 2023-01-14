<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Manager\ExpensesManager;
use App\Route\Rouate;
use DateTimeImmutable;
use Firebase\JWT\Key;
use Firebase\JWT\JWT;

class ExpensesController extends AbstractController
{
    #[Route('/expenses/add', name: "expenses", methods: ["POST"])]
    public function expenses()
    {   
        $tokenManager = new TokenManager();
        $token = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($token == false) {
            exit;
        }
        $manager = new ExpensesManager(new PDOFactory());
        $id = $token->ID;
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
        $token = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($token == false) {
            exit;
        }
        $manager = new ExpensesManager(new PDOFactory());
        $id = $token->ID;
        $expenses_id = $_POST['expenses_id'];
        $expenses = $manager->deleteExpenses($id, $expenses_id);
        var_dump('deleted');

    }
    #[Route('/expenses/get', name: "expenses", methods: ["POST"])]
    public function getexpenses()
    {   
        $tokenManager = new TokenManager();
        $token = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($token == false) {
            exit;
        }
        $manager = new ExpensesManager(new PDOFactory());
        $id = $token->ID;
        $flatsharing_id = $_POST['flatsharing_id'];
        $expenses = $manager->viewExpenses($flatsharing_id);
        var_dump($expenses);
        exit;
    }

}
