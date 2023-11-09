
// Sample event data (you can replace this with your actual event data)
let eventData = [
    {
        title: "Airsoft Tournament",
        date: "2023-12-15",
        location: "City Park",
        description: "Join us for an exciting airsoft tournament in the City Park. Bring your A-game and gear!",
        price: 20,
        type: "speedsoft"
    },
    {
        title: "Night Game in the Woods",
        date: "2024-01-20",
        location: "Woods near Smith Lake",
        description: "Experience the thrill of airsoft under the stars. Night vision gear recommended.",
        price: 10,
        type: "milsim"
    }
];

function createEventListings() {
    const eventsContainer = document.getElementById("events");

    eventsContainer.innerHTML = ""; // Clear existing event listings

    eventData.forEach(event => {
        const eventItem = document.createElement("li");
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Price:</strong> $${event.price}</p>
            <p><strong>Type:</strong> ${event.type}</p>
            <p>${event.description}</p>
        `;
        eventsContainer.appendChild(eventItem);
    });
}

function addEvent(event) {
    eventData.push(event);
    createEventListings();
}

const eventForm = document.getElementById("event-form");

eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("event-title").value;
    const date = document.getElementById("event-date").value;
    const location = document.getElementById("event-location").value;
    const description = document.getElementById("event-description").value;
    const price = parseFloat(document.getElementById("event-price").value);
    const type = document.getElementById("event-type").value;

    const newEvent = {
        title,
        date,
        location,
        description,
        price,
        type
    };

    addEvent(newEvent);

    // Reset the form
    eventForm.reset();
});
document.onload(createEventListings());