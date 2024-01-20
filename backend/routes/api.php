<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\FotoController;
use App\Http\Controllers\KomentarController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\AuthhController;









// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::apiResource('users', UserController::class);


Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id_user}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id_user}', [UserController::class, 'update']);
Route::delete('/users/{id_user}', [UserController::class, 'destroy']);





Route::get('/albums', [AlbumController::class, 'index']);
Route::get('/albums/{id_album}', [AlbumController::class, 'show']);
Route::post('/albums', [AlbumController::class, 'store']);
Route::put('/albums/{id_album}', [AlbumController::class, 'update']);
Route::delete('/albums/{id_album}', [AlbumController::class, 'destroy']);




Route::get('/fotos', [FotoController::class, 'index']);
Route::get('/fotos/{id_foto}', [FotoController::class, 'show']);
Route::post('/fotos', [FotoController::class, 'store']);
Route::put('/fotos/{id_foto}', [FotoController::class, 'update']);
Route::delete('/fotos/{id_foto}', [FotoController::class, 'destroy']);




Route::get('/komentars', [KomentarController::class, 'index']);
Route::get('/komentars/{id_komentar}', [KomentarController::class, 'show']);
Route::post('/komentars', [KomentarController::class, 'store']);
Route::put('/komentars/{id_komentar}', [KomentarController::class, 'update']);
Route::delete('/komentars/{id_komentar}', [KomentarController::class, 'destroy']);




Route::get('/likes', [LikeController::class, 'index']);
Route::get('/likes/{id_like}', [LikeController::class, 'show']);
Route::post('/likes', [LikeController::class, 'store']);
Route::put('/likes/{id_like}', [LikeController::class, 'update']);
Route::delete('/likes/{id_like}', [LikeController::class, 'destroy']);

Route::post('/registers', [AuthhController::class, 'register']);
Route::post('/login', [AuthhController::class, 'login']);
// Route::post('/logout', [AuthhController::class, 'logout'])->middleware('auth');
// Secara opsional, gunakan middleware auth pada rute logout
Route::post('/logout', [AuthhController::class, 'logout'])->middleware('auth');
