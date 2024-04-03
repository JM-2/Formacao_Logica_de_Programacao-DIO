let heroi = ["Armador", "Guerreiro", "Defensor"]
let vitorias = [30, 10, 120]
let derrotas = [10, 50, 2]
let nivel

function calcularRankeadas(vitorias, derrotas) {
    let saldoVitorias = (vitorias - derrotas)
    return saldoVitorias
}

for (let index = 0; index < heroi.length; index++) {

    let saldoVitorias = calcularRankeadas(vitorias[index], derrotas[index])

    if (saldoVitorias < 10) {
        nivel = "Ferro"
    }else if(saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if(saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"
    } else if(saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if(saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if(saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário"
    } else if(saldoVitorias >= 101) {
        nivel = "Imortal"
    }

    console.log(`O Herói ${heroi[index]} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
    
}

