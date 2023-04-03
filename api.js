const user = {
    id: 12,
    name: 'kanij roza',
    login: true,
    age: 23,
    address: 'Narayanganj'
}
const stringgifyFormate = JSON.stringify(user)
// console.log(stringgifyFormate);

const objectConvert = JSON.parse(stringgifyFormate)
// console.log(objectConvert);

// json = javascript object nation




const market = {
    name: 'kanij roza store',
    address: 'narayanganj chasara',
    profit: 15000,
    products: ['laptop', 'mobile', 'watch'],
    owner: {
        name: 'kanij',
        profession: 'web development'
    },
    isExpensive: false
};


const database = JSON.stringify(market)
// console.log(stringify);

const convertDatabase = JSON.parse(database);
console.log(convertDatabase);


