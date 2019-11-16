
var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']

var allShops = []
//creating construction object and converting individual object literals to a blueprint object
function Shop(location, minCust, maxCust, avgCookie, timePeriod, salesPerHour, totalSales) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.timePeriod = timePeriod;
    this.salesPerHour = salesPerHour;
    this.getCookiesEachHour();
    this.totalSales = totalSales;
}


//calculate cookies each hour and add it to object property
//Need prototype keyword to make method available to all instances
Shop.prototype.getCookiesEachHour = function () {
    for (var i = 0; i < time.length; i++) {
        var range = this.maxCust - this.minCust;
        //console.log(this.maxCust);
        var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
        var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
        this.salesPerHour.push(salesAnHour);
    }
}

//add static sample shops to the object
var seattleShop = new Shop('Seattle', 23, 65, 6.3, time, []);
var tokyoShop = new Shop('Tokyo', 3, 24, 1.2, time, []);
var dubaiShop = new Shop('Dubai', 11, 38, 3.7, time, []);
var parisShop = new Shop('Paris', 11, 38, 3.7, time, []);
var limaShop = new Shop('Lima', 2, 16, 4.6, time, []);

//adding all the shops to array
allShops.push(seattleShop);
allShops.push(tokyoShop);
allShops.push(dubaiShop);
allShops.push(parisShop);
allShops.push(limaShop);


//create tables

var tableContainer = document.getElementById('tableContainer');
var tableElement = addElement('table', tableContainer);
var headerRowElement = addElement('tr', tableElement);
var locRowElement = addElement('tr', tableElement);
addElement('th', headerRowElement)

for (var i = 0; i < time.length; i++) {
    addElement('th', headerRowElement, time[i]);
}

addElement('th', headerRowElement, 'Daily Location Total');

//
function getCookiesList(shop) {
    var locationRowElement = addElement('tr', tableElement)
    addElement('th', locationRowElement, shop.location);
    for (var j = 0; j < time.length; j++) {
        addElement('td', locationRowElement, shop.salesPerHour[j]);
    }
    //create total cookies for each location
    var totalcookies = (function () {
        var total = 0;
        for (var i = 0; i < 13; i++) {
            // debugger;
            total += shop.salesPerHour[i];
        }
        shop.totalSales = total;
        //console.log('total sales:',shop.totalSales);
        return total;

    })();
    //add total cookies to each element
    addElement('td',locationRowElement, totalcookies);
    //console.log('total',totalcookies)
}

function getAllShopTotal() {
    var allShops = [seattleShop,tokyoShop,dubaiShop,parisShop,limaShop]
    var totalElement = addElement('tr', tableElement);
    addElement('th', totalElement, 'Total');
    for(var i = 0; i < time.length; i++){
        var hourlyTotal = 0;
        for (var j = 0; j < allShops.length; j++){
            //console.log('item:', allShops[j]);
            hourlyTotal += allShops[j].salesPerHour[i];
        }
        addElement('th', totalElement, hourlyTotal);
    }
    
    var grandTotal = 0;
    for (var k = 0; k < allShops.length; k++){
        grandTotal += allShops[k].totalSales;
    }
    addElement('th', totalElement, grandTotal);
    
}

getCookiesList(seattleShop);
getCookiesList(tokyoShop);
getCookiesList(dubaiShop);
getCookiesList(parisShop);
getCookiesList(limaShop);
getAllShopTotal();

//function to add element
function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}

/////////////////////////////////////////////////



//grab the form element
var form = document.getElementById('input-form');
form.addEventListener('submit', submitHandler);

Shop.prototype.render = function() {
    Console.log('FADFDASFADSF');
    var locationRowElement = addElement('tr', tableElement);
    addElement('th', locationRowElement, allShop[0].location);
}

// add new shop as value added in the page
function submitHandler(event) {
    console.log('click');
    event.preventDefaul();
    var addingNewShop = new Shop(event.target.location.value, parseInt(event.target.minCustomer.value), parseInt(event.target.maxCustomer.value), parseInt(event.target.avgCookies.value));
    console.log('FADFDASFADSF');
    
    event.target.reset();
    
    allShops.push(addingNewShop);
    
    addingNewShop.render();
    
    console.log(addingNewShop);
    
}
console.log(allShops);
