<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Session;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\Importable;

class DadosImporta implements ToCollection
{
    use Importable;
    /**
     * @param Collection $collections
     */
    public function collection(Collection $collection)
    {
    }
}
