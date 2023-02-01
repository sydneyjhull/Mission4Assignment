document.getElementById("btnSubmit").addEventListener("click", function () {
    if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 94) {
        print("You have an A in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 90) {
        print("You have an A- in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 87) {
        print("You have a B+ in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 84) {
        print("You have a B in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 80) {
        print("You have a B- in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 77) {
        print("You have a C+ in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 74) {
        print("You have a C in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 70) {
        print("You have a C- in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 67) {
        print("You have a D+ in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 64) {
        print("You have a D in the class")
    }
    else if ((document.getElementById("assignments") + document.getElementById("projects") + document.getElementById("quizzes")
        + document.getElementById("midterm") + document.getElementById("final") + document.getElementById("intext")) >= 60) {
        print("You have a D- in the class")
    }
    else {
        print("You have an E in the class")
    }
})  