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
        $this->app->bind(\App\Interfaces\Repository\Api\ContractRepositoryInterface::class, \App\Repositories\Api\ContractRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\TagWikiRepositoryInterface::class, \App\Repositories\Api\TagWikiRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\TeamRepositoryInterface::class, \App\Repositories\Api\TeamRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\TeamUserRepositoryInterface::class, \App\Repositories\Api\TeamUserRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\ConfigRepositoryInterface::class, \App\Repositories\Api\ConfigRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\CategoryWikiRepositoryInterface::class, \App\Repositories\Api\CategoryWikiRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\ClientRepositoryInterface::class, \App\Repositories\Api\ClientRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\ProjectRepositoryInterface::class, \App\Repositories\Api\ProjectRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\ProjectExtraCostRepositoryInterface::class, \App\Repositories\Api\ProjectExtraCostRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\ProjectMilestoneRepositoryInterface::class, \App\Repositories\Api\ProjectMilestoneRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\CategoryRepositoryInterface::class, \App\Repositories\Api\CategoryRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\TagRepositoryInterface::class, \App\Repositories\Api\TagRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\TaskRepositoryInterface::class, \App\Repositories\Api\TaskRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\TaskChecklistRepositoryInterface::class, \App\Repositories\Api\TaskChecklistRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\TaskAttachmentRepositoryInterface::class, \App\Repositories\Api\TaskAttachmentRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\WorkDayRepositoryInterface::class, \App\Repositories\Api\WorkDayRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\UserRepositoryInterface::class, \App\Repositories\Api\UserRepository::class);
        $this->app->bind(\App\Interfaces\Repository\InstanceRepositoryInterface::class, \App\Repositories\InstanceRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\InstanceRepositoryInterface::class, \App\Repositories\Api\InstanceRepository::class);
        $this->app->bind(\App\Interfaces\Repository\Api\WikiPostRepositoryInterface::class, \App\Repositories\Api\WikiPostRepository::class);
        $this->app->bind(\App\Interfaces\Repository\AccessControlRepositoryInterface::class, \App\Repositories\AccessControlRepository::class);
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
