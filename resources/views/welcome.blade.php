<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React</title>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body>
        <div id="hello-react"></div>
        <div id="counter"></div>
    </body>
</html>
