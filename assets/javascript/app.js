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

    var employeeName = "John Doug";
    var employeeRole = "TA";
    var employeeStart = "01/19/2000";
    var employeeRate = "$1000";

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