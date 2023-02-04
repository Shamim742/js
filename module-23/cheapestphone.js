const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 32000, color: 'silver'},
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    { name: 'iPhone', camera: 10, storage: '32gb', price: 82000, color: 'silver'},
    { name: 'Xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver'},
    { name: 'Oppo', camera: 10, storage: '32gb', price: 20000, color: 'silver'},
    { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver'},
    { name: 'Nokia', camera: 10, storage: '32gb', price: 44000, color: 'silver'},
]

function cheapestPhones(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhones(phones);
console.log(mySelection);