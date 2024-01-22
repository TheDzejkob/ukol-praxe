document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addEventBtn').addEventListener('click', function () {
        document.getElementById('event-form').style.display = 'block';
    });

    document.getElementById('saveEventBtn').addEventListener('click', function () {
        // Get the event details from the form
        var eventName = document.getElementById('eventName').value;
        var eventDescription = document.getElementById('eventDescription').value;
        var eventDeadline = document.getElementById('eventDeadline').value;

        // Create a new event item
        var eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = '<strong>' + eventName + '</strong><br>' +
                              'Description: ' + eventDescription + '<br>' +
                              'Deadline: ' + eventDeadline + '<br>' +
                              '<button class="delete-btn" onclick="deleteEvent(this)">Delete</button><hr>';

        // Append the new event item to the events container
        document.getElementById('events').appendChild(eventItem);

        // Reset the form and hide it
        document.getElementById('eventName').value = '';
        document.getElementById('eventDescription').value = '';
        document.getElementById('eventDeadline').value = '';
        document.getElementById('event-form').style.display = 'none';
    });

});
function deleteEvent(button) {
    // Get the parent element (event item) and remove it
    var eventItem = button.parentNode;
    eventItem.parentNode.removeChild(eventItem);
}
