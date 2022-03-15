// Esconder o cartão atual e mostrar o selecionado.

//criar duas variáveis para a troca de tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCartao = document.querySelectorAll('.cartao-pokemon')

const avancar = document.getElementById('proximo')
const voltar = document.getElementById('anterior')

let numeroEvolucao = 0

//adicionar evento de clique feito pelo usuário
listaSelecaoPokemons.forEach(pokemon => {
    //quando o click acontecer, executa a arrowFunction da frente
    pokemon.addEventListener('click', () => {

        
        //clicar no pokemon da lista, pegar o id e guardar numa variável
        const idPokemonSelecionado = pokemon.attributes.id.value
        //remove a classe atual (se ela existir) para que sempre inicie no primeiro pokemon e inicia o cartão apenas com a seta de avançar
        if (document.querySelector('.atual')) {
            document.querySelector('.atual').classList.remove('atual')
            avancar.classList.remove('some')
            voltar.classList.add('some')
            numeroEvolucao = 0
        }
        

        //remover a classe aberto dos cartões
        const cartaoPokemonAberto = document.querySelectorAll('.aberto')
        cartaoPokemonAberto.forEach(function fecharCadaCartao () {
            for (let i = 0; i < cartaoPokemonAberto.length; i++) {
                cartaoPokemonAberto[i].classList.remove('aberto')
            }
        })

        //colocar a classe aberto no cartão correspondente
        // const idCartaoSelecionado = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.querySelectorAll('.' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.forEach(function abrirCartao(){
            for(let i = 0; i < cartaoPokemonParaAbrir.length; i++) {
                cartaoPokemonParaAbrir[i].classList.add('aberto')
            }
        })
        

        //remover a classe ativo no item da lista selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
}) 


avancar.addEventListener('click', () => {
     
    numeroEvolucao++
    //saber qual pokemon está ativo
    let PokemonAtivo = document.querySelector('.ativo')
    let idPokemonAtivo = PokemonAtivo.attributes.id.value
    let pokemonEvolucao = document.getElementById('cartao-' + idPokemonAtivo + numeroEvolucao)
    
    pokemonEvolucao.classList.add('atual')  

    if (numeroEvolucao == 1) {
        voltar.classList.remove('some')
    } else if (numeroEvolucao == 2){
        avancar.classList.add('some')
    }
})

voltar.addEventListener('click', () => {
    
    //remove a classe atual
    let PokemonAtivo = document.querySelector('.ativo')
    let idPokemonAtivo = PokemonAtivo.attributes.id.value
    let pokemonEvolucao = document.getElementById('cartao-' + idPokemonAtivo + numeroEvolucao)
    
    pokemonEvolucao.classList.remove('atual')
    numeroEvolucao = numeroEvolucao - 1
    
    if (numeroEvolucao == 1) {
        voltar.classList.remove('some')
        avancar.classList.remove('some')
    } else if (numeroEvolucao == 2) {
        avancar.classList.add('some')
        } else if (numeroEvolucao == 0) {
            voltar.classList.add('some')
        }
})
