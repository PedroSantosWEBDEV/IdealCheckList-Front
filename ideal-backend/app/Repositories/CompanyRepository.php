<?php

namespace App\Repositories;

use App\Interfaces\Repository\CompanyRepositoryInterface;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Company;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class CompanyRepository extends BaseRepository implements CompanyRepositoryInterface
{
    public function __construct(Company $model)
    {
        $this->model = $model;
    }

    

}
