$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBUa-VzL3bQBYa2on-PgY7Ablk4bhsHUhQ",
        authDomain: "time-sheet-10faa.firebaseapp.com",
        databaseURL: "https://time-sheet-10faa.firebaseio.com",
        projectId: "time-sheet-10faa",
        storageBucket: "",
        messagingSenderId: "577691079028"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var employeeName = "";
    var employeeRole = "";
    var employeeRate = 0;
    var employeeStart = 0;

    $("#new-employee-submit").on("click", function (event) {
        event.preventDefault();
        employeeName = $("#employee-name").val();
        employeeRole = $("#employee-role").val();
        employeeRate = $("#employee-monthly-rate").val();
        employeeStart = $("#employee-start-date").val();

        database.ref().push({
            name: employeeName,
            role: employeeRole,
            start: employeeStart,
            rate: employeeRate,
        });

    });

    database.ref().on("child_added", function (snapshot) {
        var body = $("<tbody>");
        var nameTd = $("<th>");
        nameTd.attr("scope", "row");
        var roleTd = $("<td>");
        var startTd = $("<td>");
        var rateTd = $("<td>");

        nameTd.text(snapshot.val().name);
        rateTd.text(snapshot.val().rate);
        roleTd.text(snapshot.val().role);
        startTd.text(snapshot.val().start);

        body.append(nameTd);
        body.append(roleTd);
        body.append(startTd);
        body.append(rateTd);

        $("table").append(body);

    });

});