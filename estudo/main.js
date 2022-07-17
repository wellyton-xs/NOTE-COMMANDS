// BÁSICO DO BÁSICO NO JAVASCRIPT
/**
 neste documento estão vários métodos, comandos e conceitos do javascript todos comentados para que eu possa revisar meus estudos.
 porém uma coisa que pretendo é disponibilizar este código no github para que novatos como eu possam utilizar para revisar.
 deixarei também em uma página HTML algumas explicações sobre como estudar com eficiência cada tópico e também os materiais que usei para escreve-lo 
 como bônus ainda deixarei material que eu postarei no youtube usando esse documento como base.
 para mais detalhes leia o README.MD
 */

// PUXANDO VALORES E DESCOBRINDO SEU NÚMERO DE CARACTERES
console.log('EXIBINDO UMA MENSAGEM COM CONSOLE.LOG E NÚMERO DE CARACTERES')
const message = 'hello world'
console.log(message, message.length)

// CONCATENANDO STRINGS DE DUAS FORMAS
console.log('MANIPULANDO STRINGS E MANIPULANDO DADOS')
const firstName = 'welly'
const lastName = 'osa'
console.log('meu nome é:' + firstName + ' ' + lastName)
console.log(`meu nome é: ${firstName.toUpperCase()} ${lastName}`)

// TRANSFORMANDO UMA STRING EM LISTA
const names = 'welly, ton, tonzinho'
console.log(names.split(',')) // *lembrar de ler a documentação do split

// TRABALHANDO COM OPERAÇÕES
//* coloquei em uma função, já que utilizei o prompt para perguntar ao usuário que número passaria pelas operações definidas no console assim toda vez que der reload ele não irá ativar a mensagem do prompt que trava toda a aplicação.
function clicked(){
    const number = prompt();
    console.log(number + number, number - number, number * number, number / number)
    console.log(number + 10, number - 10, number * 10, number /10 ) 
    
    // podemos usar qualquer uma das operações, multimplicar variáveis ou números.
}

// VERIFICANDO TIPOS DE DADOS
const numberExample = 5;
console.log(numberExample.toString())
console.log(typeof numberExample)
console.log(typeof numberExample.toString())


// VALORES BOOLEANOS

//* '==' não se importa com o tipo do dado e sim se eles são iguais em sua essência 
console.log(2 == 3)
console.log(2 == '2')

//* '===' se importa com o tipo de dado, se forem diferentes dará false
console.log(2 === 3)
console.log(2 === '2')


//* NULL & UNDEFINED

// null define que a variável é vazia, não existe nada nela. um verdadeiro limbo :)
const x = null;

// undefined não define falor a variável, enquanto o null define que ela é vazia
const y = undefined;

//* LISTAS
console.log('LISTAS')
const list = ['welly', 'howl', 10, false]

// pegando o valor desejado declarando em um const
const howls = list[1]
console.log(howls)

// push é um comando para adicionar um novo item
list.push('pedro')
console.log(list)

// adiciona o item no início da lista
list.unshift('first')
console.log(list)

// remove o primeiro item, o first não merece piedade.
list.shift()
console.log(list)

// remove o último item
list.pop()
console.log(list)

// editando um item da lista
list[2] = 15
console.log(list)

// descobrindo o índice de um item
console.log(list.indexOf(false))

// OPERAÇÕES COM LISTAS, MAP, FILTER & REDUCE.

//multiplicando um array com map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]
const multiplied = numbers.map(function(number) {
    return number * 2
})
console.log(multiplied)


// OBJETOS.
console.log('OBJETOS')
const object = {
    objectName: 'isso é um objeto!'
}

console.log(object.objectName)
console.log(typeof object.objectName)   

const person = {
    name: 'welly',
    age: '16',
    hobbie: ['Ler', 'escrever', 'codar casualmente', 'jogar casualmente', 'assistir as lives do saves infinitos'],
    dog: {
        name: 'caramelo',
        age: '9999999999999999999'
    }
}
console.log(person, typeof person)


// acessando os valores de um objeto
const personName = person.name;
const ages = person.age;
const hobbies = person.hobbie

// portanto existe uma forma melhor de fazer isso

const {name, age, hobbie} = person;

console.log(personName, age, hobbie)


const watch = person.hobbie[4] // acessando o item de uma lista dentro de um objeto usando const e guardando em uma variável
console.log(watch)

person.dog = "caramelo"
console.log(person)
console.log(person.dog)

// aprendemos a criar objetos e acessar os seus elementos, agora podemos expandir isso criando um documento dentro de uma lista. o que é uma coisa bem comum.

const toDo = [
    {
        id: 1,
        description:'estudar programação',
        isCompleted: false
    },
    {
        id: 2,
        description:'malhar',
        isCompleted: false
    },
    {
        id: 3,
        description:'ler',
        isCompleted: false
    }
]

// dessa forma acessamos o objeto dentro da lista, note que se adicionarmos .id ou .description na frente de toDo iremos acessar o valor que está dentro desses elementos que declaramos dentro do objeto.
const pushToDo = toDo[0]
console.log(pushToDo)

// JSON
console.log('JSON')
// o JSON serve para trafegar dados entre aplicações, se você fosse passar essa lista que criamos anteriormente para uma API você passaria em JSON. para fazer a conversão utilizamos o método a seguir:

const toDoJSON = JSON.stringify(toDo);
console.log(toDoJSON) // observe que transformamos toda a lista de objetos em uma coisa que se parece com uma lista, porém não é tanto que você não consegue acessar os itens dessa lista como fizemos com as listas e objetos anteriormente.

// porém é sim possível converter a string no formato JSON para uma lista novamente, para isso utilizamos outro método do JSON como o stringify que utilizamos anteriormente. esse método é o parse com ele teremos novamente um array com os objetos
const toDoList = JSON.parse(toDoJSON)
console.log(toDoList)

// WHILE (loops de repetição)
console.log('LOOPS')
// os loops de repetição são bem auto explicativos, já que eles se repetem podemos usalos para executar tarefas repetitivas várias e várias vezes. por exemplo, se tivessemos uma lista de vários usuários para se verificar não iriamos querer fazer um IF, uma condicional para cada um. por isso usamos o loop para fazer essas tarefas para nós.

// nesse exemplo criamos um loop que ao executado ele declara um indíce (index) que enquanto o mesmo for menor que 10 ele adicionará 1 ao seu valor inicial.
for (let index = 0; index <= 10; index ++) {
    console.log(index)
}


console.log('LOOP COM LISTAS')
const animes = ['one piece', 'jujutsu', 'scissor seven', 'kimetsu no yaiba' ]

for(let i = 0; i < animes.length; i++) {
    console.log(animes[i])
}

console.log('LOOP COM LISTAS E OBJETOS')
const operationalSystems = [
    {
        systems: ['linux', 'windows', 'mac']
    },

    {
        system: 'linux',
        dist: ['ubuntu', 'pop_OS', 'mint', 'fedora']
    },

    {
        system: 'windows',
        dist: 'home'
    },

    {
        system: 'mac'
    }
]

for(let i = 0; i < operationalSystems.length; i++) {
    console.log(operationalSystems[i])
}

console.log('LOOP COM LISTA USANDO O MÉTODO FOR OF')
for (let oP of operationalSystems) {
    console.log(oP)
}

console.log('LOOP USANDO O MÉTODO FOREACH')
operationalSystems.forEach(function(oP, index){
    console.log(index)
    console.log(oP)
})

console.log('LOOP WHILE')

let i = 0;

while (i < 10) {
    console.log('index é menor que 10!')
    i++
}

// você deve utilizar o i++ pois caso ele não esteja ali pode ser que seu código rode infinitamente.
// pois quando escrevemos o código declaramos que i é igual a 0 então ele não está sendo somado toda vez que o loop é executado.
// o que esse i++ faz é exatamente isso, podemos escrever ele de três formas
// como fizemos acima, i++ como também i += 1 ou i = i + 1 
// são formas diferentes de se fazer a mesma coisa, por isso eu prefiro optar pela mais simples i++

const isNotMetalGear = {
    name: "armstrong",
    age: 82
}

// o for é um laço pouco performático mas dá pra usar para acessar as propriedades de um objeto.
for (property in isNotMetalGear) {
    console.log(isNotMetalGear[property])
}

const sum = 1 + 1

//relembrando que o "===" se importa com o tipo do dado enquanto o "==" não. se atente a esses detalhes pois é muito importante discernir essas coisas
if (sum === 2) {
    console.log('sum is 2!')
} else if (sum === 3) {
    console.log('sum is 3!')
}
else{
    console.log('sum is not 2')
}

/*
agora iremos trabalhar os operadores lógicos e relacionais, que para as estruturas condicionais são muito importantes.
eles podem parecer bem familiares já que também são utilizados na matemática.

    operadores relacionais:
        "==" igual a
        "!=" diferente de
        ">" maior que
        "<" menor que
        ">=" maior ou igual a
        "<=" menor ou igual a
    
    operadores lógicos:
        && and
        || or

    talvez os lógicos tenham ficado um pouco confusos, já que são algo novo, mas calma que não é tão complicado assim.
    
        
*/