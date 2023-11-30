<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Administrador',
            'email' => 'admin@demo.com',
            'username' => 'admin@demo.com',
            'email_verified_at' => now(),
            'password' => 'demo',
            'remember_token' => Str::random(10),
            'active' => true,
            'type_id' => 1,
            'creator_id' => 1,
        ]);

        $user->assignRole('Admin');
        $user->givePermissionTo(Permission::all()->pluck('id'));

        // \App\Models\User::factory(10)->create()->each(function ($user) {
        //     $user->assignRole('User');
        // });
    }
}
