<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\App\Interfaces\Service\UserServiceInterface::class, \App\Services\UserService::class);
        $this->app->bind(\App\Interfaces\Service\SelectServiceInterface::class, \App\Services\SelectService::class);
        $this->app->bind(\App\Interfaces\Service\CompanyServiceInterface::class, \App\Services\CompanyService::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
