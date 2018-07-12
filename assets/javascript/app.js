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
    
    $("#new-employee-submit").on("click", function(event) {
    event.preventDefault();
    $("#employee-name").text(snapshot);
    console.log(this);
    $("#employee-role");
    $("#employee-start-date");
    $("#employee-monthly-rate");

    database.ref().push({
        name: employeeName,
        role: employeeRole,
        start: employeeStart,
        rate: employeeRate,
    });

    database.ref().on("child_added", function(snapshot){
        console.log(snapshot.val());
        
    });

});