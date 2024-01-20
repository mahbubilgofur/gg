<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Album extends Model
{
    use HasFactory;

    protected $table = 'tbl_album';
    protected $primaryKey = 'id_album';

    protected $fillable = [
        'nama_album',
        'deskripsi',
        'tgl_dibuat',
        'id_user',
    ];
}
