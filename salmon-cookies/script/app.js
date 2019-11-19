'use strict'

var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']

var allShops = []


//function to add element
function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}
//creating construction object and converting individual object literals to a blueprint object
function Shop(location, minCust, maxCust, avgCookie, timePeriod, salesPerHour, totalSales) {
    console.log('########################### inside Shop constructor start');
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.timePeriod = timePeriod;
    this.salesPerHour = salesPerHour;
    this.totalSales = totalSales;
    this.getCookiesEachHour();
    console.log('total sales', this.totalSales);
    console.log('########################### inside Shop constructor done');
}


//calculate cookies each hour, generate random number and add it to object property
//Need prototype keyword to make method available to all instances
Shop.prototype.getCookiesEachHour = function () {
    for (var i = 0; i < time.length; i++) {
        var range = this.maxCust - this.minCust;
        var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
        var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
        this.salesPerHour.push(salesAnHour);
        this.totalSales += salesAnHour;
    }
    console.log('########################### inside Shop getCookiesEachHour done');
}

//add static sample shops to the object and pushing object to array
allShops.push(new Shop('Seattle', 23, 65, 6.3, time, [], 0));
allShops.push(new Shop('Tokyo', 3, 24, 1.2, time, [], 0));
allShops.push(new Shop('Dubai', 11, 38, 3.7, time, [], 0));
allShops.push(new Shop('Paris', 11, 38, 3.7, time, [], 0));
allShops.push(new Shop('Lima', 2, 16, 4.6, time, [], 0));


//create tables

var tableContainer = document.getElementById('tableContainer');
var tableElement = addElement('table', tableContainer);
var headerRowElement = addElement('thead', tableElement);
var tableBody = addElement('tbody', tableElement);
var footerElement = addElement('tfoot', tableElement);
var footerRow = addElement('tr', footerElement);

//adding table head row
addElement('th', headerRowElement, 'Location')
for (var i = 0; i < time.length; i++) {
    addElement('th', headerRowElement, time[i]);
}
addElement('th', headerRowElement, 'Daily Location Total');

//add sales per hour for each shop and total for each shop
Shop.prototype.getCookiesListAndTotal = function () {
    var locationRowElement = addElement('tr', tableBody)
    addElement('th', locationRowElement, this.location);
    for (var j = 0; j < time.length; j++) {
        addElement('td', locationRowElement, this.salesPerHour[j]);
        this.totalSales += this.salesPerHour[j];
    }

    //add total cookies to each element
    addElement('td', locationRowElement, this.totalSales);
}

function getAllShopTotal() {
    var totalElement = addElement('tr', footerElement);
    addElement('th', totalElement, 'Total');
    for (var i = 0; i < time.length; i++) {
        var hourlyTotal = 0;
        for (var j = 0; j < allShops.length; j++) {
            hourlyTotal += allShops[j].salesPerHour[i];
        }
        addElement('th', totalElement, hourlyTotal);
    }

    var grandTotal = 0;
    for (var k = 0; k < allShops.length; k++) {
        grandTotal += allShops[k].totalSales;
    }
    addElement('th', totalElement, grandTotal);

}




/////////////////////////////////////////////////



//grab the form element
var form = document.getElementById('input-form');
form.addEventListener('submit', submitHandler);

Shop.prototype.render = function () {
    var locationRowElement = addElement('tr', tableBody);
    addElement('th', locationRowElement, this.location);
    for (var i = 0; i < time.length; i++) {
        addElement('td', locationRowElement, this.salesPerHour[i]);
    }

    addElement('td', locationRowElement, this.totalSales);

}

// add new shop from the user input
function submitHandler(event) {
    event.preventDefault();
    console.log('########################### calling Shop constructor');
    var addingNewShop = new Shop(event.target.location.value, parseInt(event.target.minCustomer.value), parseInt(event.target.maxCustomer.value), parseInt(event.target.avgCookies.value), time, [], 0);
    console.log('########################### done with Shop constructor');
    allShops.push(addingNewShop);
    footerElement.innerHTML = '';
    addingNewShop.render();
    event.target.reset();
    getAllShopTotal();
}
for (var shop of allShops) {
    shop.getCookiesListAndTotal();
}
getAllShopTotal();
