let prices =[1, 12, 5, 1, 111, 200, 1000, 10, 2000, 5000];
let amount = 50;

function maximumToys(prices, k) {
    let _prices = prices.sort(function(a, b){ return a-b; });
    let _toys = 0;
    let _paid = 0;
    for(let i=0; i <=_prices.length; i++){
        _paid = _paid + _prices[i];
        if(_paid <= 50) _toys ++;
        else break;
    }
    return _toys;
}

console.log('Total:', maximumToys(prices, amount));