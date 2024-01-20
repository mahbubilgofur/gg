<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as AuthenticatableUser;
use Illuminate\Notifications\Notifiable;

class User extends AuthenticatableUser implements Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'tbl_user';
    protected $fillable = ['username', 'password', 'email', 'nama_lengkap', 'alamat', 'level'];
    protected $primaryKey = 'id_user';

    protected $attributes = [
        'level' => 1,
    ];
}
