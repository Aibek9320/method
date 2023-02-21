const task1 = (one, two) => {
    return one.map((el,ind) => el+two[ind])
}
console.log(task1([2,4],[1,3]))

const task2 = [1,2,3,4,5]
console.log(task2.map(el => {
    return el*2
}))


const task3 = (ide) => {
    return ide.map(el => el.id)
}
console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]))

// const task4 = (arr) => {
//     return arr.map(el => el.length)
// }
// console.log(task4(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']))

const task4 = (num) => {
    return num.map(el => `<div>${el}</div>`)
}
console.log(task4([1, 2]))

const task5 = (five) => {
    return five.filter(el => el.length % 2 === 0)
}
console.log(task5(['ab','abc','abcd']))

// const task6 = (nam) => {
//     return nam.map( el => el * 2)
// } 
// console.log(task6([1,2,3,7,10,5]))


const task7 = (boo) => {
    return boo.filter (el => el ===true)
}
console.log(task7([true, false, true, true, true]))

const task8 = (und) => {
    return und.filter (el => el !==undefined)
}
console.log(task8([undefined, true, undefined]))

const task9 = [2, 11, 5]

console.log(task9.reduce((acc, rec, idx, arr) => {
    return acc + rec
} ));

const task10 = [true,true,true,true ]

console.log(task10.reduce((acc, rec, idx, arr)=> {
    return
}))

