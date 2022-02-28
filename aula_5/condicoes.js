// condicao ? primeira expressão : segunda expressão
// console.log( 0 < 10 ? 'Sim' : 'Não' )

const ehMaiorIdade = (idade) => {
    return idade > 17 ? 'Sim, é maior de idade.' : 'Não, é menor de idade.'
}

// console.log(ehMaiorIdade(10))
// console.log(ehMaiorIdade(18))

const fruta = 'Laranjas';

switch (fruta) {
    case 'Laranjas':
        console.log('30 Laranjas por R$ 10 merréis.');
        console.log('10 Tangerinas por R$ 10 merréis.');
        console.log('10 Laranja Cravo por R$ 10 merréis.');
        break;
    case 'Mangas':
        console.log('5 Mangas por R$ 5 merréis');
        break;
    case 'Mamão':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log(`Desculpe, não temos nenhuma oferta para essa fruta: ${fruta}`)
}
