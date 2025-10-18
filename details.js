const destinations = [
    {
        name: "Taj Mahal, Agra",
        img: "tajmahal.jpg",
        desc: "Accessible pathways and assistance available.",
        details: {
            season: "October to March",
            timings: "6:00 AM - 6:30 PM",
            ticketPrice: "₹50 (Indians), ₹1100 (Foreigners)"
        }
    },
    {
        name: "Qutub Minar, Delhi",
        img: "qutub minar.jpg",
        desc: "Ramps and guided tours for disabled visitors.",
        details: {
            season: "October to February",
            timings: "10:00 AM - 5:00 PM",
            ticketPrice: "₹40 (Indians), ₹600 (Foreigners)"
        }
    },
    {
        name: "Amber Fort, Jaipur",
        img: "amber fort.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "8:00 AM - 5:30 PM",
            ticketPrice: "₹25 (Indians), ₹200 (Foreigners)"
        }
    },
    {
        name: "Gateway of India, Mumbai",
        img: "gateway of india.jpg",
        desc: "Accessible pathways and ferry services.",
        details: {
            season: "November to February",
            timings: "24 hours",
            ticketPrice: "Free"
        }
    },
    {
        name: "Lalbagh Botanical Garden, Bangalore",
        img: "lalbagh botanical.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "November to March",
            timings: "6:00 AM - 7:00 PM",
            ticketPrice: "₹20 (Indians), ₹200 (Foreigners)"
        }
    },
    {
        name: "Victoria Memorial, Kolkata",
        img: "victoria memorial.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "10:00 AM - 5:00 PM",
            ticketPrice: "₹30 (Indians), ₹500 (Foreigners)"
        }
    },
    {
        name: "Alleppey Backwaters, Kerala",
        img: "allepey.jpg",
        desc: "Accessible houseboats and guided tours.",
        details: {
            season: "November to February",
            timings: "24 hours",
            ticketPrice: "Varies"
        }
    },
    {
        name: "Red Fort, Delhi",
        img: "red fort.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "9:30 AM - 4:30 PM",
            ticketPrice: "₹35 (Indians), ₹500 (Foreigners)"
        }
    },
    {
        name: "City Palace, Udaipur",
        img: "city palace.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "9:30 AM - 5:30 PM",
            ticketPrice: "₹30 (Indians), ₹300 (Foreigners)"
        }
    },
    {
        name: "Jaisalmer Fort, Jaisalmer",
        img: "jaisalmer.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "9:00 AM - 6:00 PM",
            ticketPrice: "₹50 (Indians), ₹250 (Foreigners)"
        }
    },
    {
        name: "Hawa Mahal, Jaipur",
        img: "hawamahal.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "9:00 AM - 4:30 PM",
            ticketPrice: "₹50 (Indians), ₹200 (Foreigners)"
        }
    },
    {
        name: "Charminar, Hyderabad",
        img: "charminar.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "9:30 AM - 5:30 PM",
            ticketPrice: "₹25 (Indians), ₹300 (Foreigners)"
        }
    },
    {
        name: "Rishikesh, Uttarakhand",
        img: "rishikesh.jpg",
        desc: "Accessible pathways and adventure activities.",
        details: {
            season: "September to November",
            timings: "24 hours",
            ticketPrice: "Free"
        }
    },
    {
        name: "Vivekananda Rock, Kanyakumari",
        img: "vivekanandha.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "8:00 AM - 4:00 PM",
            ticketPrice: "₹20 (Indians), ₹200 (Foreigners)"
        }
    },
    {
        name: "Meenakshi Temple, Madurai",
        img: "meenakshi.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
            ticketPrice: "Free"
        }
    },
    {
        name: "Shimla, Himachal Pradesh",
        img: "shimla.jpg",
        desc: "Accessible pathways and guided tours.",
        details: {
            season: "March to June",
            timings: "24 hours",
            ticketPrice: "Free"
        }
    },
    {
        name: "Kaziranga National Park, Assam",
        img: "kaziranga.jpg",
        desc: "Accessible pathways and guided tours.",
        details: {
            season: "November to April",
            timings: "7:30 AM - 4:00 PM",
            ticketPrice: "₹100 (Indians), ₹650 (Foreigners)"
        }
    },
    {
        name: "Mahabalipuram, Tamil Nadu",
        img: "mahabalipuram.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "November to February",
            timings: "6:00 AM - 6:00 PM",
            ticketPrice: "₹40 (Indians), ₹600 (Foreigners)"
        }
    },
    {
        name: "Diu Fort, Diu",
        img: "diu fort.jpg",
        desc: "Wheelchair-accessible pathways and guided tours.",
        details: {
            season: "October to March",
            timings: "8:00 AM - 6:00 PM",
            ticketPrice: "Free"
        }
    },
    {
        name: "Miramar Beach, Goa",
        img: "miramar beach.jpg",
        desc: "Accessible pathways and beach activities.",
        details: {
            season: "November to February",
            timings: "24 hours",
            ticketPrice: "Free"
        }
    }
];

const exploreContainer = document.getElementById("explore-container");
const detailsModal = document.getElementById("detailsModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const modalInfo = document.getElementById("modal-info");
const bookTicketsButton = document.getElementById("bookTicketsButton");


// Function to render destination cards
destinations.forEach((destination, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${destination.img}" alt="${destination.name}">
        <h3>${destination.name}</h3>
        <p>${destination.desc}</p>
        <button onclick="openDetails(${index})">View Details</button>
    `;

    exploreContainer.appendChild(card);
});


// Function to open modal with details
function openDetails(index) {
    const destination = destinations[index];

    // Set modal content
    modalTitle.textContent = destination.name;
    modalImg.src = destination.img;
    modalDesc.textContent = destination.desc;
    modalInfo.innerHTML = `
        <li><strong>Best Season:</strong> ${destination.details.season}</li>
        <li><strong>Timings:</strong> ${destination.details.timings}</li>
        <li><strong>Ticket Price:</strong> ${destination.details.ticketPrice}</li>
    `;

    // Save selected destination to localStorage
    localStorage.setItem("selectedDestination", JSON.stringify(destination));

    detailsModal.style.display = "flex";
}

// Close modal
closeModal.addEventListener("click", () => {
    detailsModal.style.display = "none";
});

// Event listener for "Book Tickets" button
bookTicketsButton.addEventListener("click", () => {
    window.location.href = "transport.html";
});