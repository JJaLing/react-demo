const { List, Set } = require('immutable')
console.log(List.isList(['1', '2']))
let a = List.of(1, 2, 3, 4)
console.log(a)
console.log(a.size)
a.push(5)
console.log(a)
console.log(a.size)
console.log(a.push(5))
console.log(a.push(5).size)