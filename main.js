const arr = [1, 2, 3, 4, 5]

// todo MAP
const newArr = arr.map(item => {
    return item + 2
})

console.log(newArr)

//TODO REDUCE

const sum = arr.reduce((total, next) => {
    return total + next
})

console.log(sum)

const filter = arr.filter(item => {
    return item > 1
})

console.log(filter)

const find = arr.find(item => {
    return item === 3;
})

console.log(find)