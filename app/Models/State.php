<?php

namespace App\Models;

use App\Models\District;
use App\Models\Division;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class State extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function district()
    {
        return $this->belongsTo(District::class,'district_id','id');
    }
    public function division()
    {
        return $this->belongsTo(Division::class,'division_id','id');
    }

}
