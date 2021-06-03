<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\User\LoginService;
use Socialite;
use App\Models\User;

class LoginController extends Controller
{
    protected $loginService;

    public function __construct(LoginService $loginService)
    {
        return $this->loginService = $loginService;
    }
    //
    public function showLogin()
    {
        return view('user.auth.login');
       
    }

    public function redirectLogin()
    {
       return Socialite::driver('facebook')->redirect();
          
    }

    public function callbackLogin()
    {
        $dataFB = Socialite::driver('facebook')->user();
        return $this->loginService->checkLogin($dataFB);
    }
}
