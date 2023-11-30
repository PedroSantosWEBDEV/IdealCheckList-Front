<?php

namespace App\Interfaces\Repository;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

interface BaseRepositoryInterface
{
    public function all(array $columns = ['*']): Collection;

    public function allForDataTables(array $columns = ['*'], array $relations = []): Builder;

    public function exists(array $attributes): bool;

    public function find(int $id, array $columns = ['*']): Model;

    public function findBy(array $attributes): Collection;

    public function findOneBy(array $attributes): Model;

    public function findMany(array $ids, $columns = ['*']);

    public function findOrFail(int $id, array $columns = ['*']): Model | ModelNotFoundException;

    public function findOrNew(int $id, array $columns = ['*']): Model;

    public function firstOrNew(array $attributes = [], array $values = []): Model;

    public function firstOrCreate(array $attributes = [], array $values = []): Model;

    public function updateOrCreate(array $attributes, array $values = []): bool | Model;

    public function firstOrFail(array $columns = ['*']): Model | ModelNotFoundException;

    public function make(array $attributes = []): Model;

    public function create(array $attributes = []): Model;

    public function insert(array $attributes = []): bool;

    public function update(int $id, array $attributes): bool;

    public function delete(int $id): bool;
}
