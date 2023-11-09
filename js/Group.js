// Sample group data (you can replace this with your actual group data)
const groupData = [
    {
        name: "Team Alpha",
        description: "Competitive airsoft team specializing in milsim games.",
        members: 15
    },
    {
        name: "Casual Airsoft Crew",
        description: "Relaxed group for casual airsoft players of all levels.",
        members: 10
    },
    // Add more group data here...
];

const groupSearchForm = document.getElementById("group-search-form");
const groupList = document.getElementById("group-list");

function displayGroupResults(results) {
    groupList.innerHTML = ""; // Clear existing results

    results.forEach(group => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${group.name}</h3>
            <p>${group.description}</p>
            <p><strong>Members:</strong> ${group.members}</p>
            <button class="join-button" data-group="${group.name}">Join Group</button>
        `;
        groupList.appendChild(listItem);
    });
}

function displayInitialGroups() {
    const initialGroups = groupData.slice(0, 10); // Display the first 10 groups
    displayGroupResults(initialGroups);
}

// Display the initial groups on document load
document.onload(displayInitialGroups());

groupSearchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchQuery = document.getElementById("group-name").value.toLowerCase();
    
    const searchResults = groupData.filter(group => group.name.toLowerCase().includes(searchQuery));
    displayGroupResults(searchResults);
});

groupList.addEventListener("click", function (e) {
    if (e.target.classList.contains("join-button")) {
        const groupName = e.target.getAttribute("data-group");
        // Handle group joining logic here
        alert(`You have joined the ${groupName} group.`);
    }
});