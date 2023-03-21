let balance = 1000;
let data = [100, 50, 80];
let price = [10, 15, 5]


let buyFunc = (beer, vine, pepsi) => {

    if(beer > data[0] || vine > data[1] || pepsi > data[2]){
        return `Вибачте, але на складі залишилось ${data[0]} beer, ${data[1]} vine, ${data[2]} pepsi`
    }

    data[0] -= beer;
    data[1] -= vine;
    data[2] -= pepsi;
    balance += beer * price[0] + vine * price[1] + pepsi * price[2];
    
    return `Залишилось ${data[0]} beer, ${data[1]} vine, ${data[2]} pepsi, всього: ${balance}`
};

export { balance, data, buyFunc };
