# 📔 Lista de Exercícios 2 - Aplicando conceitos intermediários em JS - +praTI

#  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este repositório contém a solução de uma lista de exercícios que envolvem operações fundamentais, estruturas de controle, vetores, funções e recursão.

## Como executar:

1. Clone este repositório

   - Usando **SSH**:
     ```bash
     git clone git@github.com:BrunnoCarvalho/Lista-2-maisPraTi.git
     ```
   - Usando **HTTPS**:
     ```bash
     git clone https://github.com/BrunnoCarvalho/Lista-2-maisPraTi.git
     ```
3. Navegue até o diretório do projeto e abra a pasta
4.  Instale o Node.js. Caso ainda não o tenha instalado, acesse https://nodejs.org e siga as instruções para a instalação.
  
6. Instale as dependências necessárias no terminal com o comando:
   ```bash
   npm install
   ```
7. Execute o programa e escolha o exercício do 1 ao 9 cuja solução deseja ver.
8. Importante:
  - O exercício 2 é o único que recebe entrada do usuário.
  - Para alterar a entrada dos demais exercícios, modifique dentro da função `menu`, no case do switch referente ao exercício escolhido.

##  📙 Lista de Exercícios

### Seção 1: Estruturas de Controle Avançadas

1. **Validação de Datas**  
   Crie a função `ehDataValida(dia, mes, ano)` que retorne `true` se os valores
   formarem uma data real (meses de 28 a 31 dias, ano bissexto para
   fevereiro) e `false` caso contrário.

2. **Jogo de Adivinhação**  
   Escreva um script que gere um número aleatório de 1 a 100 e peça ao
   usuário para adivinhar. Use `while` para repetir até acertar, contando
   tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

3. **Palavras Únicas**  
   Dada uma string (ex.: "olá olá mundo mundo"), use `if/else` e `for` para extrair
   todas as palavras únicas e exibi-las em um array.

### Seção 2: Funções e Recursão

4. **Fatorial Recursivo**  
   Implemente a função `fatorial(n)` de forma recursiva; trate `n < 0` lançando
   um erro, e `n === 0` retornando 1.

5. **Debounce**  
   Crie a função `debounce(fn, delay)` que receba uma função `fn` e um delay
   em ms, retornando uma nova função que só executa `fn` se não for
   chamada novamente dentro do intervalo.

6. **Memoization**  
   Implemente a função `memoize(fn)` que armazene em cache chamadas
   anteriores de `fn` (por argumentos), retornando resultados instantâneos em
   repetidas invocações.

### Seção 3: Arrays e Objetos Complexos

7. **Mapeamento e Ordenação**  
   Dado um array `produtos = [{ nome, preco }, ...]`, crie uma função que
   retorne um novo array apenas com os nomes, ordenados por preço
   crescente, usando `map` e `sort`.

8. **Agrupamento por Propriedade**  
   Em `vendas = [{ cliente, total }, ...]`, use `reduce` para gerar um objeto onde
   cada chave é um cliente e o valor é a soma de todos os seus totais.

9. **Conversão Entre Formatos**  
   Escreva duas funções:

   - `paresParaObjeto(pares)`: recebe um array de pares `[ [chave, valor], ... ]` e retorna o objeto equivalente.
   - `objetoParaPares(obj)`: faz o inverso, retornando um array de pares.

## 🧑‍💻 Contato

Desenvolvido por Bruno Vivian Carvalho.

[![Linkedin Badge](https://img.shields.io/badge/-Bruno-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bvcarvalho/)](https://www.linkedin.com/in/bvcarvalho/)
