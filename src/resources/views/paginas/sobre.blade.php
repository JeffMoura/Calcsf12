<!--Importa as extensões de layout e seções  -->
@extends('layout.layout')

<!-- Styles-->
<link rel="stylesheet" href="{{ asset('css/app.css')}}">
<!-- Bootstrap-->
<link rel="stylesheet" href="{{ asset('bootstrap.css')}}">

<style>
/*alinhas textos das DIV */
div {
  text-align: justify;
  text-justify: inter-word;
}
</style>

{{--Seção de cabeçalho--}}
@section('cabecalho')
    <h5 class="m-0 font-weight-bold text-success">SOBRE</h5>
@stop


{{-- Seção de conteúdo --}}
@section('conteudo')

    <div class="container-fluid">
        <div class="grid-text">
            <h2 class="text-center "><b>A Calculadora SF-12</b></h2>
            <p class="text-justify fs-6">O <a target="_blank" href="../img/questionario.png"> questionário 12-Item Short-Form Health Survey (SF-12) </a> composto por doze itens, que consideram a percepção
             do indivíduo em relação aos aspectos de sua saúde nas quatro últimas semanas. Cada item possui um grupo de respostas distribuídas em uma
              escala graduada, tipo Likert, sendo avaliadas as seguintes dimensões: função física, aspecto físico, dor, saúde geral, vitalidade, função
               social, aspecto emocional e saúde mental. Através de um algoritmo próprio do instrumento, dois escores podem ser mensurados: o físico (PCS)
                e o mental (MCS). Em ambos, a pontuação varia em uma escala de zero a cem, sendo os maiores escores associados a melhores níveis de QV.</p>

            <p class="text-justify fs-6"> São doze questões no formulário, e a resposta de cada item é baseada em uma escala Likert, ao qual, nesta escala graduada 
            os valores possuem <a target="_blank" href="../img/pesos.jpg"> pesos atribuídos </a>, que somados a uma <a target="_blank" href="../img/equacoes.jpg"> constante específica </a>, tanto de PCS quanto de MCS, são obtidos os resultados de ambos os domínios. </p> 
            
        
            <p class="text-justify fs-6"> Diante da problemática de vários profissionais e pesquisadores da saúde realizar de modo manual o cálculo para 
            obteção do PCS e MCS do formulário SF-12, surge a proposta desta calculadora online, denominada CalcSF-12, que permite inserir os dados coletados
            com a aplicação do instrumento, e de maneira automatizada, o sistema efetua todos os cálculos dos domínios físico e mental, gerando as estatísticas 
            descritivas e gráficos. A CalcSF-12 também permite a importação dos dados provenientes de uma planilha Excel, cujo modelo pode ser baixado <a href="../img/modelo-planilhaSF12.xlsx">clicando aqui!</a> </p>
      
            <p class="text-justify fs-6"> Para maiores informações sobre a calculadora CalcSF-12 e a abordagem do questionário 12-Item Short-Form Health Survey (SF-12), acesse
            o artigo científico <a target="_blank" href="#">Cálculo dos escores do instrumento SF-12 </a>.</p>

             <p class="text-center">CalcSF-12 v. 1.0.0</p>
             <p class="text-center">Desenvolvido por <a target="_blank" href="http://lattes.cnpq.br/7792398142091042">Jefferson Moura </a></p>

      
        </div>
    </div>

@stop
