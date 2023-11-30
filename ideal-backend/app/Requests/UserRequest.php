<?php

namespace App\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // $passwordRule = 'required';

        // if ($this->method() == 'PUT') {
        //     $passwordRule = 'nullable';
        // }

        return [
            'name' => 'nullable',
            'instance_id' =>'nullable',
            'avatar' => 'nullable',
            'username' => 'required',
            'administrator'=> 'nullable',
            'email' => 'required|email|unique:user,email,' . $this->userId,
            'password' => 'nullable',
            'phone' => 'nullable',
            'job_role' => 'nullable',
            'cost_hour' => 'nullable',
            'in_company_since' => 'nullable',
            'birthday' => 'nullable',
            'shift_time' => 'nullable',

        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Nome',
            'email' => 'E-mail',
            'password' => 'Senha',
            'active' => 'Ativo',
        ];
    }

    public function withValidator($validator)
    {

        if ($validator->fails()) {
            throw new HttpResponseException(response()->json([
                'msg'   => 'Ops! Algum campo obrigatório não foi preenchido.',
                'status' => false,
                'errors'    => $validator->errors(),
                'url'    => route('users.store')
            ], 403));
       }
    }
}
