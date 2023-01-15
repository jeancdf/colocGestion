<?php

namespace App\Manager;
use DateTimeImmutable;
use Firebase\JWT\Key;
use Firebase\JWT\JWT;



class TokenManager 
{
    public function checkToken($token)
    {
        $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
        $token = JWT::decode($token, new Key($secretKey, 'HS512'));
        $now = new DateTimeImmutable();
        $serverName = "localhost";

        if ($token->iss !== $serverName ||
            $token->nbf > $now->getTimestamp() ||
            $token->exp < $now->getTimestamp())
        {
            echo 'Token not found';
            return null;
        }
        $id = $token->ID;
        return $id;

    }

}