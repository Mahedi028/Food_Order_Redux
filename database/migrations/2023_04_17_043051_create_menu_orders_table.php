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
        if(!Schema::hasTable('menu_orders')){
            Schema::create('menu_orders', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->unsignedBigInteger('order_id');
                $table->unsignedBigInteger('menu_id');
                $table->integer('quantity');
                $table->decimal('price', 10, 2);
                $table->foreign('order_id')
                        ->references('id')
                        ->on('orders')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');
                $table->foreign('menu_id')
                        ->references('id')
                        ->on('menus')
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
        Schema::dropIfExists('menu_orders');
    }
};
