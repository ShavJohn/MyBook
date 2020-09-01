<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::group([
    'prefix' => 'user'
], function () {
    Route::post('register', 'UserController@register');
    Route::get('search', 'UserController@search');
    Route::get('user/{id}', 'UserController@getUser');
    Route::post('sendRequest/{id}', 'FriendshipController@sendRequest');
    Route::get('getstatus/{id}', 'FriendshipController@statusChecker');
    Route::get('friend-riquests', 'FriendshipController@friendRiquests');
    Route::put('accept/{id}', 'FriendshipController@accept');
    Route::put('cancel/{id}', 'FriendshipController@cancel');
    Route::get('/contacts', 'MessageController@get');
    Route::get('/conversation/{id}', 'MessageController@getMessagesFor');
    Route::post('/convrsation/send', 'MessageController@send');
    Route::get('/allusers', 'UserController@getAllUsers');
    Route::put('/statusChange/{id}', 'UserController@updateStatus');
    Route::get('/friends', 'FriendshipController@getFriendList');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
