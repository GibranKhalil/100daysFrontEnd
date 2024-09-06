function generatePassword() {
    const resulInput = document.getElementById('generatedPWD');
    const rangeInput = document.getElementById('charLength');

    const upperCaseToogle = document.getElementById('upperCase').checked;
    const lowerCaseToogle = document.getElementById('lowerCase').checked;
    const numberToogle = document.getElementById('numbers').checked;
    const signsToogle = document.getElementById('signs').checked;

    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const sinais = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let caracteresDisponiveis = '';
    if (upperCaseToogle) caracteresDisponiveis += letrasMaiusculas;
    if (lowerCaseToogle) caracteresDisponiveis += letrasMinusculas;
    if (numberToogle) caracteresDisponiveis += numeros;
    if (signsToogle) caracteresDisponiveis += sinais;

    if (caracteresDisponiveis === '') {
        error();
        throw new Error();
    }

    let stringAleatoria = '';
    for (let i = 0; i < rangeInput.value; i++) {
        const indiceAleatorio = Math.floor(
            Math.random() * caracteresDisponiveis.length
        );
        stringAleatoria += caracteresDisponiveis[indiceAleatorio];
    }

    resulInput.value = stringAleatoria;
}

function error() {
    const modal = document.getElementById('modal');

    modal.setAttribute('open', 'true');
    modal.classList.add('errorModal');

    setTimeout(() => {
        modal.classList.remove('errorModal');
        modal.classList.add('exit');
    }, 1500);

    setTimeout(() => {
        modal.removeAttribute('open');
        modal.classList.remove('exit');
    }, 2000);
}

function copyPassword() {
    const resulInput = document.getElementById('generatedPWD').value;
    navigator.clipboard.writeText(resulInput);
}
