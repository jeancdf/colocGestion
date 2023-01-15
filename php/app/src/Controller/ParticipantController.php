<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Manager\ParticipantManager;
use App\Manager\TokenManager;
use App\Route\Rouate;
use DateTimeImmutable;
use Firebase\JWT\Key;
use Firebase\JWT\JWT;
use App\Manager\TokenManager;

class ParticipantController extends AbstractController
{
    #[Route('/participant/invite', name: "participant", methods: ["POST"])]
    public function inviteParticipant()
    {   
        $tokenManager = new TokenManager();
        $id = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($id) {
            exit;
        }
        $manager = new ParticipantManager(new PDOFactory());
        $flatsharing_Id = $_POST['flatsharing_Id'];
        $manager->inviteUserToFlatsharing($id, $flatsharing_Id);
        var_dump('invited');
        exit;
    }
    #[Route('/participant/accept', name: "accept", methods: ["POST"])]
    public function acceptParticipant()
    {
        $tokenManager = new TokenManager();
        $token = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($token == false) {
            exit;
        }
        $manager = new ParticipantManager(new PDOFactory());
        $id = $token->ID;
        $flatsharing_Id = $_POST['flatsharing_Id'];
        $manager->acceptUserToFlatsharing($id, $flatsharing_Id);
        var_dump('accepted');
        exit;
    }
    #[Route('/participant/decline', name: "decline", methods: ["POST"])]
    public function declineParticipant()
    {
        $tokenManager = new TokenManager();
        $token = $tokenManager->checkToken(getallheaders()['authorization']);
        if ($token == false) {
            exit;
        }
        $manager = new ParticipantManager(new PDOFactory());
        $id = $token->ID;
        $flatsharing_Id = $_POST['flatsharing_Id'];
        $manager->declineUserToFlatsharing($id, $flatsharing_Id);
        var_dump('declined');
        exit;
    }ƒ
}