<?php


namespace App\Traits;

use Illuminate\Http\Request;
use App\Services\SelectService;
use Illuminate\Support\Facades\App;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\Response;
use App\Interfaces\Service\SelectServiceInterface;

trait SelectAutoCompleteTrait
{
    public $selectInterface;
    
    /**
     * select
     *
     * @param  mixed $request
     * @return void
     */
    public function select(Request $request)
    {
        $this->selectInterface = new SelectService();
        if (!property_exists($this, 'selectModel')) {
            return response()->json([
                "type" => "Error!",
                "message" => "selectModel variable undefined"
            ], Response::HTTP_FAILED_DEPENDENCY);
        }

        if (property_exists($this, 'selectGroupBy')) {
            $this->selectInterface->setGroupBy($this->selectGroupBy);
        }

        if (property_exists($this, 'selectValueKey')) {
            $this->selectInterface->setValueKey($this->selectValueKey);
        }

        if (property_exists($this, 'selectLabelKey')) {
            $this->selectInterface->setLabelKey($this->selectLabelKey);
        }

        $model = App::make($this->selectModel);
        $this->selectInterface->setModel($model);
        $this->setQuerySelect($request);
        $data = $this->selectInterface->generateData();
        return response()->json($data);
    }
    
    /**
     * setQuerySelect
     *
     * @return void
     */
    public function setQuerySelect(Request $request)
    {
        $model = $this->selectInterface->getModel();
        if(method_exists($this,'selectCustomQuery')){
            $query = $this->selectCustomQuery($model,$request);
        }
        else{
        $query = $model->whereNotNull('id');
        }
        $this->selectInterface->setQuery($query);
    }
}
