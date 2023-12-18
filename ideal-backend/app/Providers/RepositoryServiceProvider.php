<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\App\Interfaces\Repository\BaseRepositoryInterface::class, \App\Repositories\BaseRepository::class);
        $this->app->bind(\App\Interfaces\Repository\UserRepositoryInterface::class, \App\Repositories\UserRepository::class);
        $this->app->bind(\App\Interfaces\Repository\CompanyRepositoryInterface::class, \App\Repositories\CompanyRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
