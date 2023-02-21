const task4 = (arr) => {
    return arr.map(el => el.length)
}
console.log(task4(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']))

const task5 = (num) => {
    return num.map(el => `<div>${el}</div>`)
}
console.log(task5([1, 2, 3, 4, 5]))



const task6 = (mmm) => {
    return mmm.filter(el => el.length % 2 === 0 )
}
console.log(task6(['ab', 'abc', 'abcd']))

const task7 = (ide) => {
    return ide.map(el => el.id)
}
console.log(task7([{id: 1},{id: 2},{id: 3},{id: 4}]))

const task8 = (nam) => {
    return nam.filter( el => el*2 %10===0)
} 
console.log(task8([1,2,3,7,10,5]))

const task9 = (boo) => {
    return boo.filter (el => el ===true)
}
console.log(task9([false,true]))

const task10 = (und) => {
    return und.filter (el => el !==undefined)
}
console.log(task10([undefined, true, undefined]))