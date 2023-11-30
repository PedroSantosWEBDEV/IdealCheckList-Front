<?php

namespace App\Interfaces\Service;

use App\Interfaces\Service\BaseServiceInterface;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

interface UserServiceInterface extends BaseServiceInterface
{

    public function findUsers(array $columns = ['*'], array $roles): Builder;

    public function findUsersById(int $id, array $columns = ['*']): Model;
}
