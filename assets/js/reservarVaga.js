const form = document.getElementById('form');
form.onsubmit = showDataConsole;

function showDataConsole(event) {
    event.preventDefault();

    const placaVeiculo = document.getElementById("placaVeiculo").value;
    const nomeProprietario = document.getElementById("nomeProprietario").value;
    const nApartamento = document.getElementById("nApartamento").value;
    const blocoApartamento = document.getElementById("blocoApartamento").value;
    const modeloVeiculo = document.getElementById("modeloVeiculo").value;
    const corVeiculo = document.getElementById("corVeiculo").value;
    const nVaga = document.getElementById("nVaga").value;

    const auxReserva = {
        placaVeiculo: placaVeiculo,
        nomeProprietario: nomeProprietario,
        nApartamento: nApartamento,
        blocoApartamento: blocoApartamento,
        modeloVeiculo: modeloVeiculo,
        corVeiculo: corVeiculo,
        numeroVaga: nVaga
    };

    console.log(auxReserva);
}
