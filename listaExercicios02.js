const prompt = require('prompt-sync')()

/* 1) Crie a função ehDataValida(dia,mes, ano) que retorne true 
se os valores formarem uma data real (meses de 28-31 dias, ano bissexto para fevereiro e false caso contrário) */

function ehDataValida(dia, mes, ano){

    let anoBissexto

    let datas = [31, 28, 31, 30, 31, 30, 31 , 31, 30, 31, 30, 31]  //Datas de cada mês sem ser bissexto, JAN-DEZ

    if(typeof dia !== "number" || typeof mes !== "number" || typeof ano !== "number"){
        return false
    }

    if(ano < 0 || dia < 1 || dia > 31 || mes < 1 || mes > 12){
        return false
    }

    anoBissexto = ehBissexto(ano)

    if(anoBissexto){
        datas[1] = 29  // Modifica fevereiro para bissexto
    }

    return dia <= datas[mes-1]

}

function ehBissexto(ano){

    if( ano % 100 === 0 && ano % 400 === 0){
        return true
    }else if(ano % 4 === 0 && ano % 100 !== 0){
        return true
    }else{
        return false
    }
}

/* 2) Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário para adivinhar. Use while
para repetir até acertar, contando tentativas e exibindo "mais alto" ou "mais baixo" a cada palpite errado */

function adivinheNumero(){

    let contador = 0
    let numero = Math.floor(Math.random() * 100) + 1

    let valor = Number(prompt("Adivinhe um número de 1 até 100: "))

    while(numero != valor){

        if(numero < valor){
            console.log("Mais baixo!")
        }else{
            console.log("Mais alto!")
        }

        valor = Number(prompt("Tente outro número de 1 até 100: "))

        contador++
    }

    contador++
    console.log(`Você acertou! E o número é ${numero}. Número de tentativas: ${contador}`)

}

/* 3) Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.*/

function palavrasUnicas(frase){

    let palavrasUnicas = []

    frase = frase.split(" ")
    console.log("Array original:")
    console.log(frase)

    for(palavra of frase){
        if(!palavrasUnicas.includes(palavra)){
            palavrasUnicas.push(palavra)
        }
    }
    console.log("Array com palavras únicas:")
    console.log(palavrasUnicas)

}

/* 4) Fatorial Recursivo - Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1. */

function fatorial(n){

    if(n < 0){
        throw new Error("Digite um valor válido.")
    }
    if(n === 0 || n === 1){
        return 1
    }
    return n * fatorial(n-1)

}

/* 5) Debounce - Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo. */

function debounce(fn, delay){
    let timer = null

    return function (...args){
        clearTimeout(timer)
        
        timer = setTimeout (() => {
            fn.apply(this, args)
        }, delay)
    }
}

function pesquisar(texto){
    console.log("Buscando por:", texto)
}

let pesquisaDebounced = debounce(pesquisar, 500)

/* 6) Memoization - Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. */

function memoize(fn){
    const cache = new Map()

    return function(...args){
        const chave = JSON.stringify(args)

        if(cache.has(chave)){
            return cache.get(chave)
        }

        let result = fn.apply(this, args)

        cache.set(chave, result)

        return result
    }
}

const somaOtimizada = memoize(function somaElementos(n){

    if(n === 1){
        return 1
    }

    return n + somaOtimizada(n-1)
})

/* 7) Mapeamento e Ordenação - Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.*/

function ordenaPorPreco(arr){

    arrOrdenado = arr.sort((a,b) => a.preco - b.preco)

    arrNomes = arrOrdenado.map(produto => produto.nome)

    console.log(arrNomes)
}

/* 8) 8. Agrupamento por Propriedade - Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */

function gerarTotais(arr){

    totalClientes = arr.reduce((acumulador, valor) => {

        nome = valor.cliente
        total = valor.total

        if(acumulador[nome]){
            acumulador[nome] += total
        }
        else{
            acumulador[nome] = total
        }

        return acumulador
    }, {})

    console.log(totalClientes)
}


/* 9)Conversão Entre Formatos - Escreva duas funções:
 - ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
    valor], ... ] e retorna o objeto equivalente.
 - ○ objetoParaPares(obj) faz o inverso, retornando um array de
    pares.
*/

function paresParaObjeto(pares){
    let objeto = {}

    for(item of pares){
        objeto[item[0]] = item[1]
    }

    console.log(objeto)
}

function objetoParaPares(obj){

    let array = []

    for(item in obj){
        array.push([item, obj[item]])
    }

    console.log(array)
}


function menu(){
    let opcao = Number(prompt("Digite o exercício que deseja executar de 1 até 9: "))

    switch(opcao){

        case 1:
            if(ehDataValida(29,3,2024)){
                console.log("Data válida!")
            }
            else{
                console.log("Data inválida!")
            }
            break
        
        case 2:
            adivinheNumero()
            break

        case 3:
            palavrasUnicas("olá olá mundo mundo")
            break

        case 4:
            console.log("Fatorial:")
            console.log(fatorial(5))
            break

        case 5:
            console.log("Debounce")
            pesquisaDebounced("b")
            pesquisaDebounced("br")
            pesquisaDebounced("Bruno")

            setTimeout(()=> {
            pesquisaDebounced("A")
            pesquisaDebounced("Ana")
            }, 500)
            break

        case 6:
            console.log("Memoization")
            console.time("Primeira chamada")
            console.log(somaOtimizada(4000))
            console.timeEnd("Primeira chamada")

            console.time("Segunda chamada")
            console.log(somaOtimizada(4000))
            console.timeEnd("Segunda chamada")
            break

        case 7:
            let arr = [
                {nome: "Livro", preco: 59.60},
                {nome: "TV", preco: 3499.99},
                {nome: "Kindle", preco: 584},
                {nome: "Pilha", preco: 15.00}
            ]
            ordenaPorPreco(arr)
            break
        
        case 8:
            let arrClientes = [
            { cliente: "Bruno", total: 50 },
            { cliente: "Jaques", total: 75 },
            { cliente: "Bruno", total: 80 },
            { cliente: "Hyago", total: 30 },
            { cliente: "Jaques", total: 20 },]
            gerarTotais(arrClientes)
            break

        case 9:
            let arrSerie = [ 
                ["Série", "Game of Thrones"],
                ["Ano", 2011],
                ["Autor", "George R. R. Martin"],
                ["Emissora", "HBO"]
            ]
            console.log("\nPares para objeto:")
            paresParaObjeto(arrSerie)

            let obj = {
                Série: "Game of Thrones",
                Ano: 2011,
                Autor: "George R. R. Martin",
                Emissora: "HBO"
            }
            console.log("\nObjeto para pares:")
            objetoParaPares(obj)
            break

        default:
            console.log("Opção inválida!")
        }
}

menu()