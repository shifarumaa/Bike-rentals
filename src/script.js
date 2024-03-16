function rentBike() {
    var firstName = prompt("Please enter your first name:");
    var phoneNumber = prompt("Please enter your phone number:");
    var email = prompt("Please enter your email address:");

    
    var selectedBike = document.getElementById("bike-select").value;
    var rentalOption = document.getElementById("rental-option").value;

       var amount = 0;
    if (rentalOption === "day") {
        amount = calculateRandomPrizeForDay(); // Calculate random prize for a day
    } else if (rentalOption === "week") {
        amount = 500; // Sample amount for a week
    }

        if (firstName && phoneNumber && email && selectedBike) {
        
        var billHTML = "<h2>Bill Certificate</h2>";
        billHTML += "<p><strong>Name:</strong> " + firstName + "</p>";
        billHTML += "<p><strong>Phone Number:</strong> " + phoneNumber + "</p>";
        billHTML += "<p><strong>Email:</strong> " + email + "</p>";
        billHTML += "<p><strong>Selected Bike:</strong> " + selectedBike + "</p>";
        billHTML += "<p><strong>Rental Option:</strong> " + rentalOption + "</p>";
        billHTML += "<p><strong>Amount (Rs):</strong> " + amount + "</p>";
        //####         

	//#####         
	var billWindow = window.open("", "Bill Certificate", "width=600,height=400");
        billWindow.document.body.innerHTML = billHTML;
    } else {
        
        alert("Please fill in all the fields.");
    }
}

function makeCall() {
    
    var phoneNumber = "9398269608";
    
    window.open("tel:" + phoneNumber);
}


function sendMessage() {
    
    var phoneNumber = "9398269608";
    
        window.open("sms:" + phoneNumber);
}

function calculateRandomPrizeForDay() {
    
    return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
}
