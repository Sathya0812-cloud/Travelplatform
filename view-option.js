 const transportData = {
        "Taj Mahal, Agra": {

            chennai: {
                bus: [
                    { name: "Chennai to Agra Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Chennai to Agra Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Howrah Mail", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            madurai: {
                bus: [
                    { name: "Madurai to Agra Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Deluxe Coach", time: "1:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Madurai to Agra Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Vaigai Express", time: "6:30 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            trichy: {
                bus: [
                    { name: "Trichy to Agra Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Comfort Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Trichy to Agra Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Cholan Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            coimbatore: {
                bus: [
                    { name: "Coimbatore to Agra Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Elite Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Coimbatore to Agra Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            erode: {
                bus: [
                    { name: "Erode to Agra Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Erode to Agra Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Bangalore Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            salem: {
                bus: [
                    { name: "Salem to Agra Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Super Luxury Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Salem to Agra Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Shatabdi Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            pondicherry: {
                bus: [
                    { name: "Pondicherry to Agra Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Beachside Express", time: "3:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Pondicherry to Agra Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Chennai Superfast", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            thanjavur: {
                bus: [
                    { name: "Tanjore to Agra Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Tourist Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Tanjore to Agra Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            kanyakumari: {
                bus: [
                    { name: "Kanyakumari to Agra Bus", time: "8:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Kanyakumari to Agra Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            }
        },
    "Qutub Minar, Delhi": {
    
            chennai: {
                bus: [
                    { name: "Chennai to Delhi Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Chennai to Delhi Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Howrah Mail", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            madurai: {
                bus: [
                    { name: "Madurai to Delhi Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹1000" },
                    { name: "Deluxe Coach", time: "1:30 PM", accessibility: "Ramp available", price: "₹1700" }
                ],
                train: [
                    { name: "Madurai to Delhi Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Vaigai Express", time: "6:30 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            trichy: {
                bus: [
                    { name: "Trichy to Delhi Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹1000" },
                    { name: "Comfort Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Trichy to Delhi Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Cholan Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            coimbatore: {
                bus: [
                    { name: "Coimbatore to Delhi Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹1000" },
                    { name: "Elite Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1700" }
                ],
                train: [
                    { name: "Coimbatore to Delhi Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            erode: {
                bus: [
                    { name: "Erode to Delhi Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Erode to Delhi Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Bangalore Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            salem: {
                bus: [
                    { name: "Salem to Delhi Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹1000" },
                    { name: "Super Luxury Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1700" }
                ],
                train: [
                    { name: "Salem to Delhi Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Shatabdi Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            pondicherry: {
                bus: [
                    { name: "Pondicherry to Delhi Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹1000" },
                    { name: "Beachside Express", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Pondicherry to Delhi Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Chennai Superfast", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            thanjavur: {
                bus: [
                    { name: "Tanjore to Delhi Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹1000" },
                    { name: "Tourist Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1700" }
                ],
                train: [
                    { name: "Tanjore to Delhi Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            kanyakumari: {
                bus: [
                    { name: "Kanyakumari to Delhi Bus", time: "8:30 AM", accessibility: "Wheelchair-accessible", price: "₹1000" },
                    { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1700" }
                ],
                train: [
                    { name: "Kanyakumari to Delhi Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            }
        },
        
        
        "Amber Fort, Jaipur": {
            chennai: {
                bus: [
                    { name: "Chennai to Jaipur Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Chennai to Jaipur Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                    { name: "Howrah Mail", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            madurai: {
                bus: [
                    { name: "Madurai to Jaipur Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Deluxe Coach", time: "1:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Madurai to Jaipur Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Vaigai Express", time: "6:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            trichy: {
                bus: [
                    { name: "Trichy to Jaipur Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Comfort Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Trichy to Jaipur Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Cholan Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            coimbatore: {
                bus: [
                    { name: "Coimbatore to Jaipur Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Elite Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Coimbatore to Jaipur Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            erode: {
                bus: [
                    { name: "Erode to Jaipur Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Express Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Erode to Jaipur Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                    { name: "Bangalore Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            salem: {
                bus: [
                    { name: "Salem to Jaipur Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Super Luxury Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Salem to Jaipur Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Shatabdi Express", time: "12:30 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            pondicherry: {
                bus: [
                    { name: "Pondicherry to Jaipur Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Beachside Express", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Pondicherry to Jaipur Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Chennai Superfast", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            thanjavur: {
                bus: [
                    { name: "Tanjore to Jaipur Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Tanjore to Jaipur Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            kanyakumari: {
                bus: [
                    { name: "Kanyakumari to Jaipur Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Kanyakumari to Jaipur Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            }
        },
        "Gateway of India, Mumbai": {
            chennai: {
                bus: [
                    { name: "Chennai to Mumbai Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Chennai to Mumbai Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Howrah Mail", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            madurai: {
                bus: [
                    { name: "Madurai to Mumbai Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Deluxe Coach", time: "1:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Madurai to Mumbai Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Vaigai Express", time: "5:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            trichy: {
                bus: [
                    { name: "Trichy to Mumbai Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Comfort Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Trichy to Mumbai Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Cholan Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            coimbatore: {
                bus: [
                    { name: "Coimbatore to Mumbai Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Elite Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Coimbatore to Mumbai Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            erode: {
                bus: [
                    { name: "Erode to Mumbai Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Express Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Erode to Mumbai Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                    { name: "Bangalore Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            salem: {
                bus: [
                    { name: "Salem to Mumbai Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Super Luxury Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Salem to Mumbai Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Shatabdi Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            pondicherry: {
                bus: [
                    { name: "Pondicherry to Mumbai Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Beachside Express", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Pondicherry to Mumbai Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Chennai Superfast", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            thanjavur: {
                bus: [
                    { name: "Tanjore to Mumbai Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Tanjore to Mumbai Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            kanyakumari: {
                bus: [
                    { name: "Kanyakumari to Mumbai Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Kanyakumari to Mumbai Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Nagercoil Express", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            }
        },
        "Lalbagh Botanical Garden, Bangalore": {
            chennai: {
                bus: [
                    { name: "Chennai to Bangalore Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                    { name: "Luxury Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1400" }
                ],
                train: [
                    { name: "Chennai to Bangalore Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                    { name: "Bangalore Mail", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            madurai: {
                bus: [
                    { name: "Madurai to Bangalore Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                    { name: "Deluxe Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1400" }
                ],
                train: [
                    { name: "Madurai to Bangalore Express", time: "7:15 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                    { name: "Vaigai Express", time: "5:30 PM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            trichy: {
                bus: [
                    { name: "Trichy to Bangalore Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                    { name: "Comfort Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1400" }
                ],
                train: [
                    { name: "Trichy to Bangalore Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                    { name: "Cholan Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            coimbatore: {
                bus: [
                    { name: "Coimbatore to Bangalore Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                    { name: "Elite Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1400" }
                ],
                train: [
                    { name: "Coimbatore to Bangalore Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                    { name: "Udhagamandalam Express", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            erode: {
                bus: [
                    { name: "Erode to Bangalore Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹800" },
                    { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1300" }
                ],
                train: [
                    { name: "Erode to Bangalore Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                    { name: "Bangalore Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1100" }
                ]
            },
            salem: {
                bus: [
                    { name: "Salem to Bangalore Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                    { name: "Super Luxury Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1400" }
                ],
                train: [
                    { name: "Salem to Bangalore Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                    { name: "Shatabdi Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            pondicherry: {
                bus: [
                    { name: "Pondicherry to Bangalore Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                    { name: "Beachside Express", time: "3:30 PM", accessibility: "Ramp available", price: "₹1400" }
                ],
                train: [
                    { name: "Pondicherry to Bangalore Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                    { name: "Chennai Superfast", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            thanjavur: {
                bus: [
                    { name: "Tanjore to Bangalore Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                    { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1400" }
                ],
                train: [
                    { name: "Tanjore to Bangalore Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                    { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            kanyakumari: {
                bus: [
                    { name: "Kanyakumari to Bangalore Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                    { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1400" }
                ],
                train: [
                    { name: "Kanyakumari to Bangalore Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                    { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            }
        },
        "Victoria Memorial, Kolkata": {
            chennai: {
                bus: [
                    { name: "Chennai to Kolkata Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹1000" },
                    { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Chennai to Kolkata Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Coromandel Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            },
            madurai: {
                bus: [
                    { name: "Madurai to Kolkata Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹1100" },
                    { name: "Deluxe Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Madurai to Kolkata Express", time: "7:15 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Vaigai Express", time: "5:00 PM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            },
            trichy: {
                bus: [
                    { name: "Trichy to Kolkata Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹1100" },
                    { name: "Comfort Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Trichy to Kolkata Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Cholan Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            },
            coimbatore: {
                bus: [
                    { name: "Coimbatore to Kolkata Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹1100" },
                    { name: "Elite Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Coimbatore to Kolkata Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Udhagamandalam Express", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            },
            erode: {
                bus: [
                    { name: "Erode to Kolkata Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹1100" },
                    { name: "Express Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Erode to Kolkata Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Bangalore Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            },
            salem: {
                bus: [
                    { name: "Salem to Kolkata Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹1100" },
                    { name: "Super Luxury Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Salem to Kolkata Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Shatabdi Express", time: "12:30 PM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            },
            pondicherry: {
                bus: [
                    { name: "Pondicherry to Kolkata Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹1100" },
                    { name: "Beachside Express", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Pondicherry to Kolkata Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Chennai Superfast", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            },
            thanjavur: {
                bus: [
                    { name: "Tanjore to Kolkata Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹1100" },
                    { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Tanjore to Kolkata Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            },
            kanyakumari: {
                bus: [
                    { name: "Kanyakumari to Kolkata Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹1100" },
                    { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Kanyakumari to Kolkata Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1200" },
                    { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1500" }
                ]
            }
        },
        "Alleppey Backwaters, Kerala": {
            chennai: {
                bus: [
                    { name: "Chennai to Alleppey Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Luxury Coach", time: "1:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Chennai to Alleppey Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Coromandel Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            },
            madurai: {
                bus: [
                    { name: "Madurai to Alleppey Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Deluxe Bus", time: "2:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Madurai to Alleppey Express", time: "6:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Vaigai Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            },
            trichy: {
                bus: [
                    { name: "Trichy to Alleppey Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Comfort Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Trichy to Alleppey Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Cholan Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            },
            coimbatore: {
                bus: [
                    { name: "Coimbatore to Alleppey Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Elite Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Coimbatore to Alleppey Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            },
            erode: {
                bus: [
                    { name: "Erode to Alleppey Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Express Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Erode to Alleppey Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Bangalore Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            },
            salem: {
                bus: [
                    { name: "Salem to Alleppey Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Super Luxury Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Salem to Alleppey Express", time: "6:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Shatabdi Express", time: "12:30 PM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            },
            pondicherry: {
                bus: [
                    { name: "Pondicherry to Alleppey Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Beachside Express", time: "3:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Pondicherry to Alleppey Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Chennai Superfast", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            },
            thanjavur: {
                bus: [
                    { name: "Tanjore to Alleppey Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Tourist Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Tanjore to Alleppey Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            },
            kanyakumari: {
                bus: [
                    { name: "Kanyakumari to Alleppey Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Kanyakumari to Alleppey Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
                ]
            }
        },
        "Red Fort, Delhi": {
            chennai: {
                bus: [
                    { name: "Chennai to Delhi Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Chennai to Delhi Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Howrah Mail", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            madurai: {
                bus: [
                    { name: "Madurai to Delhi Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Deluxe Coach", time: "1:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Madurai to Delhi Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Vaigai Express", time: "6:30 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            trichy: {
                bus: [
                    { name: "Trichy to Delhi Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Comfort Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Trichy to Delhi Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Cholan Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            coimbatore: {
                bus: [
                    { name: "Coimbatore to Delhi Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Elite Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Coimbatore to Delhi Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1100" },
                    { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            erode: {
                bus: [
                    { name: "Erode to Delhi Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Erode to Delhi Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Bangalore Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            salem: {
                bus: [
                    { name: "Salem to Delhi Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Super Luxury Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Salem to Delhi Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Shatabdi Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            pondicherry: {
                bus: [
                    { name: "Pondicherry to Delhi Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                    { name: "Beachside Express", time: "3:00 PM", accessibility: "Ramp available", price: "₹1500" }
                ],
                train: [
                    { name: "Pondicherry to Delhi Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Chennai Superfast", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            },
            thanjavur: {
                bus: [
                    { name: "Tanjore to Delhi Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Tourist Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Tanjore to Delhi Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
                ]
            },
            kanyakumari: {
                bus: [
                    { name: "Kanyakumari to Delhi Bus", time: "8:30 AM", accessibility: "Wheelchair-accessible", price: "₹950" },
                    { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
                ],
                train: [
                    { name: "Kanyakumari to Delhi Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1000" },
                    { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
                ]
            }
        },
        "City Palace, Udaipur": {
        chennai: {
            bus: [
                { name: "Chennai to Udaipur Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Luxury Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1,200" }
            ],
            train: [
                { name: "Chennai to Udaipur Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,000" },
                { name: "Chennai Superfast", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1,300" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Udaipur Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Deluxe Bus", time: "3:30 PM", accessibility: "Ramp available", price: "₹1,300" }
            ],
            train: [
                { name: "Madurai to Udaipur Express", time: "5:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,100" },
                { name: "Vaigai Express", time: "9:15 AM", accessibility: "Reserved seating for disabled", price: "₹1,400" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Udaipur Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Comfort Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1,300" }
            ],
            train: [
                { name: "Trichy to Udaipur Express", time: "6:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,100" },
                { name: "Cholan Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1,400" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Udaipur Bus", time: "7:15 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Elite Coach", time: "3:45 PM", accessibility: "Ramp available", price: "₹1,300" }
            ],
            train: [
                { name: "Coimbatore to Udaipur Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,100" },
                { name: "Udhagamandalam Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1,400" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Udaipur Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1,300" }
            ],
            train: [
                { name: "Erode to Udaipur Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,100" },
                { name: "Bangalore Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1,400" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Udaipur Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Super Luxury Coach", time: "3:15 PM", accessibility: "Ramp available", price: "₹1,300" }
            ],
            train: [
                { name: "Salem to Udaipur Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,100" },
                { name: "Shatabdi Express", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1,400" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Udaipur Bus", time: "7:45 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Beachside Express", time: "3:15 PM", accessibility: "Ramp available", price: "₹1,300" }
            ],
            train: [
                { name: "Pondicherry to Udaipur Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,100" },
                { name: "Chennai Superfast", time: "9:15 AM", accessibility: "Reserved seating for disabled", price: "₹1,400" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Udaipur Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1,300" }
            ],
            train: [
                { name: "Tanjore to Udaipur Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,100" },
                { name: "Kumbakonam Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1,400" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Udaipur Bus", time: "7:15 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1,300" }
            ],
            train: [
                { name: "Kanyakumari to Udaipur Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,100" },
                { name: "Nagercoil Express", time: "10:15 AM", accessibility: "Reserved seating for disabled", price: "₹1,400" }
            ]
        }
    },
    "Jaisalmer Fort, Jaisalmer": {
        chennai: {
            bus: [
                { name: "Chennai to Jaisalmer Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹1,200" },
                { name: "Luxury Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1,500" }
            ],
            train: [
                { name: "Chennai to Jaisalmer Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,300" },
                { name: "Chennai Superfast", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1,700" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Jaisalmer Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹1,300" },
                { name: "Deluxe Bus", time: "3:30 PM", accessibility: "Ramp available", price: "₹1,700" }
            ],
            train: [
                { name: "Madurai to Jaisalmer Express", time: "5:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,400" },
                { name: "Vaigai Express", time: "9:15 AM", accessibility: "Reserved seating for disabled", price: "₹1,800" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Jaisalmer Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹1,300" },
                { name: "Comfort Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1,700" }
            ],
            train: [
                { name: "Trichy to Jaisalmer Express", time: "6:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,400" },
                { name: "Cholan Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1,800" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Jaisalmer Bus", time: "7:15 AM", accessibility: "Wheelchair-accessible", price: "₹1,300" },
                { name: "Elite Coach", time: "3:45 PM", accessibility: "Ramp available", price: "₹1,700" }
            ],
            train: [
                { name: "Coimbatore to Jaisalmer Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,400" },
                { name: "Udhagamandalam Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1,800" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Jaisalmer Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹1,300" },
                { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1,700" }
            ],
            train: [
                { name: "Erode to Jaisalmer Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,400" },
                { name: "Bangalore Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1,800" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Jaisalmer Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹1,300" },
                { name: "Super Luxury Coach", time: "3:15 PM", accessibility: "Ramp available", price: "₹1,700" }
            ],
            train: [
                { name: "Salem to Jaisalmer Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,400" },
                { name: "Shatabdi Express", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1,800" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Jaisalmer Bus", time: "7:45 AM", accessibility: "Wheelchair-accessible", price: "₹1,300" },
                { name: "Beachside Express", time: "3:15 PM", accessibility: "Ramp available", price: "₹1,700" }
            ],
            train: [
                { name: "Pondicherry to Jaisalmer Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,400" },
                { name: "Chennai Superfast", time: "9:15 AM", accessibility: "Reserved seating for disabled", price: "₹1,800" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Jaisalmer Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹1,300" },
                { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1,700" }
            ],
            train: [
                { name: "Tanjore to Jaisalmer Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,400" },
                { name: "Kumbakonam Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1,800" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Jaisalmer Bus", time: "7:15 AM", accessibility: "Wheelchair-accessible", price: "₹1,300" },
                { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1,700" }
            ],
            train: [
                { name: "Kanyakumari to Jaisalmer Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1,400" },
                { name: "Nagercoil Express", time: "10:15 AM", accessibility: "Reserved seating for disabled", price: "₹1,800" }
            ]
        }
    },
    "Hawa Mahal, Jaipur": {
        chennai: {
            bus: [
                { name: "Chennai to Jaipur Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹800" },
                { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Chennai to Jaipur Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Marudhamalai Express", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Jaipur Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Deluxe Bus", time: "4:00 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Madurai to Jaipur Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Vaigai Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Jaipur Bus", time: "8:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Comfort Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Trichy to Jaipur Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Cholan Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Jaipur Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Elite Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Coimbatore to Jaipur Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Udhagamandalam Express", time: "12:30 PM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Jaipur Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Erode to Jaipur Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Bangalore Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Jaipur Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Super Luxury Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Salem to Jaipur Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Shatabdi Express", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Jaipur Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Beachside Express", time: "3:30 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Pondicherry to Jaipur Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Chennai Superfast", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Jaipur Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Tanjore to Jaipur Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Kumbakonam Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Jaipur Bus", time: "8:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Scenic Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Kanyakumari to Jaipur Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Nagercoil Express", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        }
    },
        "Charminar, Hyderabad": {
        chennai: {
            bus: [
                { name: "Chennai to Hyderabad Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹700" },
                { name: "Luxury Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Chennai to Hyderabad Express", time: "6:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Konkan Kanya Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1100" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Hyderabad Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Deluxe Bus", time: "4:00 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Madurai to Hyderabad Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Vaigai Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Hyderabad Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Comfort Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Trichy to Hyderabad Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Cholan Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Hyderabad Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Elite Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Coimbatore to Hyderabad Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Hyderabad Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Express Coach", time: "1:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Erode to Hyderabad Express", time: "7:15 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Bangalore Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Hyderabad Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Super Luxury Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Salem to Hyderabad Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Shatabdi Express", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Hyderabad Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Beachside Express", time: "3:00 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Pondicherry to Hyderabad Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Chennai Superfast", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Hyderabad Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Tanjore to Hyderabad Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Kumbakonam Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Hyderabad Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Kanyakumari to Hyderabad Express", time: "7:15 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Nagercoil Express", time: "10:45 AM", accessibility: "Reserved seating for disabled", price: "₹1200" }
            ]
        }
    },
    "Rishikesh, Uttarakhand": {
        chennai: {
            bus: [
                { name: "Chennai to Rishikesh Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Chennai to Haridwar Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Tamil Nadu Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Rishikesh Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Deluxe Bus", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Madurai to Haridwar Express", time: "7:15 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Vaigai Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Rishikesh Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Comfort Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Trichy to Haridwar Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Cholan Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Rishikesh Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Elite Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Coimbatore to Haridwar Express", time: "7:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Rishikesh Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Express Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Erode to Haridwar Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Bangalore Express", time: "9:45 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Rishikesh Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Super Luxury Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Salem to Haridwar Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Shatabdi Express", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Rishikesh Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Beachside Express", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Pondicherry to Haridwar Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Chennai Superfast", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Rishikesh Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Tanjore to Haridwar Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Kumbakonam Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Rishikesh Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹850" },
                { name: "Scenic Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Kanyakumari to Haridwar Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹900" },
                { name: "Nagercoil Express", time: "10:45 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        }
    },
       
    
       
        "Vivekananda Rock, Kanyakumari": {
        chennai: {
            bus: [
                { name: "Chennai to Kanyakumari Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Chennai to Kanyakumari Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Madurai Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Kanyakumari Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Deluxe Bus", time: "3:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Madurai to Kanyakumari Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Vaigai Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Kanyakumari Bus", time: "8:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Comfort Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Trichy to Kanyakumari Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Cholan Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Kanyakumari Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Elite Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Coimbatore to Kanyakumari Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Kanyakumari Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Erode to Kanyakumari Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Bangalore Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Kanyakumari Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Super Luxury Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Salem to Kanyakumari Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Shatabdi Express", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Kanyakumari Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Beachside Express", time: "3:00 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Pondicherry to Kanyakumari Express", time: "9:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Chennai Superfast", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Kanyakumari Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Tourist Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1300" }
            ],
            train: [
                { name: "Tanjore to Kanyakumari Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Vivekananda Rock Bus", time: "9:00 AM", accessibility: "Wheelchair-accessible", price: "₹700" },
                { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Kanyakumari to Vivekananda Rock Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        }
    },
    "Meenakshi Temple, Madurai": {
        chennai: {
            bus: [
                { name: "Chennai to Madurai Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹700" },
                { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Chennai to Madurai Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Coromandel Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Meenakshi Temple Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹700" },
                { name: "Deluxe Bus", time: "2:30 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Madurai to Meenakshi Temple Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹800" },
                { name: "Vaigai Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1000" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Madurai Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Comfort Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Trichy to Madurai Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Cholan Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1100" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Madurai Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Elite Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Coimbatore to Madurai Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1100" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Madurai Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Express Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Erode to Madurai Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Bangalore Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1100" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Madurai Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Super Luxury Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Salem to Madurai Express", time: "6:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Shatabdi Express", time: "12:30 PM", accessibility: "Reserved seating for disabled", price: "₹1100" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Madurai Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Beachside Express", time: "3:30 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Pondicherry to Madurai Express", time: "9:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Chennai Superfast", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1100" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Madurai Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Tourist Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Tanjore to Madurai Express", time: "8:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Kumbakonam Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1100" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Madurai Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹750" },
                { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1200" }
            ],
            train: [
                { name: "Kanyakumari to Madurai Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹850" },
                { name: "Nagercoil Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1100" }
            ]
        }
    },  
         "Shimla, Himachal Pradesh": {
        chennai: {
            bus: [
                { name: "Chennai to Shimla Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Luxury Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Chennai to Kalka Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Tamil Nadu Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Shimla Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Deluxe Bus", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Madurai to Kalka Express", time: "7:15 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Vaigai Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1400" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Shimla Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Comfort Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Trichy to Kalka Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Cholan Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Shimla Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Elite Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Coimbatore to Kalka Express", time: "7:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Udhagamandalam Express", time: "12:00 PM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Shimla Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Express Coach", time: "2:00 PM", accessibility: "Ramp available", price: "₹1500" }
            ],
            train: [
                { name: "Erode to Kalka Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Bangalore Express", time: "9:45 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Shimla Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Super Luxury Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Salem to Kalka Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Shatabdi Express", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Shimla Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Beachside Express", time: "3:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Pondicherry to Kalka Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Chennai Superfast", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Shimla Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Tanjore to Kalka Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Kumbakonam Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Shimla Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹900" },
                { name: "Scenic Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹1600" }
            ],
            train: [
                { name: "Kanyakumari to Kalka Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹950" },
                { name: "Nagercoil Express", time: "10:45 AM", accessibility: "Reserved seating for disabled", price: "₹1300" }
            ]
        }
    },
    "Kaziranga National Park, Assam": {
        chennai: {
            bus: [
                { name: "Chennai to Kaziranga Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Luxury Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Chennai to Guwahati Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Kolkata Express", time: "10:00 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Kaziranga Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Deluxe Bus", time: "4:00 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Madurai to Guwahati Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Vaigai Express", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Kaziranga Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Comfort Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Trichy to Guwahati Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Cholan Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Kaziranga Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Elite Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Coimbatore to Guwahati Express", time: "7:15 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Udhagamandalam Express", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Kaziranga Bus", time: "6:15 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Erode to Guwahati Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Bangalore Express", time: "9:15 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Kaziranga Bus", time: "6:45 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Super Luxury Coach", time: "3:00 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Salem to Guwahati Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Shatabdi Express", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Kaziranga Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Beachside Express", time: "3:00 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Pondicherry to Guwahati Express", time: "7:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Chennai Superfast", time: "11:00 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Kaziranga Bus", time: "7:15 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Tanjore to Guwahati Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Kumbakonam Express", time: "9:45 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Kaziranga Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹1200" },
                { name: "Scenic Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹2200" }
            ],
            train: [
                { name: "Kanyakumari to Guwahati Express", time: "8:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹1500" },
                { name: "Nagercoil Express", time: "10:45 AM", accessibility: "Reserved seating for disabled", price: "₹1800" }
            ]
        }
    },
    "Mahabalipuram, Tamil Nadu": {
        chennai: {
            bus: [
                { name: "Chennai to Mahabalipuram Bus", time: "8:00 AM", accessibility: "Wheelchair-accessible", price: "₹150" },
                { name: "Luxury Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹300" }
            ],
            train: [
                { name: "Chennai to Mahabalipuram Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹200" },
                { name: "Chennai Superfast", time: "9:30 AM", accessibility: "Reserved seating for disabled", price: "₹250" }
            ]
        },
        madurai: {
            bus: [
                { name: "Madurai to Mahabalipuram Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹350" },
                { name: "Deluxe Bus", time: "3:30 PM", accessibility: "Ramp available", price: "₹450" }
            ],
            train: [
                { name: "Madurai to Mahabalipuram Express", time: "5:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹400" },
                { name: "Vaigai Express", time: "9:15 AM", accessibility: "Reserved seating for disabled", price: "₹500" }
            ]
        },
        trichy: {
            bus: [
                { name: "Trichy to Mahabalipuram Bus", time: "6:30 AM", accessibility: "Wheelchair-accessible", price: "₹350" },
                { name: "Comfort Coach", time: "4:00 PM", accessibility: "Ramp available", price: "₹450" }
            ],
            train: [
                { name: "Trichy to Mahabalipuram Express", time: "6:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹400" },
                { name: "Cholan Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹500" }
            ]
        },
        coimbatore: {
            bus: [
                { name: "Coimbatore to Mahabalipuram Bus", time: "7:15 AM", accessibility: "Wheelchair-accessible", price: "₹350" },
                { name: "Elite Coach", time: "3:45 PM", accessibility: "Ramp available", price: "₹450" }
            ],
            train: [
                { name: "Coimbatore to Mahabalipuram Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹400" },
                { name: "Udhagamandalam Express", time: "10:30 AM", accessibility: "Reserved seating for disabled", price: "₹500" }
            ]
        },
        erode: {
            bus: [
                { name: "Erode to Mahabalipuram Bus", time: "6:00 AM", accessibility: "Wheelchair-accessible", price: "₹350" },
                { name: "Express Coach", time: "2:30 PM", accessibility: "Ramp available", price: "₹450" }
            ],
            train: [
                { name: "Erode to Mahabalipuram Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹400" },
                { name: "Bangalore Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹500" }
            ]
        },
        salem: {
            bus: [
                { name: "Salem to Mahabalipuram Bus", time: "7:30 AM", accessibility: "Wheelchair-accessible", price: "₹350" },
                { name: "Super Luxury Coach", time: "3:15 PM", accessibility: "Ramp available", price: "₹450" }
            ],
            train: [
                { name: "Salem to Mahabalipuram Express", time: "7:00 AM", accessibility: "Wheelchair-friendly coaches", price: "₹400" },
                { name: "Shatabdi Express", time: "11:30 AM", accessibility: "Reserved seating for disabled", price: "₹500" }
            ]
        },
        pondicherry: {
            bus: [
                { name: "Pondicherry to Mahabalipuram Bus", time: "7:45 AM", accessibility: "Wheelchair-accessible", price: "₹350" },
                { name: "Beachside Express", time: "3:15 PM", accessibility: "Ramp available", price: "₹450" }
            ],
            train: [
                { name: "Pondicherry to Mahabalipuram Express", time: "7:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹400" },
                { name: "Chennai Superfast", time: "9:15 AM", accessibility: "Reserved seating for disabled", price: "₹500" }
            ]
        },
        thanjavur: {
            bus: [
                { name: "Tanjore to Mahabalipuram Bus", time: "7:00 AM", accessibility: "Wheelchair-accessible", price: "₹350" },
                { name: "Tourist Coach", time: "4:30 PM", accessibility: "Ramp available", price: "₹450" }
            ],
            train: [
                { name: "Tanjore to Mahabalipuram Express", time: "6:30 AM", accessibility: "Wheelchair-friendly coaches", price: "₹400" },
                { name: "Kumbakonam Express", time: "9:00 AM", accessibility: "Reserved seating for disabled", price: "₹500" }
            ]
        },
        kanyakumari: {
            bus: [
                { name: "Kanyakumari to Mahabalipuram Bus", time: "7:15 AM", accessibility: "Wheelchair-accessible", price: "₹350" },
                { name: "Scenic Coach", time: "3:30 PM", accessibility: "Ramp available", price: "₹450" }
            ],
            train: [
                { name: "Kanyakumari to Mahabalipuram Express", time: "6:45 AM", accessibility: "Wheelchair-friendly coaches", price: "₹400" },
                { name: "Nagercoil Express", time: "10:15 AM", accessibility: "Reserved seating for disabled", price: "₹500" }
            ]
        }
    },
    "Diu Fort, Diu": {
        "chennai": {
            "bus": [
                { "name": "Chennai to Diu Bus", "time": "8:00 AM", "accessibility": "Wheelchair-accessible", "price": "₹500" },
                { "name": "Luxury Coach", "time": "2:30 PM", "accessibility": "Ramp available", "price": "₹800" }
            ],
            "train": [
                { "name": "Chennai to Diu Express", "time": "7:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹600" },
                { "name": "Chennai Superfast", "time": "9:30 AM", "accessibility": "Reserved seating for disabled", "price": "₹750" }
            ]
        },
        "madurai": {
            "bus": [
                { "name": "Madurai to Diu Bus", "time": "7:00 AM", "accessibility": "Wheelchair-accessible", "price": "₹600" },
                { "name": "Deluxe Bus", "time": "3:30 PM", "accessibility": "Ramp available", "price": "₹850" }
            ],
            "train": [
                { "name": "Madurai to Diu Express", "time": "5:45 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹700" },
                { "name": "Vaigai Express", "time": "9:15 AM", "accessibility": "Reserved seating for disabled", "price": "₹900" }
            ]
        },
        "trichy": {
            "bus": [
                { "name": "Trichy to Diu Bus", "time": "6:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹650" },
                { "name": "Comfort Coach", "time": "4:00 PM", "accessibility": "Ramp available", "price": "₹900" }
            ],
            "train": [
                { "name": "Trichy to Diu Express", "time": "6:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹700" },
                { "name": "Cholan Express", "time": "9:00 AM", "accessibility": "Reserved seating for disabled", "price": "₹900" }
            ]
        },
        "coimbatore": {
            "bus": [
                { "name": "Coimbatore to Diu Bus", "time": "7:15 AM", "accessibility": "Wheelchair-accessible", "price": "₹650" },
                { "name": "Elite Coach", "time": "3:45 PM", "accessibility": "Ramp available", "price": "₹900" }
            ],
            "train": [
                { "name": "Coimbatore to Diu Express", "time": "7:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹700" },
                { "name": "Udhagamandalam Express", "time": "10:30 AM", "accessibility": "Reserved seating for disabled", "price": "₹900" }
            ]
        },
        "erode": {
            "bus": [
                { "name": "Erode to Diu Bus", "time": "6:00 AM", "accessibility": "Wheelchair-accessible", "price": "₹650" },
                { "name": "Express Coach", "time": "2:30 PM", "accessibility": "Ramp available", "price": "₹900" }
            ],
            "train": [
                { "name": "Erode to Diu Express", "time": "6:30 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹700" },
                { "name": "Bangalore Express", "time": "9:00 AM", "accessibility": "Reserved seating for disabled", "price": "₹900" }
            ]
        },
        "salem": {
            "bus": [
                { "name": "Salem to Diu Bus", "time": "7:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹650" },
                { "name": "Super Luxury Coach", "time": "3:15 PM", "accessibility": "Ramp available", "price": "₹900" }
            ],
            "train": [
                { "name": "Salem to Diu Express", "time": "7:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹700" },
                { "name": "Shatabdi Express", "time": "11:30 AM", "accessibility": "Reserved seating for disabled", "price": "₹900" }
            ]
        },
        "pondicherry": {
            "bus": [
                { "name": "Pondicherry to Diu Bus", "time": "7:45 AM", "accessibility": "Wheelchair-accessible", "price": "₹650" },
                { "name": "Beachside Express", "time": "3:15 PM", "accessibility": "Ramp available", "price": "₹900" }
            ],
            "train": [
                { "name": "Pondicherry to Diu Express", "time": "7:30 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹700" },
                { "name": "Chennai Superfast", "time": "9:15 AM", "accessibility": "Reserved seating for disabled", "price": "₹900" }
            ]
        },
        "tanjore": {
            "bus": [
                { "name": "Thanjavur to Diu Bus", "time": "7:00 AM", "accessibility": "Wheelchair-accessible", "price": "₹650" },
                { "name": "Tourist Coach", "time": "4:30 PM", "accessibility": "Ramp available", "price": "₹900" }
            ],
            "train": [
                { "name": "Thanjavur to Diu Express", "time": "6:30 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹700" },
                { "name": "Kumbakonam Express", "time": "9:00 AM", "accessibility": "Reserved seating for disabled", "price": "₹900" }
            ]
        },
        "kanyakumari": {
            "bus": [
                { "name": "Kanyakumari to Diu Bus", "time": "7:15 AM", "accessibility": "Wheelchair-accessible", "price": "₹650" },
                { "name": "Scenic Coach", "time": "3:30 PM", "accessibility": "Ramp available", "price": "₹900" }
            ],
            "train": [
                { "name": "Kanyakumari to Diu Express", "time": "6:45 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹700" },
                { "name": "Nagercoil Express", "time": "10:15 AM", "accessibility": "Reserved seating for disabled", "price": "₹900" }
            ]
        }
    
    },

        "Miramar Beach, Goa": {
           "chennai": {
            "bus": [
                { "name": "Chennai to Goa Bus", "time": "8:00 AM", "accessibility": "Wheelchair-accessible", "price": "₹650" },
                { "name": "Luxury Coach", "time": "2:00 PM", "accessibility": "Ramp available", "price": "₹1200" }
            ],
            "train": [
                { "name": "Chennai to Goa Express", "time": "7:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹750" },
                { "name": "Konkan Kanya Express", "time": "10:30 AM", "accessibility": "Reserved seating for disabled", "price": "₹1100" }
            ]
        },
        "madurai": {
            "bus": [
                { "name": "Madurai to Goa Bus", "time": "7:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹700" },
                { "name": "Luxury Bus", "time": "3:30 PM", "accessibility": "Ramp available", "price": "₹1300" }
            ],
            "train": [
                { "name": "Madurai to Goa Express", "time": "5:45 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Vaigai Express", "time": "9:15 AM", "accessibility": "Reserved seating for disabled", "price": "₹1200" }
            ]
        },
        "trichy": {
            "bus": [
                { "name": "Trichy to Goa Bus", "time": "8:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹750" },
                { "name": "Comfort Coach", "time": "2:00 PM", "accessibility": "Ramp available", "price": "₹1300" }
            ],
            "train": [
                { "name": "Trichy to Goa Express", "time": "6:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Cholan Express", "time": "9:00 AM", "accessibility": "Reserved seating for disabled", "price": "₹1200" }
            ]
        },
        "coimbatore": {
            "bus": [
                { "name": "Coimbatore to Goa Bus", "time": "8:00 AM", "accessibility": "Wheelchair-accessible", "price": "₹750" },
                { "name": "Elite Coach", "time": "3:30 PM", "accessibility": "Ramp available", "price": "₹1300" }
            ],
            "train": [
                { "name": "Coimbatore to Goa Express", "time": "7:30 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Udhagamandalam Express", "time": "12:00 PM", "accessibility": "Reserved seating for disabled", "price": "₹1200" }
            ]
        },
        "erode": {
            "bus": [
                { "name": "Erode to Goa Bus", "time": "6:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹700" },
                { "name": "Express Coach", "time": "1:30 PM", "accessibility": "Ramp available", "price": "₹1200" }
            ],
            "train": [
                { "name": "Erode to Goa Express", "time": "6:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Bangalore Express", "time": "10:30 AM", "accessibility": "Reserved seating for disabled", "price": "₹1100" }
            ]
         },
         "salem": {
            "bus": [
                { "name": "Salem to Goa Bus", "time": "7:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹750" },
                { "name": "Super Luxury Coach", "time": "2:30 PM", "accessibility": "Ramp available", "price": "₹1300" }
            ],
            "train": [
                { "name": "Salem to Goa Express", "time": "6:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Shatabdi Express", "time": "11:30 AM", "accessibility": "Reserved seating for disabled", "price": "₹1200" }
            ]
        },
        "pondicherry": {
            "bus": [
                { "name": "Pondicherry to Goa Bus", "time": "8:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹700" },
                { "name": "Beachside Express", "time": "3:00 PM", "accessibility": "Ramp available", "price": "₹1300" }
            ],
            "train": [
                { "name": "Pondicherry to Goa Express", "time": "7:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Chennai Superfast", "time": "11:00 AM", "accessibility": "Reserved seating for disabled", "price": "₹1200" }
            ]
        },
        "tanjore": {
            "bus": [
                { "name": "Tanjore to Goa Bus", "time": "7:15 AM", "accessibility": "Wheelchair-accessible", "price": "₹750" },
                { "name": "Tourist Coach", "time": "4:00 PM", "accessibility": "Ramp available", "price": "₹1300" }
            ],
            "train": [
                { "name": "Tanjore to Goa Express", "time": "6:30 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Kumbakonam Express", "time": "9:30 AM", "accessibility": "Reserved seating for disabled", "price": "₹1200" }
            ]
        },
        "salem": {
            "bus": [
                { "name": "Salem to Goa Bus", "time": "7:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹750" },
                { "name": "Super Luxury Coach", "time": "2:30 PM", "accessibility": "Ramp available", "price": "₹1300" }
            ],
            "train": [
                { "name": "Salem to Goa Express", "time": "6:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Shatabdi Express", "time": "11:30 AM", "accessibility": "Reserved seating for disabled", "price": "₹1200" }
            ]
        },
        "pondicherry": {
            "bus": [
                { "name": "Pondicherry to Goa Bus", "time": "8:30 AM", "accessibility": "Wheelchair-accessible", "price": "₹700" },
                { "name": "Beachside Express", "time": "3:00 PM", "accessibility": "Ramp available", "price": "₹1300" }
            ],
            "train": [
                { "name": "Pondicherry to Goa Express", "time": "7:00 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹800" },
                { "name": "Chennai Superfast", "time": "11:00 AM", "accessibility": "Reserved seating for disabled", "price": "₹1200" }
            ]
        },
        "kanyakumari": {
    "bus": [
        { "name": "Kanyakumari to Goa Bus", "time": "6:00 AM", "accessibility": "Wheelchair-accessible", "price": "₹800" },
        { "name": "Comfort Express", "time": "3:30 PM", "accessibility": "Ramp available", "price": "₹1400" }
    ],
    "train": [
        { "name": "Kanyakumari Express", "time": "5:45 AM", "accessibility": "Wheelchair-friendly coaches", "price": "₹850" },
        { "name": "Cape Goa Special", "time": "10:15 AM", "accessibility": "Reserved seating for disabled", "price": "₹1250" }
    ]
    }
}
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        const transportChoice = JSON.parse(localStorage.getItem("transportChoice"));
        const selectedPlace = JSON.parse(localStorage.getItem("selectedDestination"))?.name;
        const userLocation = transportChoice?.userLocation;
    
        if (!selectedPlace || !transportChoice || !userLocation) {
            alert("Missing data. Redirecting to transport page.");
            window.location.href = "transport.html";
            return;
        }
    
        document.getElementById("selectedPlace").textContent = `Available options from ${userLocation} to ${selectedPlace}`;
    
        // **Fix: Ensure transport data is always retrieved correctly**
        const transportOptions = transportData[selectedPlace] && transportData[selectedPlace][userLocation] 
            ? transportData[selectedPlace][userLocation][transportChoice.transportType] || []
            : [];
    
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = ""; // Clear previous data
    
        if (transportOptions.length > 0) {
            transportOptions.forEach(option => {
                const div = document.createElement("div");
                div.classList.add("transport-option");
                div.innerHTML = `
                    <h3>${option.name}</h3>
                    <p>Time: ${option.time}</p>
                    <p>Accessibility: ${option.accessibility}</p>
                    <p>Price: ${option.price}</p>
                `;
                div.addEventListener("click", () => {
                    document.querySelectorAll(".transport-option").forEach(el => el.classList.remove("selected"));
                    div.classList.add("selected");
                });
    
                optionsContainer.appendChild(div);
            });
        } else {
            optionsContainer.textContent = "No options available.";
        }
    });
    
    document.getElementById("submitButton").addEventListener("click", () => {
        const transportChoice = JSON.parse(localStorage.getItem("transportChoice"));
        const selectedOption = document.querySelector(".transport-option.selected");
    
        if (!selectedOption) {
            alert("Please select a transport option.");
            return;
        }
    
        const user_id = localStorage.getItem("user_id");
        const transport_type = transportChoice.transportType;
        const travel_date = transportChoice.date;
        const location = transportChoice.userLocation;
        const children = transportChoice.children;
        const adults = transportChoice.adults;
        const transport_name = selectedOption.querySelector("h3").textContent;
    
        const formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("transport_type", transport_type);
        formData.append("travel_date", travel_date);
        formData.append("location", location);
        formData.append("children", children);
        formData.append("adults", adults);
        formData.append("transport_name", transport_name);
    
        fetch("transport.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.includes("Booking Success")) {
                alert("Booked Successfully");
                window.location.href = "details.html";
            } else {
                alert("Error: " + data);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
    });
    