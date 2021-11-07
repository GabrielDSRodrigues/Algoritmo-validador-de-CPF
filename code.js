function CPF(numero) {
  let cpf = numero.replace(/[^\d]+/g, '');
  let digitos = [];

  let valorTotal = 0;
  for (let i = 10, p = 0; i > 1 && p < 9; i--, p++) {
    valorTotal += cpf[p] * i;
  }

  let digito = parseInt((valorTotal / 11) % 11);
  if (digito < 2) {
    digito = 0;
  } else if (digito >= 2) {
    digito = 11 - (valorTotal % 11);
  }

  digitos.push(digito);

  valorTotal = 0;
  for (let i = 11, p = 0; i > 1 && p < 10; i--, p++) {
    valorTotal += cpf[p] * i;
  }

  digito = parseInt((valorTotal / 11) % 11);
  if (digito < 2) {
    digito = 0;
  } else if (digito >= 2) {
    digito = 11 - (valorTotal % 11);
  }

  digitos.push(digito);

  if (digitos[1] == cpf[cpf.length - 1] && digitos[0] == cpf[cpf.length - 2]) {
    console.log(`VALIDADOR DE CPF: ${numero} | Válido.`);
    return true;
  } else {
    console.log(`VALIDADOR DE CPF: ${numero} | Inválido.`);
    return false;
  }
}

export default CPF;