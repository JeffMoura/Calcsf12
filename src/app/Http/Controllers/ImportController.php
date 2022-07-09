<?php

namespace App\Http\Controllers;

use App\Imports\DadosImporta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use SebastianBergmann\Environment\Console;

class ImportController extends Controller
{
    public function upload(Request $request)
    {


        //Faz a validação da opção importar
        $validate = $request->validate(
            //regras
            [
                'dados' => 'required|file|mimes:xlsx|max:300000'  //verifica se o arquivo foi selecionado e se está no formato e tamanho exigido
            ],
            //mensagem de erro
            [
                'dados.required' => 'Nenhum arquivo foi selecionado!', //mostra a mensagem de erro caso não tenha sido selecionado nenhum arquivo
                'dados.mimes' => 'O formato do arquivo obrigatório é .xlsx', //mostra a mensagem de erro caso o arquivo não esteja no formato exigido
                'dados.max' => 'O arquivo deve possuir o tamanho máximo de 4mb', //limite máximo de tamanho do arquivo
            ]

        );

        //se todas as regras de validação forem atendidas, executa o código abaixo;
        $dados = array();

        //Verifica caso o arquivo foi enviado
        if ($request->has('dados')) {

            //o array recebe os dados do arquivo enviado
            $dados = (new DadosImporta)->toCollection($request->dados);
            $dados = $dados[0];

            //Tira a primeira linha que vem com os cabeçalhos 
            $dados->shift();
        }
        //após execução do código, é direcionado para a página import
        return view('paginas.import', compact('dados'));
         
    }
}
