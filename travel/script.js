

const updateGreeting = () => {
    let today = new Date();
    let hourNow = today.getHours();
    let greetings;

    if (hourNow > 18) {
        greetings = 'Good Evening!';
    }else if (hourNow > 11) {
        greetings  = 'Good Afternoon!';
    }else if (hourNow > 0) {
        greetings = 'Good Morning!';
    }else {
        greetings = 'Hello';
    }

    let el = document.getElementById('greet');
    el.textContent = greetings;
}

updateGreeting();

let destination = document.getElementById('place').value;
let enterDate = document.getElementById('day').value;
let bookButton =  document.getElementById('reserve');


const message = (place, date) => {
    
    if(place > 5 || date!= " "){
        confirm("Congratulations!! You are all set. Enjoy your trip");
    }else{
        alert("Ooops! Entry is not valid. Please try again");
    }
}

bookButton.addEventListener("click", message);

