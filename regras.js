import { Pessoa } from "./pessoa.js";

function testeAdocao(pessoa, animal, brinquedosGatosUsados) {
    if (pessoa.animaisAdotados.length >= 3) {
        return false;
    }

    if (animal.nome === 'Loco') {
        if (pessoa.animaisAdotados.length === 0) {
            return false;
        }
        const possuiBrinquedo = animal.brinquedos.some(b => pessoa.brinquedos.includes(b));
        return possuiBrinquedo;
    }

    if (animal.tipo === 'gato') {
        const brinquedosAnimalDisponiveis = animal.brinquedos.filter(b => !brinquedosGatosUsados.has(b));
        if (brinquedosAnimalDisponiveis.length === 0) {
            return false;
        }
        
        let pessoaIndex = 0;
        let animalIndex = 0;
        
        while (pessoaIndex < pessoa.brinquedos.length && animalIndex < brinquedosAnimalDisponiveis.length) {
            if (pessoa.brinquedos[pessoaIndex] === brinquedosAnimalDisponiveis[animalIndex]) {
                animalIndex++;
            }
            pessoaIndex++;
        }
        
        return animalIndex === brinquedosAnimalDisponiveis.length;
    }
    
    let pessoaIndex = 0;
    let animalIndex = 0;
    
    while (pessoaIndex < pessoa.brinquedos.length && animalIndex < animal.brinquedos.length) {
        if (pessoa.brinquedos[pessoaIndex] === animal.brinquedos[animalIndex]) {
            animalIndex++;
        }
        pessoaIndex++;
    }
    
    return animalIndex === animal.brinquedos.length;
}

export { testeAdocao };