<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\DadosExport;
use App\Exports\RelatorioDescritivo;

class ExportController extends Controller
{
     //FUNÇÃO PARA EXPORTAÇÃO DOS DADOS
     public function exportar(Excel $excel, Request $request) 
     {

        //variável recebe o model com o construtor, passando os dados do formulário no parâmetro  
        $dadosexport = new DadosExport([    
            $request['item_calc'],        
            $request['ssfum'],
            $request['ssfdois'],
            $request['ssftres'],
            $request['ssfquatro'],
            $request['ssfcinco'],
            $request['ssfseis'],
            $request['ssfsete'],
            $request['ssfoito'],
            $request['ssfnove'],
            $request['ssfdez'],
            $request['ssfonze'],
            $request['ssfdoze'],
            $request['pcs'],
            $request['mcs'],
        ]);
 
        //retorna o download do arquivo no formato Excel XLSX
        return Excel::download($dadosexport, 'ExportarSF12.xlsx');
     }


     //FUNÇÃO PARA GERAR O ARQUIVO PDF DO RELATÓRIO
     public function exportarRelatorio(Excel $excel, Request $request) 
     {


        //variável recebe o model com o construtor, passando os dados do formulário das estatísticas descritivas no parâmetro  
        $dadosrelatorio = new RelatorioDescritivo([

          [ 
            $request['nome_pcs'],
            $request['rel_pcs_media'],        
            $request['rel_pcs_desviopadrao'],
            $request['rel_pcs_coeficiente'],
            $request['rel_pcs_valor_maximo'],
            $request['rel_pcs_valor_minimo'],
            $request['rel_pcs_amplitude'],
          ],
          [ 
            $request['nome_mcs'],
            $request['rel_mcs_media'],        
            $request['rel_mcs_desviopadrao'],
            $request['rel_mcs_coeficiente'],
            $request['rel_mcs_valor_maximo'],
            $request['rel_mcs_valor_minimo'],
            $request['rel_mcs_amplitude'],
          ],
          [ 
            $request['nome_sf1'],
            $request['mediaSF1'],        
            $request['desviopadraoSF1'],
            $request['coeficienteSF1'],
            $request['valor_maximoSF1'],
            $request['valor_minimoSF1'],
            $request['amplitudeSF1'],

          ],
          [ 
            $request['nome_sf2'],
            $request['mediaSF2'],        
            $request['desviopadraoSF2'],
            $request['coeficienteSF2'],
            $request['valor_maximoSF2'],
            $request['valor_minimoSF2'],
            $request['amplitudeSF2'],

          ],
          [ 
            $request['nome_sf3'],
            $request['mediaSF3'],        
            $request['desviopadraoSF3'],
            $request['coeficienteSF3'],
            $request['valor_maximoSF3'],
            $request['valor_minimoSF3'],
            $request['amplitudeSF3'],

          ],
          [ 
            $request['nome_sf4'],
            $request['mediaSF4'],        
            $request['desviopadraoSF4'],
            $request['coeficienteSF4'],
            $request['valor_maximoSF4'],
            $request['valor_minimoSF4'],
            $request['amplitudeSF4'],

          ],
          [ 
            $request['nome_sf5'],
            $request['mediaSF5'],        
            $request['desviopadraoSF5'],
            $request['coeficienteSF5'],
            $request['valor_maximoSF5'],
            $request['valor_minimoSF5'],
            $request['amplitudeSF5'],

          ],
          [ 
            $request['nome_sf6'],
            $request['mediaSF6'],        
            $request['desviopadraoSF6'],
            $request['coeficienteSF6'],
            $request['valor_maximoSF6'],
            $request['valor_minimoSF6'],
            $request['amplitudeSF6'],

          ],
          [ 
            $request['nome_sf7'],
            $request['mediaSF7'],        
            $request['desviopadraoSF7'],
            $request['coeficienteSF7'],
            $request['valor_maximoSF7'],
            $request['valor_minimoSF7'],
            $request['amplitudeSF7'],

          ],
          [ 
            $request['nome_sf8'],
            $request['mediaSF8'],        
            $request['desviopadraoSF8'],
            $request['coeficienteSF8'],
            $request['valor_maximoSF8'],
            $request['valor_minimoSF8'],
            $request['amplitudeSF8'],

          ],
          [ 
            $request['nome_sf9'],
            $request['mediaSF9'],        
            $request['desviopadraoSF9'],
            $request['coeficienteSF9'],
            $request['valor_maximoSF9'],
            $request['valor_minimoSF9'],
            $request['amplitudeSF9'],

          ],
          [ 
            $request['nome_sf10'],
            $request['mediaSF10'],        
            $request['desviopadraoSF10'],
            $request['coeficienteSF10'],
            $request['valor_maximoSF10'],
            $request['valor_minimoSF10'],
            $request['amplitudeSF10'],

          ],
          [ 
            $request['nome_sf11'],
            $request['mediaSF11'],        
            $request['desviopadraoSF11'],
            $request['coeficienteSF11'],
            $request['valor_maximoSF11'],
            $request['valor_minimoSF11'],
            $request['amplitudeSF11'],

          ],
          [ 
            $request['nome_sf12'],
            $request['mediaSF12'],        
            $request['desviopadraoSF12'],
            $request['coeficienteSF12'],
            $request['valor_maximoSF12'],
            $request['valor_minimoSF12'],
            $request['amplitudeSF12'],

          ],

        ]);
 
       // dd($dadosrelatorio);

    
        //retorna o download do relatório em PDF
          return Excel::download($dadosrelatorio, 'RelatórioSF12.pdf');

     }


}
