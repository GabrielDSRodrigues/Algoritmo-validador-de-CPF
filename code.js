let CPF = {
  numero: null,
  cpf_r: function(cpf) {
    this.numero = cpf.replace(/[^\d]+/g, '');
  },
  digitos: [],
  calc: function() {
    let valoresDaSoma = [];
    for (let i = 10, p = 0; i > 1 && p < 9; i--, p++) {
      valoresDaSoma.push(this.numero[p] * i);
    }

    let valorTotal = 0;
    for (let i = 0; i < valoresDaSoma.length; i++) {
      valorTotal += parseInt(valoresDaSoma[i]);
    }

    let digito = parseInt((valorTotal / 11) % 11);
    if (digito < 2) {
      digito = 0;
    } else if (digito >= 2) {
      digito = 11 - (valorTotal % 11);
    }

    this.digitos.push(digito);

    valoresDaSoma = [];
    for (let i = 11, p = 0; i > 1 && p < 10; i--, p++) {
      valoresDaSoma.push(this.numero[p] * i);
    }

    valorTotal = 0;

    for (let i = 0; i < valoresDaSoma.length; i++) {
      valorTotal += valoresDaSoma[i];
    }

    digito = parseInt((valorTotal / 11) % 11);
    if (digito < 2) {
      digito = 0;
    } else if (digito >= 2) {
      digito = 11 - (valorTotal % 11);
    }

    this.digitos.push(digito);
    if (this.digitos[1] == this.numero[this.numero.length - 1] && this.digitos[0] == this.numero[this.numero.length - 2]) {
      console.log("Correto");
      return true;
    } else {
      console.log("Errado");
      return false;
    }
  },
  verf: function(cpf) {
    this.cpf_r(cpf);
    this.calc();
  }
}

CPF.verf("111.444.777-35");