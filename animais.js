class Animal {
  constructor(nome, tipo, brinquedos) {
    this.nome = nome;
    this.tipo = tipo;
    this.brinquedos=brinquedos;
    this.adotadoPor = null; 
  }
};

const listaAnimais = [
  new Animal('Rex', 'cão', ['RATO', 'BOLA']),
  new Animal('Mimi', 'gato', ['BOLA', 'LASER']),
  new Animal('Fofo', 'gato', ['BOLA', 'RATO', 'LASER']),
  new Animal('Zero', 'gato', ['RATO', 'BOLA']),
  new Animal('Bola', 'cão', ['CAIXA', 'NOVELO']),
  new Animal('Bebe', 'cão', ['LASER', 'RATO', 'BOLA']),
  new Animal('Loco', 'jabuti', ['SKATE', 'RATO'])
];

export { listaAnimais, Animal};
