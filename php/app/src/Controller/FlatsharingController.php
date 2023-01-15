<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Manager\FlatsharingManager;
use App\Manager\TokenManager;
use App\Route\Route;
use DateTimeImmutable;
use Firebase\JWT\Key;
use Firebase\JWT\JWT;

class FlatsharingController extends AbstractController
{
    #[Route('/flatsharing/create', name: "flatsharing", methods: ["GET"])]
    public function flatsharing()
    {   
        $tokenManager = new TokenManager();
        $id = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($id) {
            exit;
        }
        $manager = new FlatsharingManager(new PDOFactory());
        $flatsharing = $manager->CreateFlatsharing($id, 'test');
        var_dump('created');
        exit;
    }
    
    #[Route('/flatsharing/get', name: "userflatsharing", methods: ["GET"])]
    public function userflatsharing()
    {
        $tokenManager = new TokenManager();
        $id = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($id) {
            exit;
        }
        $manager = new FlatsharingManager(new PDOFactory());
        $flatsharing = $manager->getUserFlatsharing($id);
        var_dump($flatsharing);
        exit;

    }
}
