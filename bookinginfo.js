document.addEventListener("DOMContentLoaded", () => {
    const assistantDetailsSection = document.getElementById("assistantDetails");

    // Retrieve booked assistant name from localStorage
    const assistantName = localStorage.getItem("selectedAssistant");
    
    if (!assistantName) {
        assistantDetailsSection.innerHTML = "<p>No assistant booked. Please select and book an assistant first.</p>";
        return;
    }

    // Assistant data
    const contentData = {
        "John Doe": {
            title: "Assistant Services - John Doe",
            contact: "9629191661",
            price: "₹1000 per day",
            specialization: "Carrying luggage, wheelchair assistance, and providing travel companionship."
        },
        "Jane Smith": {
            title: "Assistant Services - Jane Smith",
            contact: "9876543210",
            price: "₹1200 per day",
            specialization: "Mobility aid support, managing medical equipment, and handling documentation during travel."
        },
        "Alex Johnson": {
            title: "Assistant Services - Alex Johnson",
            contact: "5555555555",
            price: "₹900 per day",
            specialization: "Guiding visually impaired travelers, arranging accessible transportation, and navigating airports or train stations."
        },
        "Emily Davis": {
            title: "Assistant Services - Emily Davis",
            contact: "4444444444",
            price: "₹1100 per day",
            specialization: "Assisting with hearing aids, helping with personal errands, and providing emotional support during trips."
        },
        "Michael Brown": {
            title: "Assistant Services - Michael Brown",
            contact: "3333333333",
            price: "₹1300 per day",
            specialization: "Setting up accessible accommodations, transferring between vehicles, and coordinating with care providers."
        }
    };

    // Check if the assistant exists in contentData
    if (contentData[assistantName]) {
        const assistant = contentData[assistantName];

        // Display the assistant's information
        assistantDetailsSection.innerHTML = `
            <h3>Booking Confirmation</h3>
            <p><strong>Assistant Name:</strong> ${assistantName}</p>
            <p><strong>Contact:</strong> ${assistant.contact}</p>
            <p><strong>Price:</strong> ${assistant.price}</p>
            <p><strong>Specialization:</strong> ${assistant.specialization}</p>
        `;
    } else {
        assistantDetailsSection.innerHTML = "<p>Assistant details not found. Please try again.</p>";
    }
});

// Go back function
function goBack() {
    window.location.href = "details.html"; 
}
