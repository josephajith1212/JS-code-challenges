const username = Symbol('username');
const password = Symbol('password');

const user = {
    [username]: "aj",
    [password]: '123a',
    age: 100
}

console.log(user.username)
console.log(user.password)
console.log(user.age)