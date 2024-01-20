<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Komentar extends Model
{
    use HasFactory;

    protected $table = 'tbl_komentar';
    protected $primaryKey = 'id_komentar';
    public $timestamps = false;

    protected $fillable = [
        'id_foto',
        'id_user',
        'isi_komentar',
        'tgl_komentar',
    ];
}
