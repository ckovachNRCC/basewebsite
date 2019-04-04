$(document).ready(function () {
    console.log("is working");

    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => render(json))
});

function render(data) {
    console.log("Render Function");
    console.log(data);

    $("#output").empty();
    $("#output").append("<h2>Task List</h2>");

    $("#output").append('<ul id="tasklist"></ul>');

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        $("#tasklist").append('<li class="listitem"><span class="user">User: ' 
        + data[i].userId + ' </span><span class="task">Task: ' + data[i].title
        + '</span><span class="completed">Completed: ' + data[i].completed + '<span></li>');
    }

    // $("#output").append("</ul>");
    $("#output").append("<p>End List</p>");

    // $("#output").append(JSON.stringify(data));
}