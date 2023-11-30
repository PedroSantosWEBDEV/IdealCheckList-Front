<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create(['name' => 'Admin General']);
        Permission::create(['name' => 'Param General']);
        Permission::create(['name' => 'View Check']);
        Permission::create(['name' => 'Delete My Check']);
        Permission::create(['name' => 'Apply Check']);
        Permission::create(['name' => 'Delete Check']);
        Permission::create(['name' => 'Access Check']);
        Permission::create(['name' => 'Reports']);
        Permission::create(['name' => 'Historic']);
        Permission::create(['name' => 'Ranking']);
        Permission::create(['name' => 'View all date']);
        Permission::create(['name' => 'Config']);
        Permission::create(['name' => 'Units']);
        Permission::create(['name' => 'Type User']);
        Permission::create(['name' => 'Checklist']);
        Permission::create(['name' => 'Notificações']);
        Permission::create(['name' => 'Config Unit Access']);
        Permission::create(['name' => 'User']);
        Permission::create(['name' => 'Register User']);
    }
}
