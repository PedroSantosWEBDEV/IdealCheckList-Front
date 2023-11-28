<?php

namespace App\Interfaces\Repository;

use App\Interfaces\Repository\BaseRepositoryInterface;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

interface UserRepositoryInterface extends BaseRepositoryInterface
{

    public function findUsers(array $columns = ['*'], array $roles): Builder;

    public function findUsersById(int $id, array $columns = ['*']): Model;

}
