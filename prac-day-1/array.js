let booksPrice = [100, 80, 300, 250, 180, 220, 170, 190, 120, 180, 140, 150];

for (let i = 0; i <= booksPrice.length; i++) {
    let price = booksPrice[i];
    if (price > 200){
        continue;
    };
    console.log(price);
}