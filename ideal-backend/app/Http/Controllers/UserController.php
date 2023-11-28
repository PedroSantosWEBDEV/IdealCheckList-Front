<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Interfaces\Service\UserServiceInterface;
use App\Models\User as ModelsUser;
use App\Requests\UserRequest;
use App\Traits\SelectAutoCompleteTrait;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Yajra\DataTables\Facades\DataTables;

class UserController extends Controller
{
    use SelectAutoCompleteTrait;
    private $userService;
    public $selectModel = ModelsUser::class;
    public $selectValueKey = 'id';
    public $selectLabelKey = 'name';

    public function __construct(UserServiceInterface $userService)
    {
        $this->middleware('jwt.verify');
        $this->userService = $userService;
    }

    public function index()
    {
        // print_r($this->middleware('jwt.verify'));die;
        $userServices = $this->userService->findUsers(['*'], ['Admin', 'User'])->with(['instance']);

        return response()->json(['users' => $userServices, 'message' => 'Dados do Usuario'], 200);
    }

    public function getUserById(int $userId)
    {
        // print_r("AQUII");die;
        $usuarios = $this->userService->all();
        foreach ($usuarios as $key => $user) {
            $usuarios[$key]['url'] = asset($user['avatar']);
        }
        $userServices = $this->userService->findUsersById($userId, ['*']);
        if (!empty($userServices['avatar']) && $userServices['avatar'] !== 'null') {
            $userServices['avatar'] = $usuarios[0]->url . 'storage/' . $userServices['avatar'];
        }
        // print_r($userServices['workdays']);die;
        return response()->json(['users' => $userServices, 'message' => 'Dados do Usuario'], 200);
    }

    public function verify_email(Request $request)
    {
        // print_r("aquii");die;
        $errors = $this->userService->exists(['email' => $request->email]);
        // print_r($userServices['workdays']);die;
        if ($errors === false) {
            return response()->json(['errors' => $errors, 'message' => 'e-mail valido!'], 200);
        }

        return response()->json(['errors' => $errors, 'message' => 'Esse email já está cadastrado no sistema. Por favor, escolha outro email.'], 200);
    }

    public function store(UserRequest $request)
    {
        // return Log::info('Esse: {avatar}', ['avatar' => $request->avatar]);
        $userService = $this->userService->create($request->all());

        if ($userService instanceof Exception) {
            return response()->json(['message' => 'Usuário não criado!'], 500);
        }

        return response()->json([
            'users' => [$userService],
            'status' => true,
            'message' => 'Usuário Criado com Sucesso',
        ], 200);
    }

    public function delete(int $userId)
    {

        // print_r($image);die;

        $image = $this->userService->find($userId, ['avatar']);
        if ($image->avatar) {
            Storage::disk('public')->delete($image->avatar);
        }
        $userService = $this->userService->delete($userId);


        if ($userService instanceof Exception) {
            return response()->json(['message' => 'Usuário não excluído!'], 500);
        }

        return response()->json(['message' => 'Usuário excluído com sucesso!']);
    }

    public function update(int $userId, UserRequest $request)
    {
        // return Log::info('Esse: {avatar}', ['avatar' => $request->all()]);

        $image = $this->userService->find($userId, ['avatar']);
        Storage::disk('public')->delete($image->avatar);

        $userService = $this->userService->update($userId, $request->all());

        if ($userService instanceof Exception) {
            return response()->json(['message' => 'Usuário não atualizado!'], 500);
        }

        return response()->json(['message' => 'Usuário atualizado com sucesso!']);
    }


}