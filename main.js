function calcularNivel() {
    const name = document.getElementById('name').value;
    const xp = document.getElementById('xp').value;

    let rank = calcularRank(xp);

    document.getElementById('result').innerHTML = `O herói de nome ${name} está no nível ${rank}`;
}

function calcularRank(xp) {
    if (xp < 1000) {
        return 'Ferro';
    }

    if (xp < 2000) {
        return 'Bronze';
    }

    if (xp < 5000) {
        return 'Prata/Ouro';
    }

    if (xp < 8000) {
        return 'Platina/Diamante';
    }

    if(xp < 9000){
        return 'Ascendente';
    }

    if(xp < 10000){
        return 'Imortal';
    }

    return 'Radiante';
}