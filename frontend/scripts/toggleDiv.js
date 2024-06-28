document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleSettings');
    var questionsSidebar = document.querySelector('.toggleFeatures');

    toggleButton.addEventListener('click', function() {
        // Toggle the 'open' class to show/hide the sidebar
        questionsSidebar.classList.toggle('open');
    });
});


document.getElementById('toggleToDo').addEventListener('click', function() {
    const div = document.getElementById('todo-container');
    div.classList.toggle('hidden');
});

document.getElementById('toggleCalendar').addEventListener('click', function() {
    const div = document.getElementById('calendar-container');
    div.classList.toggle('hidden');
});

document.getElementById('togglePomodoro').addEventListener('click', function() {
    const div = document.getElementById('pomodoro-container');
    div.classList.toggle('hidden');
});

document.getElementById('toggleChat').addEventListener('click', function() {
    const div = document.getElementById('chat-container');
    div.classList.toggle('hidden');
});