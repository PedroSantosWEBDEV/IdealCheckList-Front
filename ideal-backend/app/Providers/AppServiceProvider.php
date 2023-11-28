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
        $this->app->bind(\App\Interfaces\Service\UserServiceInterface::class, \App\Services\Dashboard\Admin\UserService::class);
        $this->app->bind(\App\Interfaces\Service\Api\UserServiceInterface::class, \App\Services\Api\UserService::class);
        $this->app->bind(\App\Interfaces\Service\Api\ContractServiceInterface::class, \App\Services\Api\ContractService::class);
        $this->app->bind(\App\Interfaces\Service\Api\ClientServiceInterface::class, \App\Services\Api\ClientService::class);
        $this->app->bind(\App\Interfaces\Service\Api\ProjectServiceInterface::class, \App\Services\Api\ProjectService::class);
        $this->app->bind(\App\Interfaces\Service\Api\ProjectExtraCostServiceInterface::class, \App\Services\Api\ProjectExtraCostService::class);
        $this->app->bind(\App\Interfaces\Service\Api\ProjectMilestoneServiceInterface::class, \App\Services\Api\ProjectMilestoneService::class);
        $this->app->bind(\App\Interfaces\Service\Api\TagWikiServiceInterface::class, \App\Services\Api\TagWikiService::class);
        $this->app->bind(\App\Interfaces\Service\Api\CategoryWikiServiceInterface::class, \App\Services\Api\CategoryWikiService::class);
        $this->app->bind(\App\Interfaces\Service\Api\CategoryServiceInterface::class, \App\Services\Api\CategoryService::class);
        $this->app->bind(\App\Interfaces\Service\Api\TagServiceInterface::class, \App\Services\Api\TagService::class);
        $this->app->bind(\App\Interfaces\Service\Api\TaskServiceInterface::class, \App\Services\Api\TaskService::class);
        $this->app->bind(\App\Interfaces\Service\Api\TaskChecklistServiceInterface::class, \App\Services\Api\TaskChecklistService::class);
        $this->app->bind(\App\Interfaces\Service\Api\TaskAttachmentServiceInterface::class, \App\Services\Api\TaskAttachmentService::class);
        $this->app->bind(\App\Interfaces\Service\Api\ConfigServiceInterface::class, \App\Services\Api\ConfigService::class);
        $this->app->bind(\App\Interfaces\Service\Api\TeamServiceInterface::class, \App\Services\Api\TeamService::class);
        $this->app->bind(\App\Interfaces\Service\Api\TeamUserServiceInterface::class, \App\Services\Api\TeamUserService::class);
        $this->app->bind(\App\Interfaces\Service\Api\WorkDayServiceInterface::class, \App\Services\Api\WorkDayService::class);
        $this->app->bind(\App\Interfaces\Service\InstanceServiceInterface::class, \App\Services\Dashboard\Admin\InstanceService::class);
        $this->app->bind(\App\Interfaces\Service\Api\WikiPostServiceInterface::class, \App\Services\Api\WikiPostService::class);
        $this->app->bind(\App\Interfaces\Service\Api\InstanceServiceInterface::class, \App\Services\Api\InstanceService::class);
        $this->app->bind(\App\Interfaces\Service\Api\SelectServiceInterface::class, \App\Services\Api\SelectServiceInterface::class);
        $this->app->bind(\App\Interfaces\Service\AccessControlServiceInterface::class, \App\Services\Dashboard\Admin\AccessControlService::class);
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
