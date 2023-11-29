<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class TypeUserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function index()
    {
        $user = auth()->user();
        $roles = $user->getRoleNames();
        $permissionNames = $user->getPermissionNames();

        return response()->json(['type' => $roles, 'message' => 'Dados do Usuario'], 200);
    }

    public function store(Request $request)
    {

        $permission = $request->permission;
        $role = $request->role;
        $permission = Permission::create(['name' => $permission]);
        $role = Role::create(['name' => $role]);
        $role->givePermissionTo($permission);
        $permission->assignRole($role);
        return response()->json(['role' => $permission, 'message' => 'Tipo de usuario criado!'], 200);
    }
}
