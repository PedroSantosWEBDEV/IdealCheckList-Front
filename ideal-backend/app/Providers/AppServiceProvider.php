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
