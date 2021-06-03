<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ApiRegisterRequest;
use App\Http\Requests\ApiLoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ApiUserController extends Controller
{
    //
    public function register(ApiRegisterRequest $request)
    {
        $user = new User;
        $user->fill($request->all());
        $user->password = bcrypt($request->password);
        $user->roll = 1;
        $user->save();
        return response()->json($user);
    }

    public function login(ApiLoginRequest $request)
    {

        $arr = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::attempt($arr)) {
            $idUser = Auth::user()->id;
            $user = User::find($idUser);
            // Creating a token without scopes...
            $user->token = $user->createToken('App')->accessToken;
            return response()->json($user);
        }
        return response()->json(['error' => 'Sai ten truy cap hoac mat khau'], 401);
    }

    public function userInfo(Request $request){
        return response()->json($request->user('api'));
    } 
}
