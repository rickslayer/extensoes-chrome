$(document).ready(function() {

    $("h1").text(chrome.i18n.getMessage("appName"));
    $("#tamanhoDosTextos").text(chrome.i18n.getMessage("fontSize"));
    $("#corDaFonte , #lbl-cor-fonte-selecionada").text(chrome.i18n.getMessage("fontColor"));
    $("#cores-fonte, #cores-back, #cor-fonte-selecionada, #cor-fundo-selecionado").attr("title", chrome.i18n.getMessage("fontColorTitle"));
    $("#corDoBack , #lbl-cor-fundo-selecionado").text(chrome.i18n.getMessage("backgroundColor"));
    $(document).find("span").text(chrome.i18n.getMessage("ativarCampo"));
    $("#ligth").text(chrome.i18n.getMessage("high"));
    $("#remove-imagem").text(chrome.i18n.getMessage("removeimg"));
    $("#btn-iniciofim").text(chrome.i18n.getMessage("iniciofim"));
    $("#save").text(chrome.i18n.getMessage("salva"));
    $("#reset").text(chrome.i18n.getMessage("reset"));
    $("#remove-imagem-trocar").text(chrome.i18n.getMessage("trocaimagem"));
    restore_options();

    $("#ativar-fonte").on("change", function() {
        var _ativaFonte = $("#ativar-fonte:checked").length;
        if (_ativaFonte == 1) {
            $("#cores-fonte").attr("disabled", false);
            $("#cores-fonte").val("#000000");
            $("#corDaFonte").removeClass("cinza");
        } else {
            $("#cores-fonte").attr("disabled", true);
            $("#cores-fonte").val("#DDDDDD");
            $("#corDaFonte").addClass("cinza");
        }
    });
    $("#ativar-back").on("change", function() {
        var _ativaBack = $("#ativar-back:checked").length;
        if (_ativaBack == 1) {
            $("#cores-back").attr("disabled", false);
            $("#cores-back").val("#FFFFFF");
            $("#corDoBack").removeClass("cinza");
        } else {
            $("#cores-back").attr("disabled", true);
            $("#cores-back").val("#DDDDDD");
            $("#corDoBack").addClass("cinza");
        }

    });
    $("#ativar-tamanho").on("change", function() {
        var _ativaTamanho = $("#ativar-tamanho:checked").length;
        if (_ativaTamanho == 1) {
            $("#tamanhoFonte").attr("disabled", false);
            $("#tamanhoDosTextos").removeClass("cinza");
        } else {
            $("#tamanhoFonte").attr("disabled", true);
            $("#tamanhoDosTextos").addClass("cinza");
        }

    });
    $("#ativar-cor-fundo").on("change", function() {
        var _ativaCorFundo = $("#ativar-cor-fundo:checked").length;
        if (_ativaCorFundo == 1) {
            $("#cor-fonte-selecionada").attr("disabled", false);
            $("#cor-fundo-selecionado").attr("disabled", false);
            $("#cor-fonte-selecionada").val("#FFFFFF");
            $("#cor-fundo-selecionado").val("#000000");
            $("#lbl-cor-fonte-selecionada").removeClass("cinza");
            $("#lbl-cor-fundo-selecionado").removeClass("cinza");
        } else {
            $("#cor-fonte-selecionada").val("#DDDDDD");
            $("#cor-fundo-selecionado").val("#DDDDDD");
            $("#cor-fonte-selecionada").attr("disabled", true);
            $("#lbl-cor-fonte-selecionada").addClass("cinza");
            $("#cor-fundo-selecionado").attr("disabled", true);
            $("#lbl-cor-fundo-selecionado").addClass("cinza");
        }

    });





});

function save_options() {

    var colore = document.getElementById('cores-fonte').value;
    var corback = document.getElementById('cores-back').value;
    var tamanhofonte = document.getElementById('tamanhoFonte').value;
    var removeimagem = document.getElementById('remove-img').checked;
    var ativafonte = document.getElementById('ativar-fonte').checked;
    var ativaback = document.getElementById('ativar-back').checked;
    var ativatamanho = document.getElementById('ativar-tamanho').checked;
    var ativabotaosobe = document.getElementById('add-bota-inicio-fim').checked;
    var corfonteselecionada = $("#cor-fonte-selecionada").val();
    var corfundoselecionado = $("#cor-fundo-selecionado").val();
    var ativacorfundo = $("#ativar-cor-fundo").is(':checked');
    var trocaImagem = document.getElementById("trocaImagem").value;
    chrome.storage.sync.set({
        corFonte: colore,
        corBack: corback,
        tamanhoFonte: tamanhofonte,
        removeImagem: removeimagem,
        ativaFonte: ativafonte,
        ativaBack: ativaback,
        ativaTamanho: ativatamanho,
        ativaBotaSobe: ativabotaosobe,
        ativaCorFundo: ativacorfundo,
        corFonteSelecionada: corfonteselecionada,
        corFundoSelecionado: corfundoselecionado,
        trocaImagem: trocaImagem

    }, function() {

        var status = document.getElementById('status');
        status.textContent = 'Salvo com sucesso.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {

    chrome.storage.sync.get({
        corFonte: '#000000',
        corBack: '#FFFFFF',
        tamanhoFonte: '15px',
        removeImagem: false,
        ativaFonte: false,
        ativaBack: false,
        ativaTamanho: false,
        ativaBotaSobe: false,
        ativaCorFundo: false,
        corFonteSelecionada: '#DDDDDD',
        corFundoSelecionado: '#DDDDDD',
        trocaImagem: ''

    }, function(items) {

        document.getElementById('cores-fonte').value = items.corFonte;
        document.getElementById('cores-back').value = items.corBack;
        document.getElementById('tamanhoFonte').value = items.tamanhoFonte;
        document.getElementById('remove-img').checked = items.removeImagem;
        document.getElementById('ativar-fonte').checked = items.ativaFonte;
        document.getElementById('ativar-back').checked = items.ativaBack;
        document.getElementById('ativar-tamanho').checked = items.ativaTamanho;
        document.getElementById('add-bota-inicio-fim').checked = items.ativaBotaSobe;
        document.getElementById('cor-fonte-selecionada').value = items.corFonteSelecionada;
        document.getElementById('cor-fundo-selecionado').value = items.corFundoSelecionado;
        document.getElementById('ativar-cor-fundo').checked = items.ativaCorFundo;
        document.getElementById('trocaImagem').value = items.trocaImagem;

        if (!items.ativaFonte) {
            $("#cores-fonte").attr("disabled", true);
            $("#cores-fonte").val("#DDDDDD");
            $("#corDaFonte").addClass("cinza");
        }

        if (!items.ativaBack) {
            $("#cores-back").attr("disabled", true);
            $("#cores-back").val("#DDDDDD");
            $("#corDoBack").addClass("cinza");
        }

        if (!items.ativaTamanho) {
            $("#tamanhoFonte").attr("disabled", true);
            $("#tamanhoDosTextos").addClass("cinza");
        }

        if (!items.ativaCorFundo) {
            $("#cor-fonte-selecionada").attr("disabled", true);
            $("#lbl-cor-fonte-selecionada").addClass("cinza");
            $("#cor-fundo-selecionado").attr("disabled", true);
            $("#lbl-cor-fundo-selecionado").addClass("cinza");
        }

    });
}

setTimeout(function() {
    var btnSalvar = document.getElementById('save');
    document.addEventListener('DOMContentLoaded', restore_options);

    if (btnSalvar) {
        btnSalvar.addEventListener('click', save_options);
    }
}, 500);

function reset_options() {

    document.getElementById('cores-fonte').value = "#000000";
    document.getElementById('cores-back').value = "#FFFFFF";
    document.getElementById('tamanhoFonte').value = "20px";
    document.getElementById('remove-img').checked = false;
    document.getElementById('ativar-fonte').checked = false;
    document.getElementById('ativar-back').checked = false;
    document.getElementById('ativar-tamanho').checked = false;
    document.getElementById('add-bota-inicio-fim').checked = false;
    document.getElementById('cor-fonte-selecionada').value = "#FFFFFF";
    document.getElementById('cor-fundo-selecionado').value = "#000000";
    document.getElementById('trocaImagem').value = "";
    $("#ativar-cor-fundo").prop('checked', false);
    $("#cores-back").attr("disabled", false);
    $("#corDoBack").removeClass("cinza");
    $("#cores-fonte").attr("disabled", false);
    $("#corDaFonte").removeClass("cinza");
    $("#tamanhoFonte").attr("disabled", false);
    $("#tamanhoDosTextos").removeClass("cinza");
    $("#lbl-cor-fonte-selecionada").addClass("cinza");
    $("#lbl-cor-fundo-selecionado").addClass("cinza");

}
setTimeout(function() {

    var btnResetar = document.getElementById('reset');

    if (btnResetar) {
        document.addEventListener('DOMContentLoaded', reset_options);
        btnResetar.addEventListener('click', reset_options);
    }
}, 500);