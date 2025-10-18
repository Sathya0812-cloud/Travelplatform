document.addEventListener("DOMContentLoaded", () => {
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

    const assistantListContainer = document.getElementById("assistant-list");

    // Ensure the container exists
    if (assistantListContainer) {
        Object.keys(contentData).forEach(assistantName => {
            const assistant = contentData[assistantName];

            const div = document.createElement("div");
            div.classList.add("assistant-option");
            div.setAttribute("data-name", assistantName); // Set assistant name in the div
            div.innerHTML = `
                <h3 class="assistant-name">${assistantName}</h3>
                <p><strong>Specialization:</strong> ${assistant.specialization}</p>
                <p><strong>Price:</strong> ${assistant.price}</p>
            `;
            assistantListContainer.appendChild(div);
        });

        // Add click event to each assistant option
        document.querySelectorAll(".assistant-option").forEach(option => {
            option.addEventListener("click", (event) => {
                const selectedAssistant = event.currentTarget.getAttribute("data-name");

                // Remove highlight from all options
                document.querySelectorAll(".assistant-option").forEach(opt => {
                    opt.style.border = "2px solid transparent"; // Reset border
                });

                // Highlight selected assistant
                event.currentTarget.style.border = "2px solid lightgreen";

                // Store selection
                document.getElementById("assistant_name").value = selectedAssistant;
                localStorage.setItem("selectedAssistant", selectedAssistant);
                alert(`Selected Assistant: ${selectedAssistant}`);
            });
        });
    } else {
        console.error("Error: Assistant list container not found.");
    }

    // Handle form submission for booking
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission

            const assistantName = document.getElementById("assistant_name").value;
            if (!assistantName) {
                alert("Please select an assistant.");
                return;
            }

            const user_id = document.getElementById("user_id").value;
            if (!user_id) {
                alert("User ID is missing.");
                return;
            }

            const formData = new FormData();
            formData.append("user_id", user_id);
            formData.append("assistant_name", assistantName);

            fetch("menu.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                if (data.includes("Booking successful")) {
                    alert("Booked Successfully!");
                    window.location.href = "details.html"; // Redirect to details page
                } else {
                    alert("Error: " + data);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
        });
    } else {
        console.error("Error: Booking form not found.");
    }
});
