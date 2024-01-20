<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'tbl_user';
    protected $fillable = ['username', 'password', 'email', 'nama_lengkap', 'alamat'];
    protected $primaryKey = 'id_user';
}
