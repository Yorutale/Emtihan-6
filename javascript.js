//tapsirma 1

const shop = {
    name_shop: `E-Shop`,
    phoneNumber: `+7 777 130 6745`,
    products: [
        { name: `Big Bon`, information: `Big Bon, это лапша быстрого приготовления` },
        { name: `Doshirak`, information: `Doshirak, это тоже лапша быстрого приготовления, которую можно кушать сухим` },
        { name: `Mahito - Lemon дәмі`, information: `Mahito, это банка газировки со вкусом лимона` },
        { name: `Lays - со вкусом краба`, information: `Lays, это маленький пакетик чипсов со вкусом краба` },
        { name: `Fruitella - микс дәмі`, information: `Fruitella, это пачка конфеток с разными вкусами`},
    ],
    productName: {
        name_product_1: `Big Bon`, 
        name_product_2: `Doshirak`, 
        name_product_3: `Mahito - Lemon дәмі`, 
        name_product_4: `Lays - со вкусом краба`,
        name_product_5: `Fruitella - микс дәмі`,
    },
    category: {
        category_noodles: `Категория, лапшы быстрого приготовления:` + `\n` + `Big Bon, Doshirak`,
        category_drink: `Категория, питьевых вещей:` + `\n` + `Mahito - Lemon дәмі`,
        category_others: `Категория, остальное:` + `\n` + `Lays - со вкусом краба, Fruitella - микс дәмі`,
    },
    price: {
        price_product_1: 250,
        price_product_2: 150,
        price_product_3: 560,
        price_product_4: 430,
        price_product_5: 500,
    },
    stock: {
        stock_product_1: 20,
        stock_product_2: 20,
        stock_product_3: 10,
        stock_product_4: 5,
        stock_product_5: 5,
    },
};

console.log(shop);