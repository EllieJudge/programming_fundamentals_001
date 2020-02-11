function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

function makeHalfPrice(price) {
    const num = parseFloat(price.split('£')[1] / 2);
    return `£${num.toFixed(2).toString()}`;
}

function countBooks(books) {
    return books.length;
}

function isInStock(book) {
    return book.quantity > 0;
}

function getTotalOrderPrice(price, amount) {
    const VAT = (price / 10) * 2;
    return (price + VAT) * amount;

}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};