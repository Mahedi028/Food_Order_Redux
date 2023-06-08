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
        if(!Schema::hasTable('districts')){
            Schema::create('districts', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name');
                $table->unsignedBigInteger('division_id');
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
        Schema::dropIfExists('districts');
    }
};
