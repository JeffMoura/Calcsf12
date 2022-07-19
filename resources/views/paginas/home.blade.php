{{-- AUTOR: Jefferson Aparecido Martins de Moura --}}


<!--Importa as extensões de layout e seções  -->
@extends('layout.layout')
<!-- Javascrip -->
<script src="{{asset('js/jquery.min.js')}}"></script>
<script src="../js/calculos_gerais.js"></script>
<script src="../js/script_numeros.js"></script>
<!-- Styles-->
<link rel="stylesheet" href="{{ asset('css/app.css')}}">


@section('cabecalho')
        <div class="btn-group" role="group" aria-label="Grupo de botões com dropdown aninhado">
                <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mais Opções
                        </button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modalImportar"><i class="bi-upload"></i>  Importar</a>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modalRelatório"><i class="bi-newspaper"></i> Estatísticas</a>
                        {{--  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modalGrafico"><i class="bi-file-bar-graph"></i> Gráfico</a> --}}
                                <a class="dropdown-item" type="submit" id="btn_export"><i class="bi-box-arrow-up-right"></i> Exportar</a>
                                
                        </div>
                </div>
                <button type="button" class="btn btn-warning"  data-toggle="modal" data-target="#modal_limpar"> <i class="bi-x-square"></i> Limpar Tudo </button>
        </div>
@stop

@section('conteudo')
<!-- CABEÇALHO-->


<div class="table-responsive">

    <form method="post" class="form-inline" action="{{route('exportar')}}" autocomplete="off"  onsubmit="return true;" id="calculadora">
         @csrf
        <table class="table table-borderless">
            <thead>
                <tr class="text-center ">
                    <th>Indivíduo</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Saúde Geral) Em geral, você diria que sua saúde é: (1) Excelente (2) Muito boa  (3) Boa   (4) Razoável   (5) Ruim">SF1 </th>
                    <th data-toggle="tooltip" data-placement="top" title="(Capacidade Funcional) Atividades moderadas, como mover uma mesa, empurrar um aspirador de pó, boliche ou jogar golfe: (1) Sim, dificulta muito (2) Sim, dificulta um pouco  (3) Não, não dificulta de modo algum">SF2</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Capacidade Funcional) Subir vários lances de escada: (1) Sim, dificulta muito  (2) Sim, dificulta um pouco (3) Não, não dificulta de modo algum">SF3</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Aspecto Físico) Realizou menos tarefa do que gostaria? (1) Sim  (2) Não ">SF4</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Aspecto Físico) Esteve limitado no seu tipo de trabalho ou outras atividades? (1) Sim  (2) Não">SF5</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Aspecto Emocional) Realizou menos tarefa do que gostaria? (1) Sim  (2) Não">SF6</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Aspecto Emocional) Não trabalhou ou não fez qualquer das atividades com tanto cuidado como geralmente faz? (1) Sim  (2) Não">SF7</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Dor) Durante as últimas 4 semanas, quanto a dor interferiu no seu trabalho normal? (1) De maneira alguma  (2) Um pouco  (3) Moderadamente  (4) Bastante  (5) Extremamente">SF8</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Saúde Mental e Vitalidade) Quanto tempo você tem se sentido calmo ou tranquilo: (1) Todo o tempo  (2) A maior parte do tempo  (3) Uma boa parte do tempo  (4) Alguma parte do tempo  (5) Uma pequena parte do tempo  (6) Nem um pouco do tempo">SF9</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Saúde Mental e Vitalidade) Quanto tempo você tem se sentido com muita energia? (1) Todo o tempo  (2) A maior parte do tempo  (3) Uma boa parte do tempo  (4) Alguma parte do tempo  (5) Uma pequena parte do tempo  (6) Nem um pouco do tempo">SF10</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Saúde Mental e Vitalidade) Quanto tempo você tem se sentido desanimado e deprimido? (1) Todo o tempo  (2) A maior parte do tempo  (3) Uma boa parte do tempo  (4) Alguma parte do tempo  (5) Uma pequena parte do tempo  (6) Nem um pouco do tempo">SF11</th>
                    <th data-toggle="tooltip" data-placement="top" title="(Aspecto Social) Quanto tempo a sua saúde ou problemas emocionais atrapalharam suas atividades sociais ?  (1) Todo o tempo  (2) A maior parte do tempo  (3) Algumas vezes  (4) Um pouco do tempo  (5) Nenhuma das vezes">SF12</th>
                    <th class="text-center table-primary">PCS</th>
                    <th class="text-center table-primary">MCS</th>

                    <th class="text-center "></th>
                </tr>
            </thead>
            <tbody id="itemlist">
                <tr class="item_linha">
                    <td class="item_coluna">
                        <input type="number" name="item_calc[]" class="item form-control" value="1" id="item_calc" readonly="readonly" />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfum[]" class="sfum form-control" onkeypress="return onlynumberOP03();" maxlength="1"
                            autofocus='true' id="ssfum1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfdois[]" class="sfdois form-control" onkeypress="return onlynumberOP02();"
                            maxlength="1" id="ssfdois1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssftres[]" class="sftres form-control" onkeypress="return onlynumberOP02();"
                            maxlength="1" id="ssftres1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfquatro[]" class="sfquatro form-control" onkeypress="return onlynumberOP01();"
                            maxlength="1" id="ssfquatro1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfcinco[]" class="sfcinco form-control" onkeypress="return onlynumberOP01();"
                            maxlength="1" id="ssfcinco1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfseis[]" class="sfseis form-control" onkeypress="return onlynumberOP01();"
                            maxlength="1" id="ssfseis1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfsete[]" class="sfsete form-control" onkeypress="return onlynumberOP01();"
                            maxlength="1" id="ssfsete1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfoito[]" class="sfoito form-control" onkeypress="return onlynumberOP03();"
                            maxlength="1" id="ssfoito1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text"  name="ssfnove[]" class="sfnove form-control" onkeypress="return onlynumberOP04();"
                            maxlength="1" id="ssfnove1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfdez[]" class="sfdez form-control" onkeypress="return onlynumberOP04();"
                            maxlength="1" id="ssfdez1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfonze[]" class="sfonze form-control" onkeypress="return onlynumberOP04();"
                            maxlength="1" id="ssfonze1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" name="ssfdoze[]" class="sfdoze form-control" onkeypress="return onlynumberOP03();"
                            maxlength="1" id="ssfdoze1" placeholder=" " />
                    </td>
                    <td class="item_coluna">
                        <input type="text" class="ppcs form-control" id="pcs1" name="pcs[]" readonly="readonly" />
                    </td>
                    <td class="item_coluna">
                        <input type="text" class="mmcs form-control" id="mcs1" name="mcs[]" readonly="readonly" />
                    </td>
                    <td class="button_column"></td>
                </tr>
            </tbody>
            <tbody>
                <tr class="form-group">
                    <td colspan="2">
                        <button type="button" class="btn btn-success" name="adicionar" id="adicionar"><i class="bi-plus-circle-fill"></i> Inserir Novo</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="form-group text-center">
                    <td colspan="12" style=" text-align:right">Resumo do Componente Físico (PCS):&nbsp;&nbsp;</td>
                    <td>Média Geral:<input class="form-input form-control" readonly="readonly" name="pcs_media"
                            id="pcs_media" readonly="readonly" type="text"></td>
                    <td>Desvio Padrão:<input class="form-input form-control" readonly="readonly" name="pcs_desviopadrao"
                            id="pcs_desviopadrao" readonly="readonly" type="text"></td>
                    <td>Coeficiente Variação:<input class="form-input form-control" readonly="readonly"
                            name="pcs_coeficiente" id="pcs_coeficiente" readonly="readonly" type="text" placeholder="%" ></td>

                </tr>
                <tr class="form-group">
                    <td colspan="12" style=" text-align:right">Resumo do Componente Mental (MCS):&nbsp;&nbsp;</td>
                    <td><input class="form-input form-control" readonly="readonly" name="mcs_media" id="mcs_media"
                            readonly="readonly" type="text"></td>
                    <td><input class="form-input form-control" readonly="readonly" name="mcs_desviopadrao"
                            id="mcs_desviopadrao" readonly="readonly" type="text"></td>
                    <td><input class="form-input form-control" readonly="readonly" name="mcs_coeficiente"
                            id="mcs_coeficiente" readonly="readonly" type="text" placeholder="%" ></td>

                </tr>
            </tfoot>
        </table>
    </form>

</div>








<!-- CAIXAS DE ALERTAS -->

<!-- MODAL botão limpar tudo-->
<div class="modal fade" id="modal_limpar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Atenção!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Deseja limpar e apagar todos os campos?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-dismiss="modal">Não</button>
                <button type="button" class="btn btn-danger" id="btn_limpar" data-dismiss="modal">Sim</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal RELATÓRIO -->
<div class="modal fade" id="modalRelatório" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">ESTATÍSTICA DESCRITIVA</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" class="form-inline" action="{{route('relatorio_descritivo')}}"  enctype="multipart/form-data" autocomplete="off"  id="form_relatorio">
                @csrf
            <div class="modal-body table-responsive">
                <table>
                    <thead>
                        <tr class="text-center ">
                            <th class="text-center table-danger">Domínio</th>
                            <th>Média</th>
                            <th>Desvio Padrão</th>
                            <th>Coeficiente de Variação</th>
                            <th>Valor Máximo</th>
                            <th>Valor Mínimo</th>
                            <th>Amplitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_pcs"
                                  readonly="readonly" value="FÍSICO" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_pcs_media"
                                    id="rel_pcs_media" readonly="readonly"  type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_pcs_desviopadrao"
                                    id="rel_pcs_desviopadrao" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_pcs_coeficiente"
                                    id="rel_pcs_coeficiente" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_pcs_valor_maximo"
                                    id="rel_pcs_valor_maximo" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_pcs_valor_minimo"
                                    id="rel_pcs_valor_minimo" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_pcs_amplitude"
                                    id="rel_pcs_amplitude" readonly="readonly" type="text"></td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_mcs"
                                  readonly="readonly" value="MENTAL" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_mcs_media"
                                    id="rel_mcs_media" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_mcs_desviopadrao"
                                    id="rel_mcs_desviopadrao" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_mcs_coeficiente"
                                    id="rel_mcs_coeficiente" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_mcs_valor_maximo"
                                    id="rel_mcs_valor_maximo" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_mcs_valor_minimo"
                                    id="rel_mcs_valor_minimo" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="rel_mcs_amplitude"
                                    id="rel_mcs_amplitude" readonly="readonly" type="text"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-body table-responsive">
                <table>
                    <thead>
                        <tr class="text-center ">
                            <th class="text-center table-danger">QUESTÃO</th>
                            <th>Média</th>
                            <th>Desvio Padrão</th>
                            <th>Coeficiente de Variação</th>
                            <th>Valor Máximo</th>
                            <th>Valor Mínimo</th>
                            <th>Amplitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf1"
                                  readonly="readonly" value="SF1" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF1"
                                    id="mediaSF1" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF1"
                                    id="desviopadraoSF1" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF1"
                                    id="coeficienteSF1" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF1"
                                    id="valor_maximoSF1" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF1"
                                    id="valor_minimoSF1" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF1"
                                    id="amplitudeSF1" readonly="readonly" type="text"></td>

                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf2"
                                  readonly="readonly" value="SF2" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF2"
                                    id="mediaSF2" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF2"
                                    id="desviopadraoSF2" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF2"
                                    id="coeficienteSF2" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF2"
                                    id="valor_maximoSF2" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF2"
                                    id="valor_minimoSF2" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF2"
                                    id="amplitudeSF2" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf3"
                                  readonly="readonly" value="SF3" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF3"
                                    id="mediaSF3" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF3"
                                    id="desviopadraoSF3" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF3"
                                    id="coeficienteSF3" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF3"
                                    id="valor_maximoSF3" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF3"
                                    id="valor_minimoSF3" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF3"
                                    id="amplitudeSF3" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf4"
                                  readonly="readonly" value="SF4" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF4"
                                    id="mediaSF4" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF4"
                                    id="desviopadraoSF4" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF4"
                                    id="coeficienteSF4" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF4"
                                    id="valor_maximoSF4" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF4"
                                    id="valor_minimoSF4" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF4"
                                    id="amplitudeSF4" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf5"
                                  readonly="readonly" value="SF5" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF5"
                                    id="mediaSF5" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF5"
                                    id="desviopadraoSF5" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF5"
                                    id="coeficienteSF5" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF5"
                                    id="valor_maximoSF5" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF5"
                                    id="valor_minimoSF5" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF5"
                                    id="amplitudeSF5" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf6"
                                  readonly="readonly" value="SF6" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF6"
                                    id="mediaSF6" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF6"
                                    id="desviopadraoSF6" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF6"
                                    id="coeficienteSF6" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF6"
                                    id="valor_maximoSF6" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF6"
                                    id="valor_minimoSF6" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF6"
                                    id="amplitudeSF6" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf7"
                                  readonly="readonly" value="SF7" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF7"
                                    id="mediaSF7" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF7"
                                    id="desviopadraoSF7" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF7"
                                    id="coeficienteSF7" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF7"
                                    id="valor_maximoSF7" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF7"
                                    id="valor_minimoSF7" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF7"
                                    id="amplitudeSF7" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf8"
                                  readonly="readonly" value="SF8" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF8"
                                    id="mediaSF8" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF8"
                                    id="desviopadraoSF8" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF8"
                                    id="coeficienteSF8" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF8"
                                    id="valor_maximoSF8" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF8"
                                    id="valor_minimoSF8" readonly="readonly" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF8"
                                    id="amplitudeSF8" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf9"
                                  readonly="readonly" value="SF9" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF9"
                                id="mediaSF9" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF9"
                                id="desviopadraoSF9" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF9"
                                id="coeficienteSF9" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF9"
                                id="valor_maximoSF9" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF9"
                                id="valor_minimoSF9" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF9"
                                id="amplitudeSF9" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf10"
                                  readonly="readonly" value="SF10" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF10"
                                id="mediaSF10" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF10"
                                id="desviopadraoSF10" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF10"
                                id="coeficienteSF10" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF10"
                                id="valor_maximoSF10" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF10"
                                id="valor_minimoSF10" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF10"
                                id="amplitudeSF10" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf11"
                                  readonly="readonly" value="SF11" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF11"
                                id="mediaSF11" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF11"
                                id="desviopadraoSF11" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF11"
                                id="coeficienteSF11" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF11"
                                id="valor_maximoSF11" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF11"
                                id="valor_minimoSF11" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF11"
                                id="amplitudeSF11" readonly="readonly" type="text"></td>
                        </tr>
                        <tr class="form-group text-center">
                            <td><input class="form-input form-control" readonly="readonly" name="nome_sf12"
                                  readonly="readonly" value="SF12" type="text"></td>
                            <td><input class="form-input form-control" readonly="readonly" name="mediaSF12"
                                id="mediaSF12" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="desviopadraoSF12"
                                id="desviopadraoSF12" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="coeficienteSF12"
                                id="coeficienteSF12" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="valor_maximoSF12"
                                id="valor_maximoSF12" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="valor_minimoSF12"
                                id="valor_minimoSF12" readonly="readonly" type="text"></td>
                        <td><input class="form-input form-control" readonly="readonly" name="amplitudeSF12"
                                id="amplitudeSF12" readonly="readonly" type="text"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="submit" class="btn btn-primary">Relatório</button>
            </div>
            </form>
        </div>
    </div>
</div>

<!-- Modal IMPORTAR -->
<div class="modal fade" id="modalImportar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">IMPORTAR DADOS</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form action="{{route('upload')}}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="modal-body">
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Arquivo xlsx: </label>
                        <input type="file" name="dados" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="submit" class="btn btn-success">Importar</button>

                </div>
                
            </form>
        </div>
    </div>
</div>

<!-- MENSAGEM DE ERRO VALIDAÇÃO -->
@if ($errors->any())
  <div class="modal fade" id="modal_erro_validacao" tabindex="-1" role="dialog" aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
    <div class="modal-dialog " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="TituloModalLongoExemplo">Atenção!</h5>

        </div>
        <div class="modal-body">
            @foreach ( $errors->all() as $error )
            <div class="alert alert-danger" role="alert">  {{$error}} </div>
            @endforeach
        </div>

      </div>
    </div>
  </div>
  @endif


{{-- Chama o modal de erro --}}
<script>
    $(document).ready( function () {
        $('#modal_erro_validacao').modal('show');
    });

</script>

<!-- Chama os textos descrevendo as perguntas que cada SF correspondem -->
<script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
</script>

<!-- Chama o botão para exportar o formulário principal-->
<script> 
$("#btn_export").click(function() {
 var formulario = document.getElementById('calculadora');
 formulario.submit();
});
</script>



<script>

</script>
@stop
