// Initialize the clock and task input, and load saved tasks when the page loads
window.onload = () => {
    initializeClock();
    initializeTaskInput();
    loadTasks();
};

// Function to initialize clock, greeting and date every second
function initializeClock() {
    updateClock();
    updateGreeting();
    updateDate();
    setInterval(() => {
        updateClock();
        updateGreeting();
        updateDate();
    }, 1000);
}

/* ======= GREETING, DATE, AND CLOCK FUNCTIONALITY ======= */
// Function to update greeting depending on time of day
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();

    let greeting;
    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingElement.textContent = greeting;
}

function updateDate() {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    const dateElement = document.getElementById('date');
    const now = new Date; 
    const month = months[now.getMonth()];
    const day = now.getDate(); 
    const dayOfWeek = daysOfWeek[now.getDay()];
    const year = now.getFullYear();

    const getDaySuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const daySuffix = getDaySuffix(day);
    dateElement.textContent = `${dayOfWeek}, ${month} ${day}${daySuffix}, ${year}`;
}

// Function to update clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Convert to 12-hour format
    const isPM = hours >= 12;
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Remove leading zero from hours
    const formattedHours = hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const ampm = isPM ? 'PM' : 'AM';
    
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}