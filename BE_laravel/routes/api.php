<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DocumentController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', function () {
    $uc = new UserController;
    return $uc->index();
});

Route::get('/users/{id}',[UserController::class, 'show']);



Route::post('/documents', [DocumentController::class, 'add']);

Route::get('/documents', [DocumentController::class, 'index']);

Route::get('/documents/{id}',[DocumentController::class, 'show']);