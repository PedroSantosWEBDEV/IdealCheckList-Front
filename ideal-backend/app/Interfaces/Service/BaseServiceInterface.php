<?php

namespace App\Interfaces\Service;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

interface BaseServiceInterface
{
    public function all(array $columns = ['*']): Collection;

    public function allForDataTables(array $columns = ['*'], array $relations = []): Builder;

    public function exists(array $attributes): bool;

    public function find(int $id, $columns = ['*']): Model;

    public function findBy(array $attributes): Collection | \Exception;

    public function findOneBy(array $attributes): Model;

    public function findOrFail(int $id, array $columns = ['*']): Model | ModelNotFoundException;

    public function make(array $attributes = []): Model;

    public function create(array $attributes): Model | \Exception;

    public function insert(array $attributes): bool | \Exception;

    public function update(int $id, array $attributes): bool | \Exception;

    public function delete(int $id): bool | \Exception;
}
