// Assets
var cashAndSavings = 150000;
var investments = 50000;
var realEstate = 850000;
var retirement = 900000;

var totalAssets = cashAndSavings + investments + realEstate + retirement;

// Debts
var mortageLoans = 7000;
var personalLoans = 6000;
var creditCard = 5000;

var totalDebts = mortageLoans + personalLoans + creditCard;

var netWorth = totalAssets - totalDebts;

// Network Output
console.log("My net worth is " + netWorth);
