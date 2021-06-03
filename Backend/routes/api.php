<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiUserController;
use App\Http\Controllers\User\QuestionController;
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
Route::post('/register',[ApiUserController::class,'register'])->name('register');
Route::post('/login',[ApiUserController::class,'login'])->name('login');
Route::get('/user',[ApiUserController::class,'userInfo'])->middleware('auth:api')->name('user');
Route::resource('/question',QuestionController::class)->middleware('auth:api');
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
