const candies = [
{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38
}];

function getItemById(id){
    let candy = candies.find(snack => snack.id === id);
    console.log(candy);
}

module.exports = {
    // Uncomment these as you write them
    // getItemById,
    // buildTransactions,
    // getTransactionsByItemDescription
}
