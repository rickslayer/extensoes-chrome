$(document).ready(function () {

     restore_options();
$('head').append('<style>::-moz-selection { color: yellow; background: red;}::selection { color: yellow; background: red;}</style>');

          });
function restore_options() {
         chrome.storage.sync.get({
                corFonte: '#000000',
                corBack: '#FFFFFF',
                tamanhoFonte: '15px',
                removeImagem: true,
                ativaFonte: true,
                ativaBack : true,
                ativaTamanho : true,
                ativaBotaSobe : true
  }, function(items) {
                _corFonte     = items.corFonte;
                _corBack      = items.corBack;
                _tamanhoFonte = items.tamanhoFonte;
                _removeImagem = items.removeImagem;
                _ativaFonte   = items.ativaFonte;
                _ativaBack    = items.ativaBack;
                _ativaTamanho = items.ativaTamanho;
                _ativaBotaSobe = items.ativaBotaSobe;

  if (_removeImagem){
            var img =  $(document).find('img');
            var frame = $(document).find('iframe');
            img.removeAttr('src');
            frame.removeAttr('src');
         }

              ativaBotaSobe(_ativaBotaSobe);

               ativaFonte(_ativaFonte, _corFonte);

               ativaBack(_corBack, _ativaBack);

               ativaTamanho(_tamanhoFonte, _ativaTamanho);
});
}
function ativaFonte(ativaFonte, corFonte){

               _ativaFonte = ativaFonte;
               _corFonte   = corFonte;

         if (_ativaFonte){
              var h1     = $(document).find('h1');
              var h2     = $(document).find('h2');
              var h3     = $(document).find('h3');
              var h4     = $(document).find('h4');
              var p      = $(document).find('p');
              var a      = $(document).find('a');
              var b      = $(document).find('b');
              var span   = $(document).find('span');
              var li     = $(document).find('li');
              var ul     = $(document).find('ul');
              var i      = $(document).find('i');
              var strong =  $(document).find('strong');

              h1.css({'color':_corFonte});
              h2.css({'color':_corFonte});
              h3.css({'color':_corFonte});
              h4.css({'color':_corFonte});
              p.css({'color':_corFonte});
              span.css({'color':_corFonte});
              a.css({'color':_corFonte});
              b.css({'color':_corFonte});
              li.css({'color':_corFonte});
              ul.css({'color':_corFonte});
              i.css({'color':_corFonte});
              strong.css({'color':_corFonte});
         }
}

function ativaBack(corBack, ativaBack){

          _ativaBack = ativaBack;
          _corBack   = corBack;

              if(_ativaBack){
                    var body  = $(document).find('body');
                    body.css('background-color', _corBack);
           }
}

function ativaTamanho(tamanhoFonte, ativaTamanho){

          _ativaTamanho = ativaTamanho;
          _tamanhoFonte = tamanhoFonte;

              if(_ativaTamanho){
                    var p      = $(document).find('p');
                    var a      = $(document).find('a');
                    var b      = $(document).find('b');
                    var span   = $(document).find('span');
                    var li     = $(document).find('li');
                    var ul     = $(document).find('ul');
                    var i      = $(document).find('i');
                    var strong =  $(document).find('strong');

                    p.css({'font-size':_tamanhoFonte});
                    span.css({'font-size':_tamanhoFonte});
                    a.css({'font-size':_tamanhoFonte});
                    b.css({'font-size':_tamanhoFonte});
                    li.css({'font-size':_tamanhoFonte});
                    ul.css({'font-size':_tamanhoFonte});
                    i.css({'font-size':_tamanhoFonte});
                    strong.css({'font-size':_tamanhoFonte});
              }
}
function ativaBotaSobe(ativaSobe){
        _ativaBotao = ativaSobe;

        if(_ativaBotao){
               $('body').append('<div id=\"dinamica\" class=\"fantasma\"><div class=\"pad\"><a href="#_inicioPagina">Inicio</a><div><div class=\"pad\"><a href="#_finalPagina">Fim</a></div>');
               $('body').prepend($("#dinamica"));
               $('body').append('<div id=\"_finalPagina\"></div>');
               $('body').append('<div id=\"_inicioPagina\"></div>');
               $('body').prepend($("#_inicioPagina"));
        }
}

