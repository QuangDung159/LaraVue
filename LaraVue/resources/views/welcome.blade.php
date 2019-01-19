<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>Laravel</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
</head>
<body>
<div id="app">
    {{-- <example> : define at public/js/app.js --}}
    <example></example>
    <my-component></my-component>
    <conditional-redering></conditional-redering>
    <list-rendering></list-rendering>
    <user-dashboard></user-dashboard>
    <life-cycle></life-cycle>
</div>
<script src="/js/app.js"></script>
</body>
</html>