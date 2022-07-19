<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing; 

class DadosExport implements FromCollection, WithDrawings//, WithHeadings
{

    //cria a variável
    protected $dados;

    //cria um construtor com um parâmetro de array
    public function __construct(array $dados)
    {
        //instancia a variável
        
        $this->dados = $dados;
    }


    //criar logo no arquivo
    public function drawings()
    {
        $drawing = new Drawing();
        $drawing->setName('CalcSF12');
        $drawing->setDescription('Calculadora SF-12');
        $drawing->setPath(public_path('/img/logo_export.png'));
        $drawing->setHeight(200);
        $drawing->setCoordinates('A18');


        return [$drawing];
    }
    
    //cria o cabeçalho 
    /*public function headings(): array
    {
        
        return [
            'Indivíduo',
            'SF1',
            'SF2',
            'SF3',
            'SF4',
            'SF5',
            'SF6',
            'SF7',
            'SF8',
            'SF9',
            'SF10',
            'SF11',
            'SF12',
            'PCS',
            'MCS',
        ];
    }*/
    /**
    * @return \Illuminate\Support\Collection
    */

    //método que cria uma coleção
    public function collection()
    {
       //método retorna uma nova coleção com os dados do construtor passados dentro do parâmetro.
        return new Collection([$this->dados]);
       
    }
}
