<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Manager\PostManager;
use App\Manager\UserManager;
use App\Route\Route;
use DateTimeImmutable;
use Firebase\JWT\Key;
use Firebase\JWT\JWT;

class FlatsharingController extends AbstractController
{
    #[Route('/flatsharing', name: "flatsharing", methods: ["GET"])]
    public function home()
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
        $flatsharing = $manager->getUserFlatsharing($id);
        echo json_encode($flatsharing);
        exit;
    }
}
