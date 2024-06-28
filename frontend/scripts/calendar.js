document.addEventListener('DOMContentLoaded', () => {
    // FullCalendar Initialization
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
    });
    calendar.render();

    // Event Form Submission
    const eventForm = document.getElementById('event-form');
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('event-title').value;
        const start = document.getElementById('event-start').value;
        const end = document.getElementById('event-end').value;

        if (title && start) {
            calendar.addEvent({
                title: title,
                start: start,
                end: end || start
            });
            eventForm.reset();
        } else {
            alert('Please fill in the required fields.');
        }
    });
});
