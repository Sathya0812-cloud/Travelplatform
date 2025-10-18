let selectedTransport = "";

function selectOption(option) {
    selectedTransport = option;

    document.getElementById("busOption").classList.remove("selected");
    document.getElementById("trainOption").classList.remove("selected");
   

    document.getElementById(`${option}Option`).classList.add("selected");
}




document.addEventListener("DOMContentLoaded", () => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
        document.getElementById("user_id").value = userId;
    }
});
 




document.getElementById("viewTransportButton").addEventListener("click", () => {
    const userLocation = document.getElementById("userLocation").value.trim();
    const date = document.getElementById("dateInput").value;
    const children = document.getElementById("children").value || 0;
    const adults = document.getElementById("adults").value || 1;
    const user_id = document.getElementById("user_id").value; // Get user ID from input

    if (!userLocation) {
        alert("Please enter your starting location.");
        return;
    }
    if (!selectedTransport) {
        alert("Please select a transport option (Bus or Train ).");
        return;
    }

    if (!date) {
        alert("Please select a travel date.");
        return;
    }

    const selectedDestination = JSON.parse(localStorage.getItem("selectedDestination"));
    if (!selectedDestination) {
        alert("No destination selected. Redirecting to details page.");
        window.location.href = "details.html";
        return;
    }

    localStorage.setItem(
        "transportChoice",
        JSON.stringify({  transportType: selectedTransport, user_id, date, children, adults, userLocation })
    );
    window.location.href = "view-options.html";
});
