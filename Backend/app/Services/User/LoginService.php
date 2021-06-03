<?php

namespace App\Services\User;

use App\Services\User\BaseService;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use App\Enums\UserRoll;

class LoginService extends BaseService
{

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function checkLogin($dataFB)
    {
      
        try {
            $idUser = $this->model->where('fb_id', $dataFB->id)->first();
            if (!$idUser) {
                $idUser=$this->model->create([
                    'name' => $dataFB->name,
                    'email' => $dataFB->email,
                    'fb_id' => $dataFB->id,
                    'roll' => UserRoll::Member,
                    'password' => encrypt('123')
                ]);
            }
            Auth::login($idUser);
            return redirect()->route('home');
        } catch (Exception $e) {
            // /Log::info($e->getMessage);
            return $e->getMessage();
        }
    }
}
