<?php

namespace App\Services;

use App\Interfaces\Repository\CategoryRepositoryInterface;
use App\Interfaces\Service\CategoryServiceInterface;
use App\Interfaces\Service\SelectServiceInterface;
use App\Services\BaseService;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use PDO;

class SelectService implements SelectServiceInterface
{
    public $model;
    public $groupBy;
    public $valueKey = 'id';
    public $labelKey = 'name';


    /**
     * setLabelKey
     *
     * @param  mixed $key
     * @return SelectService
     */
    public function setLabelKey(string $key): SelectService
    {
        $this->labelKey = $key;
        return $this;
    }

    /**
     * setValueKey
     *
     * @param  mixed $key
     * @return SelectService
     */
    public function setValueKey(string $key): SelectService
    {
        $this->valueKey = $key;
        return $this;
    }

    /**
     * setGroupBy
     *
     * @param  mixed $key
     * @return SelectService
     */
    public function setGroupBy(string $key): SelectService
    {
        $this->groupBy = $key;
        return $this;
    }

    /**
     * setModel
     *
     * @param  mixed $model
     * @return SelectService
     */
    public function setModel(Model $model): SelectService
    {
        $this->model = $model;
        return $this;
    }

    /**
     * getModel
     *
     * @return Model
     */
    public function getModel(): Model
    {
        return $this->model;
    }

    /**
     * setQuery
     *
     * @param  mixed $model
     * @return SelectService
     */
    public function setQuery(Builder $model): SelectService
    {
        $this->model = $model;
        return $this;
    }



    /**
     * generateData
     *
     * @param  mixed $groupBy
     * @param  mixed $labelKey
     * @param  mixed $valueKey
     * @return void
     */
    public function generateData() : array
    {
        $groups = [];
        $groupFormated = [];
        $options = $this->model->get();
        if (!is_null($this->groupBy)) {
            foreach ($options->unique($this->groupBy) as $group) {
                array_push($groups, $group[$this->groupBy]);
            }
            foreach ($groups as $group) {
                $optionFilter = $options->filter(function ($row) use ($group) {
                    return $row[$this->groupBy] == $group;
                })->pluck($this->labelKey, $this->valueKey);
                
                $arrayOptionFormated = [];
                foreach($optionFilter  as $key =>  $option){
                    $arrayOptionTemp = [
                        'value' => $key,
                        'label' => $option
                    ];
                    array_push($arrayOptionFormated,$arrayOptionTemp);
                }

                $arrayFormatedTemp = [
                    "label" => $group,
                    "options" => $arrayOptionFormated
                ];
                
                array_push($groupFormated, $arrayFormatedTemp);
            }
            return $groupFormated;
        }
        if (is_null($this->groupBy)) {
            $options = $this->model->get();
            $optionFilter = $options->pluck($this->labelKey, $this->valueKey);
            $arrayOptionFormated = [];
            foreach($optionFilter  as $key =>  $option){
                $arrayOptionTemp = [
                    'value' => $key,
                    'label' => $option
                ];
                array_push($arrayOptionFormated,$arrayOptionTemp);
            }
            return $arrayOptionFormated;


        }
    }
}
