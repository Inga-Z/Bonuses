console.log('worked');

const purchaseAmount = 1000;
const bonuses = 2000;

let total = purchaseAmount - bonuses;
if (total < 0){
    total = 0;
}


console.log(total);
