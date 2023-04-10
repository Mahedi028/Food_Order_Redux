<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Route::middleware(['auth:sanctum,admin',config('jetstream.auth_session'),'verified'
// ])->group(function () {
//     Route::get('/admin/dashboard', function () {
//         return view('admin.admin_master');
//     })->name('admin.dashboard')->middleware('auth:admin');
// });

Route::get('/admin/dashboard', function(){
    return view('admin.index');
});


Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '.*');
