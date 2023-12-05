<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;
class TypeUserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function index()
    {
        $user = auth()->user();
        // $permissionNames = $user->getPermissionNames();
        if($user->hasPermissionTo('Register User')){
            $roles = Role::all();
        }else{
            return response()->json(['message' => 'Voce nao tem permissao!'], 200);
        }

        return response()->json(['data' => $roles, 'message' => 'Fucoes de Usuario'], 200);
    }

    public function store(Request $request)
    {

        if(is_array($request->permission)){
        $permission = Permission::find($request->permission);
        }else{
            $permission = $request->permission;
        }
        $role = $request->role;
        $role = Role::create(['name' => $role]);
        // $role = Role::create(['name' => $role]);
        $role->givePermissionTo($permission);
        // $permission->assignRole($role);
        return response()->json(['role' => $permission, 'message' => 'Tipo de usuario criado!'], 200);
    }
}
