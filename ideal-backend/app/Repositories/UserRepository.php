<?php

namespace App\Repositories;

use App\Interfaces\Repository\UserRepositoryInterface;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Builder;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function findUsers(array $columns = ['*'], array $roles): Builder
    {
        $instance = Auth::user()->instance_id;
        $query = $this->model
            ->select($columns)
            ->where('instance_id',$instance);
        
        return $query;
    }

    public function findUsersById(int $id, array $columns = ['*']): Model
    {
    
        return $this->model->find($id, $columns);
    }

    public function findBy(array $attributes): Collection
    {
        return $this->model->where($attributes)->get();
    }

}
