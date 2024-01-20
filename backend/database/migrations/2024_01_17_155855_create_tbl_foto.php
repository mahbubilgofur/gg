<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_foto', function (Blueprint $table) {
            $table->increments('id_foto');
            $table->string('judul_foto');
            $table->string('deskripsi_foto');
            $table->string('tgl_unggah');
            $table->string('lokasi_file');
            $table->string('id_album');
            $table->string('id_user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_foto');
    }
};
