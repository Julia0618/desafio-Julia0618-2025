import { listaAnimais, Animal } from './animais.js';
import { Pessoa } from './pessoa.js';
import { testeAdocao } from './regras.js';

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1Str, brinquedosPessoa2Str, ordemAnimaisStr) {

    const brinquedosPessoa1 = brinquedosPessoa1Str.split(',');
    const brinquedosPessoa2 = brinquedosPessoa2Str.split(',');
    const ordemAnimais = ordemAnimaisStr.split(',');

    if (new Set(ordemAnimais).size !== ordemAnimais.length) {
      return { erro: "Animal inválido", lista: null };
    }
    if (new Set(brinquedosPessoa1).size !== brinquedosPessoa1.length ||
        new Set(brinquedosPessoa2).size !== brinquedosPessoa2.length) {
      return { erro: "Brinquedo inválido", lista: null };
    }

    const pessoa1 = new Pessoa(1, brinquedosPessoa1);
    const pessoa2 = new Pessoa(2, brinquedosPessoa2);

    const resultados = [];
    const brinquedosGatosUsados = new Set();

    const animaisNomesValidos = listaAnimais.map(a => a.nome);

    for (const nome of ordemAnimais) {
      if (!animaisNomesValidos.includes(nome)) {
        return { erro: "Animal inválido", lista: null };
      }

      const animal = listaAnimais.find(a => a.nome === nome);
      
      const pessoa1PodeAdotar = testeAdocao(pessoa1, animal, brinquedosGatosUsados);
      const pessoa2PodeAdotar = testeAdocao(pessoa2, animal, brinquedosGatosUsados);

      if (pessoa1PodeAdotar && pessoa2PodeAdotar) {
        resultados.push(`${animal.nome} - abrigo`);
      } else if (pessoa1PodeAdotar) {
        resultados.push(`${animal.nome} - pessoa 1`);
        pessoa1.animaisAdotados.push(animal.nome);
        if (animal.tipo === 'gato') {
          animal.brinquedos.forEach(b => brinquedosGatosUsados.add(b));
        }
      } else if (pessoa2PodeAdotar) {
        resultados.push(`${animal.nome} - pessoa 2`);
        pessoa2.animaisAdotados.push(animal.nome);
        if (animal.tipo === 'gato') {
          animal.brinquedos.forEach(b => brinquedosGatosUsados.add(b));
        }
      } else {
        resultados.push(`${animal.nome} - abrigo`);
      }
    }
    
    resultados.sort();
    
    return { erro: null, lista: resultados };
  }
}

export { AbrigoAnimais as AbrigoAnimais };