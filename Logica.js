function criptografarTexto(texto) {
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const textoCriptografado = texto.split('').map((letra) => {
        return substituicoes[letra] || letra;
    }).join('');

    return textoCriptografado;
}

function descriptografarTexto(textoCriptografado) {
    const substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const padrao = new RegExp(Object.keys(substituicoes).join('|'), 'g');
    const textoDescriptografado = textoCriptografado.replace(padrao, (match) => substituicoes[match]);

    return textoDescriptografado;
}

document.addEventListener('DOMContentLoaded', function () {
    const criptografarBtn = document.getElementById('criptografarBtn');
    const descriptografarBtn = document.getElementById('descriptografarBtn');
    const inputTexto = document.querySelector('.texto');
    const resultados = document.querySelector('.resultados');

    criptografarBtn.addEventListener('click', function () {
        const texto = inputTexto.value;
        const textoCriptografado = criptografarTexto(texto);
        resultados.textContent = textoCriptografado;
    });

    descriptografarBtn.addEventListener('click', function () {
        const textoCriptografado = resultados.textContent;
        const textoDescriptografado = descriptografarTexto(textoCriptografado);
        resultados.textContent = textoDescriptografado;
    });
});