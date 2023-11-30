<?php

namespace App\Interfaces\Service;

use App\Interfaces\Service\BaseServiceInterface;
use App\Services\SelectService;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface SelectServiceInterface 
{

    public function generateData() : array;
    public function setModel(Model $model) : SelectService;
    public function setQuery(Builder $model) : SelectService;
    public function setValueKey(string $key) : SelectService;
    public function setLabelKey(string $key) : SelectService;
    public function setGroupBy(string $key) : SelectService;
    public function getModel() : Model;
    
}
