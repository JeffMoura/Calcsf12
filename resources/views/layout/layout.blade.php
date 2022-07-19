<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="{{ URL::asset('img/faviconSF12.png') }}" type="image/x-icon"/>
    <title>CalcSF-12</title>
    <!-- Bootstrap-->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css')}}">
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">



</head>
<body>
    <!-- NAVEGAÇÃO MENU-->
    @include('layout.menu')
    <h1></h1>
   <!-- CONTAINER -->
    <main class="login-form">

        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">@yield('cabecalho')</div>
                    <div class="card-body">
                        @yield('conteudo')
                    </div>
                    </div>
                </div>
            </div>

    </div>
    </main>
</body>

    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- JAVASCRIPTS-->
    <script src="{{asset('js/jquery.min.js')}}"></script>
    <script src="{{asset('js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('js/bootstrap.bundle.js')}}"></script>
    <script src="{{asset('js/bootstrap.min.js')}}"></script>

 
</html>


