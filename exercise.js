const candies = [
    {
        id: 1,
        description: "Dark Chocolate Crunchies",
        price: 4.29
    }, {
        id: 2,
        description: "Mint Wafers",
        price: 1.09
    }, {
        id: 3,
        description: "Peppermint Poppers",
        price: 2.38
    }];

function getItemById(num) {
    let candy = candies.find(snack => snack.id === num);
    console.log(candy);
}

const sales = [
    {
        itemId: 1,
        quantity: 2
    }, {
        itemId: 2,
        quantity: 2
    }, {
        itemId: 1,
        quantity: 2
    }, {
        itemId: 3,
        quantity: 3
    }];


function buildTransactions(num) {
    let salesDescribed = sales.map(sale => {
        
    });
    console.log(salesDescribed);
}

module.exports = {
    // Uncomment these as you write them
    // getItemById,
    // buildTransactions,
    // getTransactionsByItemDescription
}
