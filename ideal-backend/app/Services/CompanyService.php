<?php

namespace App\Services;

use App\Interfaces\Repository\CompanyRepositoryInterface;
use App\Interfaces\Service\CompanyServiceInterface;
use App\Services\BaseService;
use Exception;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class CompanyService extends BaseService implements CompanyServiceInterface
{
    public function __construct(CompanyRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

}