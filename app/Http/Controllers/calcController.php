<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Node\Expr\Print_;
use Khill\Lavacharts\Lavacharts;

class calcController extends Controller
{

    //Funções de redirecionamento para páginas
    public function inicio(){
        return view('paginas.home');
    }
    public function instrucao(){
        return view('paginas.instrucao');
    }
    public function sobre(){
        return view('paginas.sobre');
    }

   
}
