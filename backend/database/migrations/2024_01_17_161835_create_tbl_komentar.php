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
        Schema::create('tbl_komentar', function (Blueprint $table) {
            $table->increments('id_komentar');
            $table->string('id_foto');
            $table->string('id_user');
            $table->string('isi_komentar');
            $table->string('tgl_komentar');
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
        Schema::dropIfExists('tbl_komentar');
    }
};
