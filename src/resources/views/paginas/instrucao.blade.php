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
    <h5 class="m-0 font-weight-bold text-success">INSTRUÇÕES</h5>
@stop


{{-- Seção de conteúdo --}}
@section('conteudo')


    <div class="grid-text">
        
        <p class="text-justify">1. Inserir os valores nos campos do formulário <a href="../img/instrucao-1.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
        <p class="text-justify">2. Os valores de PCS e MCS serão calculados automaticamente após o preenchimento de todos os campos de cada item (cada linha) <a href="../img/instrucao-2.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
        <p class="text-justify">3. Clique no Botão "INSERIR NOVO" para criar novos itens (linhas) <a href="../img/instrucao-3.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
        <p class="text-justify">4. Prévia das estatísticas descritivas completas do formulário (Média, Desvio Padrão, Coeficiente de Variação) do PCS e MCS <a href="../img/instrucao-4.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
        <p class="text-justify">5. Clique no botão "ESTATÍSTICAS" para exibir as estatísticas descritivas do formulário preenchido <a href="../img/instrucao-5.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
        <p class="text-justify">6. Clique no botão "EXCLUIR" para remover qualquer item <a href="../img/instrucao-6.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
        <p class="text-justify">7. clique no botão "LIMPAR" para redefinir a calculadora <a href="../img/instrucao-7.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
        <p class="text-justify">8. Clique no botão "IMPORTAR", para efetuar upload de dados provenientes do Excel. <a href="../img/instrucao-8.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a>(<a href="../img/modelo-planilhaSF12.xlsx">Clique Aqui!</a> para download do modelo para preenchimento)</p>
        <p class="text-justify">9. Clique no botão "CALCULAR", para efetuar o calculo dos dados importados. <a href="../img/instrucao-9.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
        <p class="text-justify">10. Clique no botão "EXPORTAR", para exportação dos resultados dos escores PCS e MCS. <a href="../img/instrucao-10.png" target="_blank"> <img src="../img/imagem.png" class="img-fluid" alt="Imagem responsiva"> </a></p>
    </div>

@stop

