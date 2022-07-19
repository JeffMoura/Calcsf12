<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithColumnWidths;

class RelatorioDescritivo implements FromCollection, WithHeadings, WithColumnWidths
{
    //cria a variável
    protected $dadosrelatorio;

    //cria um construtor com um parâmetro de array
    public function __construct(array $dadosrelatorio)
    {
        //instancia a variável
        $this->dadosrelatorio = $dadosrelatorio;
    }
    
    //cria o cabeçalho 
    public function headings(): array
    {
        
        return [

            ['Domínio/Item', 'Média', 'Desvio Padrão', 'Coeficiente', 'Máximo', 'Mínimo', 'Amplitude'],
        ];
        
    }

    //ajusta o tamnho das colunas
    public function columnWidths(): array
    {
        return [
            'A' => 15,
            'B' => 10,
            'C' => 15,
            'D' => 10,
            'E' => 10,
            'F' => 10,
            'G' => 10,            
        ];
    }

    /**
    * @return \Illuminate\Support\Collection
    */

    //método que cria uma coleção
    public function collection()
    {
       //método retorna uma nova coleção com os dados do construtor passados dentro do parâmetro.
        return new Collection([$this->dadosrelatorio]);
       
    }
}
