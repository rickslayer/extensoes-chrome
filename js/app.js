$(document).ready(function() {

    restore_options();


});

function restore_options() {
    chrome.storage.sync.get({
        corFonte: '#000000',
        corBack: '#FFFFFF',
        tamanhoFonte: '15px',
        removeImagem: true,
        ativaFonte: true,
        ativaBack: true,
        ativaTamanho: true,
        ativaBotaSobe: true,
        ativaCorFundo: false,
        corFonteSelecionada: '#FFFFFF',
        corFundoSelecionado: '#000000'
    }, function(items) {
        _corFonte = items.corFonte;
        _corBack = items.corBack;
        _tamanhoFonte = items.tamanhoFonte;
        _removeImagem = items.removeImagem;
        _ativaFonte = items.ativaFonte;
        _ativaBack = items.ativaBack;
        _ativaTamanho = items.ativaTamanho;
        _ativaBotaSobe = items.ativaBotaSobe;
        _ativaCorFundo = items.ativaCorFundo;
        _corFonteSelecionada = items.corFonteSelecionada;
        _corFundoSelecionado = items.corFundoSelecionado;

        if (_removeImagem) {
            var img = $(document).find('img');
            var frame = $(document).find('iframe');

            img.removeAttr('src');
            frame.removeAttr('src');
            $(window).on("scroll", function() {

                var img = $(document).find('img');
                var frame = $(document).find('iframe');
                img.removeAttr('src');

            });

        }

        ativaCorFundo(_ativaCorFundo, _corFonteSelecionada, _corFundoSelecionado);

        ativaBotaSobe(_ativaBotaSobe);

        ativaFonte(_ativaFonte, _corFonte);

        ativaBack(_corBack, _ativaBack);

        ativaTamanho(_tamanhoFonte, _ativaTamanho);


    });
}

function ativaFonte(ativaFonte, corFonte) {

    _ativaFonte = ativaFonte;
    _corFonte = corFonte;

    if (_ativaFonte) {
        var h1 = $(document).find('h1');
        var h2 = $(document).find('h2');
        var h3 = $(document).find('h3');
        var h4 = $(document).find('h4');
        var p = $(document).find('p');
        var a = $(document).find('a');
        var b = $(document).find('b');
        var span = $(document).find('span');
        var li = $(document).find('li');
        var ul = $(document).find('ul');
        var i = $(document).find('i');
        var strong = $(document).find('strong');
        var _Style = $(document).find('style').length;
        var select = $(document).find('select');
        var input = $(document).find('input');
        var btn = $(document).find('button');
        if (_Style == 0) {
            $('head').prepend('<style></style>');
            $('style').append('.cor{color: ' + _corFonte + '}');
        }
        if (_Style > 0) {
            $('style').append('.cor{color: ' + _corFonte + '}');
        }
        btn.addClass("cor");
        select.addClass("cor");
        input.addClass("cor");
        h1.addClass("cor");
        h2.addClass("cor");
        h3.addClass("cor");
        h4.addClass("cor");
        p.addClass("cor");
        span.addClass("cor");
        a.addClass("cor");
        b.addClass("cor");
        li.addClass("cor");
        ul.addClass("cor");
        i.addClass("cor");
        strong.addClass("cor");
        h1.css({ 'color': _corFonte });
        h2.css({ 'color': _corFonte });
        h3.css({ 'color': _corFonte });
        h4.css({ 'color': _corFonte });
        p.css({ 'color': _corFonte });
        span.css({ 'color': _corFonte });
        a.css({ 'color': _corFonte });
        b.css({ 'color': _corFonte });
        li.css({ 'color': _corFonte });
        ul.css({ 'color': _corFonte });
        i.css({ 'color': _corFonte });
        strong.css({ 'color': _corFonte });

        $(window).on("scroll", function() {
            var h1 = $(document).find('h1');
            var h2 = $(document).find('h2');
            var h3 = $(document).find('h3');
            var h4 = $(document).find('h4');
            var p = $(document).find('p');
            var a = $(document).find('a');
            var b = $(document).find('b');
            var span = $(document).find('span');
            var li = $(document).find('li');
            var ul = $(document).find('ul');
            var i = $(document).find('i');
            var strong = $(document).find('strong');
            var _Style = $(document).find('style').length;
            var select = $(document).find('select');
            var input = $(document).find('input');
            var btn = $(document).find('button');
            if (_Style == 0) {
                $('head').prepend('<style></style>');
                $('style').append('.cor{color: ' + _corFonte + '}');
            }
            if (_Style > 0) {
                $('style').append('.cor{color: ' + _corFonte + '}');
            }
            btn.addClass("cor");
            select.addClass("cor");
            input.addClass("cor");
            h1.addClass("cor");
            h2.addClass("cor");
            h3.addClass("cor");
            h4.addClass("cor");
            p.addClass("cor");
            span.addClass("cor");
            a.addClass("cor");
            b.addClass("cor");
            li.addClass("cor");
            ul.addClass("cor");
            i.addClass("cor");
            strong.addClass("cor");
            h1.css({ 'color': _corFonte });
            h2.css({ 'color': _corFonte });
            h3.css({ 'color': _corFonte });
            h4.css({ 'color': _corFonte });
            p.css({ 'color': _corFonte });
            span.css({ 'color': _corFonte });
            a.css({ 'color': _corFonte });
            b.css({ 'color': _corFonte });
            li.css({ 'color': _corFonte });
            ul.css({ 'color': _corFonte });
            i.css({ 'color': _corFonte });
            strong.css({ 'color': _corFonte });


        });
    }
}

function ativaBack(corBack, ativaBack) {

    _ativaBack = ativaBack;
    _corBack = corBack;

    if (_ativaBack) {
        var body = $(document).find('body');
        body.css('background-color', _corBack);
        $(window).on("scroll", function() {
            var body = $(document).find('body');
            body.css('background-color', _corBack);
        });

    }
}

function ativaTamanho(tamanhoFonte, ativaTamanho) {

    _ativaTamanho = ativaTamanho;
    _tamanhoFonte = tamanhoFonte;

    if (_ativaTamanho) {
        var p = $(document).find('p');
        var a = $(document).find('a');
        var b = $(document).find('b');
        var span = $(document).find('span');
        var li = $(document).find('li');
        var ul = $(document).find('ul');
        var i = $(document).find('i');
        var strong = $(document).find('strong');

        p.css({ 'font-size': _tamanhoFonte });
        span.css({ 'font-size': _tamanhoFonte });
        a.css({ 'font-size': _tamanhoFonte });
        b.css({ 'font-size': _tamanhoFonte });
        li.css({ 'font-size': _tamanhoFonte });
        ul.css({ 'font-size': _tamanhoFonte });
        i.css({ 'font-size': _tamanhoFonte });
        strong.css({ 'font-size': _tamanhoFonte });

        $(window).on("scroll", function() {
            var p = $(document).find('p');
            var a = $(document).find('a');
            var b = $(document).find('b');
            var span = $(document).find('span');
            var li = $(document).find('li');
            var ul = $(document).find('ul');
            var i = $(document).find('i');
            var strong = $(document).find('strong');

            p.css({ 'font-size': _tamanhoFonte });
            span.css({ 'font-size': _tamanhoFonte });
            a.css({ 'font-size': _tamanhoFonte });
            b.css({ 'font-size': _tamanhoFonte });
            li.css({ 'font-size': _tamanhoFonte });
            ul.css({ 'font-size': _tamanhoFonte });
            i.css({ 'font-size': _tamanhoFonte });
            strong.css({ 'font-size': _tamanhoFonte });

        });


    }
}

function ativaBotaSobe(ativaSobe) {
    _ativaBotao = ativaSobe;

    if (_ativaBotao) {
        $('body').append('<div id=\"dinamica\" class=\"fantasma\"><div class=\"pad\"><a accesskey="1" href="#_inicioPagina" class=\"botaoSobeDesce\" title="Ir para o inicio da página">[1] Inicio</a><div><div class=\"pad\"><a accesskey="2" href="#_finalPagina" class=\"botaoSobeDesce\" title="Ir para o fim da página">[2] Fim</a></div>');
        $('body').prepend($("#dinamica"));
        $('body').append('<div id=\"_finalPagina\"></div>');
        $('body').append('<div id=\"_inicioPagina\"></div>');
        $('body').prepend($("#_inicioPagina"));
    }
}


function ativaCorFundo(ativaCorFundo, fonteSelecionada, fundoSelecionado) {

    _ativaCorFundo = ativaCorFundo;
    _corFonteSelecionada = fonteSelecionada;
    _corFundoSelecionado = fundoSelecionado;

    if (_ativaCorFundo) {
        $('head').append('<style>::-moz-selection { color: ' + _corFonteSelecionada + '; background: ' + _corFundoSelecionado + ';}::selection { color: ' + _corFonteSelecionada + '; background: ' + _corFundoSelecionado + ';}</style>');
    }
}