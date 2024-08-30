document.getElementById('cpf').addEventListener('input', function (e) {
    e.target.value = formatCPF(e.target.value);
});

document.getElementById('telefone').addEventListener('input', function (e) {
    e.target.value = formatTelefone(e.target.value);
});

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    return cpf;
}

function formatTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); 
    telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2'); 
    telefone = telefone.replace(/(\d{4})(\d)/, '$1-$2'); 
    return telefone;
}


function calcularRegraDeTres() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);

    if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {
        const resultado = (valor3 * valor2) / valor1;
        document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = 'Preencha todos os campos!';
    }
}


document.getElementById('abrirImagem').onclick = function() {
    document.getElementById('modal').style.display = "block";
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
}


document.getElementById('capturarTela').onclick = function() {
    html2canvas(document.body).then(canvas => {
        let link = document.createElement('a');
        link.download = 'captura.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}


window.onload = function() {
    document.querySelector('.modal-content').classList.add('zoom');
}