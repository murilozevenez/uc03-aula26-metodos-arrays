// Arrays e seus métodos
let lista = ['Banana', 'Maçã', 'Manga'];

console.log(lista);

// adicionar um item na ultima posição
lista.push('Abacaxi')

console.log(lista);

// remover um item do final lista (indice length - 1)
console.log('POP')
let itemRemovido = lista.pop()
console.log('Item Removido', itemRemovido)
console.log('Lista Original', lista)

console.log('SLICE último')
// remove da lista o último, retornando uma nova lista sem ele
let novaLista = lista.slice(0, -1)
console.log('Nova Lista', novaLista)
console.log('Lista Original', lista)

// remover um item do inicio da lista (indice 0)
console.log('SHIFT')
itemRemovido = lista.shift()
console.log('Item Removido', itemRemovido)
console.log('Lista Original', lista)

// remove da lista o primeiro, retornando uma nova lista sem ele
console.log('SLICE primeiro')
novaLista = lista.slice(1)
console.log('Nova Lista', novaLista)
console.log('Lista Original', lista)

// alterar o valor de um item

lista[0] = 'Morango'
console.log('lista original', lista)

//inverter os valores da lista
lista.reverse()
console.log('lista original', lista)