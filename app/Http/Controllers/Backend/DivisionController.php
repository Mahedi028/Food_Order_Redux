<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddDivisionRequest;
use App\Interfaces\DivisionInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class DivisionController extends Controller
{
    use ResponseTrait;
    protected $division;
    public function __construct(DivisionInterface $divisionInterface)
    {
        $this->division=$divisionInterface;
    }
    //---------------------------------API-----------------------//
    public function getAllDivitions()
    {
        try{
            $divisions=$this->division->getAllDivisions();
            return $this->responseSuccess($divisions,'fetch all divitions',200);
        }catch(\Exception $e){
            return $this->responseError($e->getMessage(),'error',401);
        }
    }
    //---------------------------------API-----------------------//
    public function All()
    {
        try{
            $divisions=$this->division->getAllDivisions();
            return view('backend.division.division_add',compact('divisions'));
        }catch(\Exception $e){
            $notification=array(
                'message'=>$e->getMessage(),
                'type'=>'danger'
            );
            return redirect()->back();
        }

    }//end of method
    public function Add()
    {
        try{
            $divisions=$this->division->getAllDivisions();
            return view('backend.division.division_add',compact('divisions'));
        }catch(\Exception $e){
            $notification=array(
                'message'=>$e->getMessage(),
                'type'=>'danger'
            );
            return redirect()->back();
        }
    }//end of method

    public function Store(AddDivisionRequest $request)
    {
        $data=[];
        $data['name']=$request->input('name');
        try{
            $data=$this->division->addDivision($data);
            $notification=array(
                'message'=>'Division Added Successfully',
                'type'=>'success'
            );
            return redirect()->route('division.all')->with($notification);
        }catch(\Exception $e){
            $notification=array(
                'message'=>$e->getMessage(),
                'type'=>'danger'
            );
            return redirect()->back();
        }
    }//end of method

    public function Edit()
    {

    }//end of method

    public function Update()
    {

    }//end of method


    public function Delete()
    {

    }//end of method






}
