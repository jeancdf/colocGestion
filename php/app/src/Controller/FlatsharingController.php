<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Manager\FlatsharingManager;
use App\Route\Route;
use DateTimeImmutable;
use Firebase\JWT\Key;
use Firebase\JWT\JWT;

class FlatsharingController extends AbstractController
{
    #[Route('/flatsharing/create', name: "flatsharing", methods: ["GET"])]
    public function flatsharing()
    {   
        $tok = getallheaders()['authorization'];
        $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
        $token = JWT::decode($tok, new Key($secretKey, 'HS512'));
        $now = new DateTimeImmutable();
        $serverName = "localhost";

        if ($token->iss !== $serverName ||
            $token->nbf > $now->getTimestamp() ||
            $token->exp < $now->getTimestamp())
        {
            echo 'Token not found3';
            exit;
        }
        $manager = new FlatsharingManager(new PDOFactory());
        $id = $token->ID;
        var_dump($id);

        $flatsharing = $manager->CreateFlatsharing($id, 'test');
        var_dump('created');
        exit;
    }
    #[Route('/userflatsharing', name: "userflatsharing", methods: ["GET"])]
    public function userflatsharing()
    {
        $tok = getallheaders()['authorization'];
        $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
        $token = JWT::decode($tok, new Key($secretKey, 'HS512'));
        $now = new DateTimeImmutable();
        $serverName = "localhost";

        if ($token->iss !== $serverName ||
            $token->nbf > $now->getTimestamp() ||
            $token->exp < $now->getTimestamp())
        {
            echo 'Token not found3';
            exit;
        }
        $manager = new FlatsharingManager(new PDOFactory());
        $id = $token->ID;
        $flatsharing = $manager->getUserFlatsharing($id);
        var_dump($flatsharing);
        exit;

    }
}
