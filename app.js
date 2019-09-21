console.log('worked');

const purchaseAmount = 1000;
const availableBonuses = 100;

const maxBonuses = purchaseAmount * 0.5;

const apliteBonuses = maxBonuses <= availableBonuses ? maxBonuses :availableBonuses;

console.log(apliteBonuses);

const total = purchaseAmount - apliteBonuses;

console.log(total);
