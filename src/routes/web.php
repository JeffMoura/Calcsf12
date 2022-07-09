<?php

namespace App\Http\Controllers;
use App\Http\Controllers\calcController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\ImportController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

//Rota que vai receber o upload da planilha
Route::post('/', [ImportController::class, 'upload'])->name('upload');
//Rota que vai direcionar para a exportação dos dados
Route::post('/export', [ExportController::class, 'exportar'])->name('exportar');

//Rota para exportar relatórios
Route::post('/relatorio', [ExportController::class, 'exportarRelatorio'])->name('relatorio_descritivo');



Route::get('/', 'calcController@inicio')->name('paginas.inicio'); //rota página inicial
Route::get('/instrucoes', 'calcController@instrucao')->name('paginas.instrucao'); //rota página instruções
Route::get('/sobre', 'calcController@sobre')->name('paginas.sobre'); //rota página sobre



