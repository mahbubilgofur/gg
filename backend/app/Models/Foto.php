<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    use HasFactory;

    protected $table = 'tbl_foto';
    protected $primaryKey = 'id_foto';
    protected $fillable = [
        'judul_foto',
        'deskripsi_foto',
        'tgl_unggah',
        'lokasi_file',
        'id_album',
        'id_user',
    ];
}
