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

const task10 = (boo) => {
    return boo.reduce((acc, rec, idx) => {
        return acc && rec
    })
}

console.log(task10([true,true,true,true ]))

const task11 = (field) => {
    return field.reduce((acc, rec, idx) => {
        return {...acc, ['field' + (idx + 1)] :rec}
    } )
}
console.log(task11([true,1,'wow','you are smart, bro']))

const task12 = (obj) => {
return Object.entries(obj).reduce((acc, rec) => {
    if(typeof rec[1] === 'string'){
        return {...acc, [rec [0]]: rec[1]}
    } else {
        return acc
    }
}, {})
}
console.log (task12({ name: 'pilot', isactive: true }));

// Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false
// Input: { isActive: false, isPilot: true }
// Actions:
// Output: ['isActive']


const task13 = (ob) => {
    return Object.entries(ob).reduce((acc, rec) => {
        if (!ob[rec]){
            return [...acc, rec]
        }
        else{
            return acc
        }
}, [])
}
console.log(task13({ isActive: false, isPilot: true }))

// Вам задан массив - верните среднее число массива. (сумма всех элементов деленное на количество элементов)
// Input: [4, 6]
// Actions:
// Output: 5
// Input: [2, 4]
// Actions:
// Output: 3

// const task14 = (avg) => {
//     return avg.reduce((acc, rec) => {
//         return acc+rec
//     })/avg.length
// }
// console.log(task14([4, 2]))

const task15 = (arrr, initialVal) => {
    return arrr.reduce((acc, rec) => {
        return rec(acc)
    }, initialVal)
}

console.log(task15([(a) => a+ 1,(a) => a * 2],5));


