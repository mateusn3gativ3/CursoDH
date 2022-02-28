// exercicio 2:
let dia = "sabado";
function fimDeSemana(dia){
	//criação do switch
	switch (dia){
		case 'segunda':
		console.log( " você tem aulas!")
		break;
		case 'quarta':
		console.log( " você tem aulas!")
		break;
		case 'sexta-feira':
		console.log( " você tem aulas!")
		break;
	default:
		console.log("você não tem aulas")
	}
}

fimDeSemana(dia)
// exercicio 3:
let dia = 'segunda-feira'

function fimDeSemana(dia) {
    switch(dia){
    case'sexta-feira':
        console.log('Bom fim de semana!')
        break;
    case 'segunda-feira':
        console.log('Boa semana!');
        break;
    default:
        console.log('Bom dia!')
    }
}