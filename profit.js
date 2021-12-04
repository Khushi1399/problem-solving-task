//Sales profit
function profit(price, n) {
    if (n == 1) {
        return;
    }
    else {
        let i;
        let sum = 0;

        for (i = 0; i <= n; i++) {

            let j = i + 1;

            if (price[i] < price[j]) {
                let diff = price[j] - price[i]
                sum += diff
            }
        }
        return sum
    }
}

let price = [3, 2, 6, 5, 0, 3];
let n = price.length;
const a = profit(price, n);
console.log('Total profit', a)
