<?php

namespace App\Services;

use App\Interfaces\Repository\UserRepositoryInterface;
use App\Interfaces\Service\UserServiceInterface;
use App\Services\BaseService;
use Exception;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class UserService extends BaseService implements UserServiceInterface
{
    public function __construct(UserRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $attributes): Model|Exception
    {
        DB::beginTransaction();

        try {
            // print_r($attributes);die;
            if (!empty($attributes['avatar'])) {
                $attributes['avatar'] = $attributes['avatar']->store('avatar', 'public');
            }
            $attributes['username'] = $attributes['email'];
            $attributes['instance_id'] = Auth::user()->instance_id;
            $attributes['creator_id'] = Auth::user()->id;
            $attributes['active '] = 1;
            if($attributes['administrator'] === 'false'){
                $attributes['administrator'] = 0;
            }else{
                $attributes['administrator'] = 1;
            }
            $pos = strpos($attributes['cost_hour'], ',');
            $post = strpos($attributes['cost_hour'], '.');

            if ($pos <= 3) {
                $attributes['cost_hour'] = str_replace(",", ".", $attributes['cost_hour']);
            } else if ($post >= 1 && $pos >= 3) {
                $attributes['cost_hour'] = str_replace(".", "", $attributes['cost_hour']);
                $attributes['cost_hour'] = str_replace(",", ".", $attributes['cost_hour']);
            }
            // $attributes['avatar'] = $image_path;
            $user = $this->repository->create($attributes);

            DB::commit();

            return $user;
        } catch (\Exception $e) {
            Log::error($e);
            DB::rollBack();

            return $e;
        }
    }

    public function findUsersById(int $id, array $columns = ['*']): Model
    {
        return $this->repository->findUsersById($id, $columns);
    }

    public function update(int $userId, array $attributes): bool|Exception
    {
        DB::beginTransaction();

        try {
            // print_r($attributes['administrator']);die;
            if (!empty($attributes['avatar']) && $attributes['avatar'] !== 'null') {
                $attributes['avatar'] = $attributes['avatar']->store('avatar', 'public');
                $image = $this->repository->find($userId, ['avatar']);
                if ($image->avatar) {
                    Storage::disk('public')->delete($image->avatar);
                }
            }
            $attributes['username'] = $attributes['email'];
            if($attributes['administrator'] === 'false'){
                $attributes['administrator'] = 0;
            }else{
                $attributes['administrator'] = 1;
            }

            $pos = strpos($attributes['cost_hour'], ',');
            $post = strpos($attributes['cost_hour'], '.');

            if ($pos <= 3) {
                $attributes['cost_hour'] = str_replace(",", ".", $attributes['cost_hour']);
            } else if ($post >= 1 && $pos >= 3) {
                $attributes['cost_hour'] = str_replace(".", "", $attributes['cost_hour']);
                $attributes['cost_hour'] = str_replace(",", ".", $attributes['cost_hour']);
            }

            $user = $this->repository->update($userId, $attributes);

            DB::commit();

            return $user;
        } catch (\Exception $e) {
            Log::error($e);
            DB::rollBack();

            return $e;
        }
    }

    public function delete(int $userId): bool|Exception
    {
        DB::beginTransaction();

        try {

            $user = $this->repository->delete($userId);

            DB::commit();

            return $user;
        } catch (\Exception $e) {
            Log::error($e);
            DB::rollBack();

            return $e;
        }
    }

    public function findUsers(array $columns = ['*'], array $roles): Builder
    {
        // print_r("Aqui");
        return $this->repository->findUsers($columns, $roles);
    }

    public function exists(array $attributes): bool
    {
        return $this->repository->exists($attributes);

    }

    public function findBy(array $attributes): Collection
    {
        return $this->repository->findBy($attributes);
    }

}