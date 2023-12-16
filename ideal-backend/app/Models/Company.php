<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'user_company';

    protected $fillable = [
        'user_id',
        'name',
        'active',
        'creator_id'
    ];
    public function user()
    {
        return $this->belongsTo("App\Models\User");
    }
}
