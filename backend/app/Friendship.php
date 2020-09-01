<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use App\User;

class Friendship extends Model
{

    protected $fillable = ['sender_id', 'reciver_id', 'friend_status'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function($query)
        {
            $user = Auth::user()->id;
            $query->sender_id = $user;
            $query->friend_status = 'sent';
        });
    }


}
