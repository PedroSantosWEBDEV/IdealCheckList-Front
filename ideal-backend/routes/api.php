<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('verify_token', [AuthController::class, 'verify_token']);
    Route::get('me', [AuthController::class, 'me']);

});

Route::controller(UserController::class)->prefix('usuarios')->as('users.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/select', 'select')->name('index');
    Route::post('/novo', 'store')->name('store');
    Route::post('/verify_email','verify_email')->name('verify_email');

    Route::prefix('/{userId}')->group(function () {
        Route::get('/', 'getUserById')->name('getUserById');
        Route::post('/editar', 'update')->name('update');
        Route::delete('/excluir', 'delete')->name('delete');
    });
});