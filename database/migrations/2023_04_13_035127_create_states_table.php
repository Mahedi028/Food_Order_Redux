<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if(!Schema::hasTable('states')){
            Schema::create('states', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name');
                $table->unsignedBigInteger('district_id');
                $table->unsignedBigInteger('division_id');
                $table->foreign('district_id')
                        ->references('id')
                        ->on('districts')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');
                $table->foreign('division_id')
                        ->references('id')
                        ->on('divisions')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('states');
    }
};
