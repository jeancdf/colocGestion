<?php

namespace App\Manager;

use App\Entity\Participants;

class Manager extends BaseManager
{

    // invite participants
    public function inviteUserToFlatsharing($user_Id,$id)
    {
        $query = $this->pdo->query("INSERT INTO participants(user_id, flatsharing_id, accepted) VALUES ('$user_Id','$id', 'false')");
        return new Participants($query->fetch(\PDO::FETCH_DEFAULT));
    }

    // accept invite 
    public function acceptFlatsharingInv($user_Id,$id)
    {
        $this->pdo->query("UPDATE Post SET accepted = 'true' WHERE user_id='$user_Id' && user_id='$id'");
    }

    // decline invite
    public function declineFlatsharingInv($user_Id,$id)
    {
        $this->pdo->query("UPDATE Post SET accepted = 'false' WHERE user_id='$user_Id' && user_id='$id'");
    }

    // Get invitations
    public function getFlatsharingInvitations($user_Id)
    {
        $this->pdo->query("select * from participants WHERE user_id='$user_Id'");
    }
}
