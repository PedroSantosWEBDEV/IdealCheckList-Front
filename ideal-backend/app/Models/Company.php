<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'company';

    protected $fillable = [
        'name',
        'active',
        'creator_id'
    ];
    public function user()
    {
        return $this->belongsTo("App\Models\User");
    }
}
