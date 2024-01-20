<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    protected $table = 'tbl_like';

    protected $primaryKey = 'id_like';

    protected $fillable = [
        'id_foto',
        'id_user',
        'tgl_like'
    ];
}
