<?php

namespace App\Http\Controllers;

use App\Http\Requests\user\Register;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
   public function register(Register $request)
   {
        User::query()->create([
            'name' => $request ->get('name'),
            'email' => $request ->get('email'),
            'role' => $request['role'],
            'status' => 'active',
            'avatar' => 'https://via.placeholder.com/150',
            'password' => Hash::make($request -> get('password')),
        ]);
        return response() -> json([
            'success' => true,
            'message' => 'You are successfully registered'
        ]);
   }

   public function getUser($id)
   {
        $user = User::where('id', $id)->get();

        return response()->json($user);
   }

   public function getAllUsers()
   {
       $user = User::where('id', '!=', auth()->id())->get();

       return response()->json($user);
   }

   public function search(Request $request)
   {
        $search = $request->get('q');
        $user =  User::where('name', 'LIKE', "%{$search}%")->get();

        return response()->json($user);
   }

   public function updateStatus(Request $request, $id)
   {
       User::where('id', $id)->update(['status' => $request->status]);

       return response()->json([
           'message' => 'Status has been chnages'
       ]);
   }

}
