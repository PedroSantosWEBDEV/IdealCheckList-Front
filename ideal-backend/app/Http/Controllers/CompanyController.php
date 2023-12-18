<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Interfaces\Service\CompanyServiceInterface;
use App\Models\Company as ModelsCompany;
use App\Requests\CompanyRequest;
use App\Traits\SelectAutoCompleteTrait;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{
    use SelectAutoCompleteTrait;
    private $companyService;
    public $selectModel = ModelsCompany::class;
    public $selectValueKey = 'id';
    public $selectLabelKey = 'name';

    public function __construct(CompanyServiceInterface $companyService)
    {
        $this->middleware('jwt.verify');
        $this->companyService = $companyService;
    }

    public function index()
    {
        // print_r($this->middleware('jwt.verify'));die;
        $companyServices = $this->companyService->all();

        return response()->json(['companys' => $companyServices, 'message' => 'Dados da Empresa'], 200);
    }

    


}