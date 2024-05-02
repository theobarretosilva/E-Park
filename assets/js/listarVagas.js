const mockupReservas = [
    {
        placa: "ABC1234",
        nome: "João da Silva",
        apartamento: "101",
        bloco: "A",
        modelo: "Fiat Uno",
        cor: "Prata",
        vaga: "1",
        reservada: true
    },
    {
        placa: "XYZ5678",
        nome: "Maria Souza",
        apartamento: "202",
        bloco: "B",
        modelo: "Volkswagen Gol",
        cor: "Preto",
        vaga: "2",
        reservada: false
    },
    {
        placa: "DEF9876",
        nome: "Pedro Oliveira",
        apartamento: "303",
        bloco: "C",
        modelo: "Ford Ka",
        cor: "Azul",
        vaga: "3",
        reservada: true
    },
    {
        placa: "GHI5432",
        nome: "Ana Pereira",
        apartamento: "404",
        bloco: "D",
        modelo: "Chevrolet Onix",
        cor: "Vermelho",
        vaga: "4",
        reservada: false
    },
    {
        placa: "JKL6789",
        nome: "Carlos Santos",
        apartamento: "505",
        bloco: "E",
        modelo: "Toyota Corolla",
        cor: "Branco",
        vaga: "5",
        reservada: true
    },
    {
        placa: "MNO1357",
        nome: "Laura Lima",
        apartamento: "606",
        bloco: "F",
        modelo: "Honda Civic",
        cor: "Cinza",
        vaga: "6",
        reservada: false
    },
    {
        placa: "PQR2468",
        nome: "Lucas Almeida",
        apartamento: "707",
        bloco: "G",
        modelo: "Hyundai HB20",
        cor: "Azul",
        vaga: "7",
        reservada: true
    },
    {
        placa: "STU7890",
        nome: "Julia Costa",
        apartamento: "808",
        bloco: "H",
        modelo: "Renault Kwid",
        cor: "Laranja",
        vaga: "8",
        reservada: false
    }
];

function renderizarVagas() {
    const mainVagas = document.getElementById('mainVagas');

    // Limpa o conteúdo atual para evitar duplicatas
    mainVagas.innerHTML = '';

    // Itera sobre cada reserva no mockup e cria um card para cada uma
    mockupReservas.forEach(reserva => {
        const cardVaga = document.createElement('div');
        cardVaga.classList.add('cardVaga');
        
        const estadoVaga = reserva.reservada ? 'VAGA RESERVADA' : 'VAGA DISPONÍVEL';
        const corEstado = reserva.reservada ? 'red' : 'green';
        cardVaga.innerHTML = `
            <div id="cardVaga" class="cardVaga">
                <p id="defVaga" style="color: ${corEstado};">${estadoVaga}</p>
                <p id="nVaga">${reserva.vaga}</p>
                <p id="placaVeiculo" class="textCard"><b>Placa:</b> ${reserva.placa}</p>
                <p id="modeloVeiculo" class="textCard"><b>Modelo:</b> ${reserva.modelo}</p>
                <p id="corVeiculo" class="textCard"><b>Cor:</b> ${reserva.cor}</p>
                <div class="linha">‎</div>
                <p id="donoVeiculo" class="textCard"><b>Proprietário:</b> ${reserva.nome}</p>
                <p id="nApto" class="textCard"><b>N° apto:</b> ${reserva.apartamento}</p>
                <p id="blocoApto" class="textCard"><b>Bloco:</b> ${reserva.bloco}</p>
            </div>
        `;

        mainVagas.appendChild(cardVaga);
    });
}

// document.addEventListener('DOMContentLoaded', function () {
//     const btnReservadas = document.getElementById('btnReservadas');
//     const btnDisponiveis = document.getElementById('btnDisponiveis');

//     btnReservadas.addEventListener('click', function () {
//         mostrarVagas('reservada');
//     });

//     btnDisponiveis.addEventListener('click', function () {
//         mostrarVagas('disponivel');
//     });

//     function mostrarVagas(classe) {
//         const todasAsVagas = document.querySelectorAll('.cardVaga');
//         todasAsVagas.forEach(vaga => {
//             if (vaga.classList.contains(classe)) {
//                 vaga.style.display = 'block';
//             } else {
//                 vaga.style.display = 'none';
//             }
//         });
//     }
// });

window.onload = renderizarVagas;