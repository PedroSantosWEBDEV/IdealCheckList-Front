<?php

namespace App\Repositories;

use App\Interfaces\Repository\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BaseRepository implements BaseRepositoryInterface
{
    /**
     * @param Model
     */
    protected $model;

    public function all(array $columns = ['*']): Collection
    {
        return $this->model->all($columns);
    }

    public function allForDataTables(array $columns = ['*'], array $relations = []): Builder
    {
        return $this->model->select($columns)->with($relations);
    }

    public function exists(array $attributes): bool
    {
        return $this->model->where($attributes)->exists();
    }

    public function find(int $id, array $columns = ['*']): Model
    {
        return $this->model->find($id, $columns);
    }  

    public function findBy(array $attributes): Collection
    {
        return $this->model->where($attributes)->get();
    }

    public function findOneBy(array $attributes): Model
    {
        return $this->model->where($attributes)->first();
    }

    public function findMany(array $ids, $columns = ['*']): Collection
    {
        return $this->model->findMany($ids, $columns);
    }

    public function findOrFail(int $id, array $columns = ['*']): Model | ModelNotFoundException
    {
        return $this->model->findOrFail($id, $columns);
    }

    public function findOrNew(int $id, array $columns = ['*']): Model
    {
        return $this->model->findOrNew($id, $columns);
    }

    public function firstOrNew(array $attributes = [], array $values = []): Model
    {
        return $this->model->firstOrNew($attributes, $values);
    }

    public function firstOrCreate(array $attributes = [], array $values = []): Model
    {
        return $this->model->firstOrCreate($attributes, $values);
    }

    public function updateOrCreate(array $attributes, array $values = []): bool | Model
    {
        return $this->model->updateOrCreate($attributes, $values);
    }

    public function firstOrFail(array $columns = ['*']): Model | ModelNotFoundException
    {
        return $this->model->firstOrFail($columns);
    }

    public function make(array $attributes = []): Model
    {
        return $this->model->make($attributes);
    }

    public function create(array $attributes = []): Model
    {
        return $this->model->create($attributes);
    }

    public function insert(array $attributes = []): bool
    {
        return $this->model->insert($attributes);
    }

    public function update(int $id, array $values): bool
    {
        return $this->model->find($id)->update($values);
    }

    public function delete(int $id): bool
    {
        return $this->model->find($id)->delete();
    }

}
