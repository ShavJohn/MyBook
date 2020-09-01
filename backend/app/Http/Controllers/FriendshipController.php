<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Friendship;
use App\User;
use Illuminate\Support\Facades\DB;

class FriendshipController extends Controller
{
    public function sendRequest($id){
        Friendship::create([
            'sender_id' => auth()->id(),
            'reciver_id' => $id,
            'friend_status' => 'sent',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Sent'
        ]);
    }

    public function getFriendList(){
        $friends = User::join('friendships', function($join) {
            $join->on('users.id', 'friendships.sender_id')
            ->orOn('users.id', 'friendships.reciver_id');
        } )
            ->select('users.*', 'friendships.friend_status', 'friendships.reciver_id', 'friendships.sender_id')
            ->where('users.id', '!=', auth()->id())
            ->where(function($q)
            {
                $q->where('friendships.sender_id', auth()->id())
                ->orWhere('friendships.reciver_id', auth()->id());
            })
            ->where('friendships.friend_status', 'accept')
            ->get();

        return response()->json($friends);
    }

    public function statusChecker($id){
        //$friendStatus = Friendship::where('reciver_id',  $id)->where('sender_id', auth()->id())->get();

        $friendStatus = Friendship::where(function($q) use ($id) {
            $q->where('sender_id', auth()->id());
            $q->where('reciver_id',  $id);
        })->orWhere(function($q) use ($id) {
            $q->where('sender_id', $id);
            $q->where('reciver_id', auth()->id());
        })->get();


        return response()->json($friendStatus);
    }

    public function friendRiquests(){
        $friendRiquests = Friendship::join('users', 'friendships.sender_id', '=', 'users.id')
            ->select('friendships.*', 'users.name')
            ->where('reciver_id',  auth()->id())->where('friend_status', 'sent')->get();

        return response()->json($friendRiquests);
    }

    public function accept($id){
        Friendship::where('sender_id', $id)->update(['friend_status' => 'accept']);
        return response()->json([
            'success' => true,
            'message' => 'accept'
        ]);
    }

    public function cancel($id){
        Friendship::where('sender_id', $id)->update(['friend_status' => 'denied']);
        return response()->json([
            'success' => true,
            'message' => 'denied'
        ]);
    }
}
