<!--Extensão do menu-->

<nav class="navbar navbar-expand-lg sticky-top  navbar-dark bg-success navbar-laravel">
    <div class="container"> <img src="../img/logoSF12.png"  width="10%" class="d-inline-block align-top" alt=""/>
     <a class="navbar-brand"  href="/">
       
              
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

{{--Navegação com as rotas de direcionamento para as referidas páginas--}}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('paginas.inicio') }}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('paginas.instrucao') }}">Instruções</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('paginas.sobre') }}">Sobre</a>
                </li>
            </ul>

        </div>
    </div>
</nav>

<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
 <!-- JAVASCRIPTS-->
 <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
