

// Mock room data for each destination
const roomData = {
    "Taj Mahal, Agra": [
        {
            name: "Luxury Suite",
            accessibility: "Accessible bathroom and elevator access",
            price: "₹3,000 per night",
            contact: "0562-987654",
            address: "Taj View Hotel, Agra",
        },
        {
            name: "Economy Room",
            accessibility: "Wheelchair-friendly pathways",
            price: "₹800 per night",
            contact: "0562-456789",
            address: "Agra Budget Stay, Near Taj Mahal",
        },
    ],
    "Qutub Minar, Delhi": [
        {
            name: "Delhi View Residency",
            accessibility: "Elevator and step-free entry",
            price: "₹5,500/night",
            contact: "9876543211",
            address: "Qutub Road, Delhi"
        },
        {
            name: "Heritage Stay Delhi",
            accessibility: "Accessible suites and ramps",
            price: "₹6,000/night",
            contact: "9813145678",
            address: "Mehrauli, Delhi"
        }
    ],
     
    "Amber Fort, Jaipur": [
        {
            name: "Heritage Stay Amber",
            accessibility: "Wheelchair-accessible bathrooms",
            price: "₹3,000/night",
            contact: "9876543210",
            address: "Near Amber Fort, Jaipur, Rajasthan"
        },
        {
            name: "Royal Retreat Amber",
            accessibility: "Elevators and accessible dining",
            price: "₹4,500/night",
            contact: "9823456789",
            address: "Amber Road, Jaipur, Rajasthan"
        }
    ],
    
   
    "Gateway of India, Mumbai": [
        {
            name: "Sea View Residency",
            accessibility: "Ramp access and accessible showers",
            price: "₹6,000/night",
            contact: "9876543111",
            address: "Opposite Gateway of India, Colaba, Mumbai"
        },
        {
            name: "Mumbai Heritage Inn",
            accessibility: "Elevator and wheelchair-friendly entry",
            price: "₹5,000/night",
            contact: "9812345678",
            address: "Colaba Causeway, Mumbai, Maharashtra"
        }
    ],
    "Lalbagh Botanical Garden, Bangalore": [
        {
            name: "Garden View Suites",
            accessibility: "Accessible paths and bathrooms",
            price: "₹2,500/night",
            contact: "9865432112",
            address: "Lalbagh Road, Bangalore, Karnataka"
        },
        {
            name: "Bangalore Serenity",
            accessibility: "Wheelchair-friendly entry and lifts",
            price: "₹3,200/night",
            contact: "9811123456",
            address: "Mavalli, Bangalore, Karnataka"
        }
    ],
    "Victoria Memorial, Kolkata": [
        {
            name: "Colonial Stay Victoria",
            accessibility: "Ramps and accessible suites",
            price: "₹4,000/night",
            contact: "9876543213",
            address: "Queens Way, Kolkata, West Bengal"
        },
        {
            name: "Kolkata Palace Inn",
            accessibility: "Elevator and wheelchair ramps",
            price: "₹3,800/night",
            contact: "9832145678",
            address: "Maidan Area, Kolkata, West Bengal"
        }
    ],
    "Alleppey Backwaters, Kerala": [
        {
            name: "Backwater Retreat",
            accessibility: "Wheelchair ramps and accessible houseboats",
            price: "₹5,500/night",
            contact: "9897654321",
            address: "Alleppey Backwaters, Kerala"
        },
        {
            name: "Houseboat Bliss",
            accessibility: "Step-free access to houseboats",
            price: "₹7,000/night",
            contact: "9821345678",
            address: "Vembanad Lake, Alleppey, Kerala"
        }
    ],
    "Red Fort, Delhi": [
        {
            name: "Deluxe Room",
            accessibility: "Wheelchair-accessible bathroom",
            price: "₹1,500 per night",
            contact: "0120-123456",
            address: "Hotel Comfort, Near Red Fort, Delhi",
        },
        {
            name: "Standard Room",
            accessibility: "Ramp and grab bars available",
            price: "₹1,000 per night",
            contact: "0120-654321",
            address: "Stay Inn, Red Fort Road, Delhi",
        },
    ],
    "City Palace, Udaipur": [
        {
            name: "Palace View Suites",
            accessibility: "Elevators and accessible dining areas",
            price: "₹6,500/night",
            contact: "9876543251",
            address: "City Palace Road, Udaipur, Rajasthan"
        },
        {
            name: "Udaipur Heritage Stay",
            accessibility: "Wheelchair-friendly bathrooms and ramps",
            price: "₹5,800/night",
            contact: "9812345678",
            address: "Lake Pichola Road, Udaipur, Rajasthan"
        }
    ],
    "Jaisalmer Fort, Jaisalmer": [
        {
            name: "Desert Retreat",
            accessibility: "Step-free entry and accessible rooms",
            price: "₹4,200/night",
            contact: "9876543250",
            address: "Near Jaisalmer Fort, Jaisalmer, Rajasthan"
        },
        {
            name: "Golden Heritage Stay",
            accessibility: "Wheelchair-friendly paths and bathrooms",
            price: "₹5,500/night",
            contact: "9811123456",
            address: "Patwon Ki Haveli Road, Jaisalmer, Rajasthan"
        }
    ],
    "Hawa Mahal, Jaipur": [
        {
            name: "Palace View Hawa",
            accessibility: "Ramp access and accessible dining",
            price: "₹3,500/night",
            contact: "9876543113",
            address: "Near Hawa Mahal, Jaipur, Rajasthan"
        },
        {
            name: "Jaipur Heritage Stay",
            accessibility: "Wheelchair-friendly bathrooms and pathways",
            price: "₹4,200/night",
            contact: "9812143456",
            address: "Badi Chaupar, Jaipur, Rajasthan"
        }
    ],
    "Charminar, Hyderabad": [
        {
            name: "Charminar Residency",
            accessibility: "Ramp and lift access",
            price: "₹3,800/night",
            contact: "9876543234",
            address: "Old City, Hyderabad, Telangana"
        },
        {
            name: "Heritage Stay Hyderabad",
            accessibility: "Accessible suites and pathways",
            price: "₹4,200/night",
            contact: "9845632123",
            address: "Near Charminar, Hyderabad, Telangana"
        }
    ],
    "Rishikesh, Uttarakhand": [
        {
            name: "Ganges Bliss Retreat",
            accessibility: "Elevator and wheelchair-accessible paths",
            price: "₹4,500/night",
            contact: "9876543235",
            address: "Banks of Ganga, Rishikesh, Uttarakhand"
        },
        {
            name: "Yoga Retreat Accessible",
            accessibility: "Step-free rooms and yoga facilities",
            price: "₹5,000/night",
            contact: "9871233456",
            address: "Tapovan, Rishikesh, Uttarakhand"
        }
    ],
    "Vivekananda Rock, Kanyakumari": [
        {
            name: "Ocean View Residency",
            accessibility: "Wheelchair ramps and accessible showers",
            price: "₹4,000/night",
            contact: "9876543236",
            address: "Beach Road, Kanyakumari, Tamil Nadu"
        },
        {
            name: "Kanyakumari Accessible Stay",
            accessibility: "Step-free entry and dining",
            price: "₹4,800/night",
            contact: "9832145677",
            address: "Near Vivekananda Rock, Kanyakumari, Tamil Nadu"
        }
    ],
    "Meenakshi Temple, Madurai": [
        {
            name: "Temple City Inn",
            accessibility: "Accessible bathrooms and ramps",
            price: "₹3,000/night",
            contact: "9876543237",
            address: "Near Meenakshi Temple, Madurai, Tamil Nadu"
        },
        {
            name: "Madurai Heritage Stay",
            accessibility: "Wheelchair-friendly lifts and suites",
            price: "₹3,800/night",
            contact: "9812343456",
            address: "West Tower Street, Madurai, Tamil Nadu"
        }
    ],
    "Shimla, Himachal Pradesh": [
        {
            name: "Mountain View Inn",
            accessibility: "Ramp access and elevator",
            price: "₹4,200/night",
            contact: "9876543238",
            address: "Mall Road, Shimla, Himachal Pradesh"
        },
        {
            name: "Himalayan Serenity",
            accessibility: "Accessible pathways and suites",
            price: "₹5,000/night",
            contact: "9821343456",
            address: "Kufri Road, Shimla, Himachal Pradesh"
        }
    ],

    "Kaziranga National Park, Assam": [
        {
            name: "Jungle Retreat Kaziranga",
            accessibility: "Wheelchair-accessible cottages and safari vehicles",
            price: "₹6,500/night",
            contact: "9876543240",
            address: "Kaziranga National Park, Assam"
        },
        {
            name: "Kaziranga Green Stay",
            accessibility: "Accessible bathrooms and dining areas",
            price: "₹5,000/night",
            contact: "9812141234",
            address: "Bagori Range, Kaziranga, Assam"
        }
    ],
    "Mahabalipuram, Tamil Nadu": [
        {
            name: "Heritage Beach Resort",
            accessibility: "Accessible rooms and beach pathways",
            price: "₹7,000/night",
            contact: "9876543241",
            address: "Beach Road, Mahabalipuram, Tamil Nadu"
        },
        {
            name: "Temple Bay Stay",
            accessibility: "Ramps and elevators available",
            price: "₹6,500/night",
            contact: "9823145678",
            address: "East Coast Road, Mahabalipuram, Tamil Nadu"
        }
    ],
    "Diu Fort, Diu": [
        {
            name: "Fort View Residency",
            accessibility: "Wheelchair-friendly paths and bathrooms",
            price: "₹4,000/night",
            contact: "9876543242",
            address: "Near Diu Fort, Diu"
        },
        {
            name: "Diu Heritage Stay",
            accessibility: "Accessible dining and suites",
            price: "₹5,200/night",
            contact: "9812145677",
            address: "Diu Fort Road, Diu"
        }
    ],
    "Miramar Beach, Goa": [
        {
            name: "Beachfront Bliss",
            accessibility: "Ramp access and accessible showers",
            price: "₹6,800/night",
            contact: "9876543243",
            address: "Miramar Beach Road, Goa"
        },
        {
            name: "Goa Accessible Retreat",
            accessibility: "Wheelchair-friendly rooms and pools",
            price: "₹7,500/night",
            contact: "9812233445",
            address: "Near Miramar Beach, Goa"
        }
    ]

};
// Retrieve selected destination from localStorage
const selectedDestination = JSON.parse(localStorage.getItem("selectedDestination"));
if (!selectedDestination) {
    alert("No destination selected. Redirecting to details page.");
    window.location.href = "details.html";
}

// Display the selected destination
document.getElementById("selectedPlace").textContent = `Rooms Available Near ${selectedDestination.name}`;

// Populate the room list
const roomList = document.getElementById("room-list");
const rooms = roomData[selectedDestination.name] || [];
let selectedRoom = null;

if (rooms.length > 0) {
    rooms.forEach((room, index) => {
        const roomElement = document.createElement("div");
        roomElement.classList.add("room-option");

        roomElement.innerHTML = `
            <h3>${room.name}</h3>
            <p><strong>Accessibility:</strong> ${room.accessibility}</p>
            <p><strong>Price:</strong> ${room.price}</p>
            <p><strong>Contact:</strong> ${room.contact}</p>
            <p><strong>Address:</strong> ${room.address}</p>
        `;

        // Add event listener to select the room
        roomElement.addEventListener("click", () => {
            // Remove "selected" class from all rooms
            document.querySelectorAll(".room-option").forEach(el => el.classList.remove("selected"));

            // Add "selected" class to the clicked room
            roomElement.classList.add("selected");

            // Set the selected room
            selectedRoom = room;
            document.getElementById("room_name").value = room.name; // Set the hidden input value
        });

        roomList.appendChild(roomElement);
    });
} else {
    roomList.innerHTML = "<p>No accessible rooms available for this location.</p>";
}





document.addEventListener("DOMContentLoaded", () => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
        document.getElementById("user_id").value = userId;
    }
});





// Handle form submission
document.getElementById("submitBooking").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    const bookingDate = document.getElementById("booking_date").value;
    const persons = document.getElementById("persons").value;

    // Validate input
    if (!selectedRoom) {
        alert("Please select a room before booking.");
        return;
    }

    if (!bookingDate || persons < 1) {
        alert("Please select a valid booking date and number of persons.");
        return;
    }

    // Display success message
    alert(`Room "${selectedRoom.name}" booked successfully for ${selectedDestination.name} on ${bookingDate} for ${persons} person(s).`);

    // Submit the form
    document.querySelector("form").submit();
    // Redirect to details.html page
    window.location.href = "details.html";

});
