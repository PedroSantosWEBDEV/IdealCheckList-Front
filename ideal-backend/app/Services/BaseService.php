<?php

namespace App\Services;

use App\Interfaces\Service\BaseServiceInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BaseService implements BaseServiceInterface
{
    protected $repository;

    public function all(array $columns = ['*']): Collection
    {
        return $this->repository->all($columns);
    }

    public function allForDataTables(array $columns = ['*'], array $relations = []): Builder
    {
        return $this->repository->allForDataTables($columns, $relations);
    }

    public function find(int $id, $columns = ['*']): Model
    {
        return $this->repository->find($id, $columns);
    }

    public function exists(array $attributes): bool
    {
        return $this->repository->where($attributes)->exists();
    }

    public function findBy(array $attributes): Collection
    {
        return $this->repository->findBy($attributes);
    }

    public function findOneBy(array $attributes): Model
    {
        return $this->repository->findOneBy($attributes);
    }

    public function findOrFail(int $id, array $columns = ['*']): Model | ModelNotFoundException
    {
        return $this->repository->findOrFail($id, $columns);
    }

    public function make(array $attributes = []): Model
    {
        return $this->repository->make($attributes);
    }

    public function create(array $attributes): Model | \Exception
    {
        return $this->repository->create($attributes);
    }

    public function insert(array $attributes): bool | \Exception
    {
        return $this->repository->insert($attributes);
    }

    public function update(int $id, array $attributes): bool | \Exception
    {
        return $this->repository->update($id, $attributes);
    }

    public function delete(int $id): bool | \Exception
    {
        return $this->repository->delete($id);
    }
}
