$("#btnSubmit").click(function () {
    let assignments = $("#assignments").val();
    let projects = $("#projects").val();
    let quizzes = $("#quizzes").val();
    let midterm = $("#midterm").val();
    let final = $("#final").val();
    let intex = $("#intex").val();
    let grade = assignments + projects + quizzes + midterm + final + intex;

    if (grade >= 94) {
        alert("You have an A in the class")
    }
    else if (grade >= 90) {
        print("You have an A- in the class")
    }
    else if (grade >= 87) {
        print("You have a B+ in the class")
    }
    else if (grade >= 84) {
        print("You have a B in the class")
    }
    else if (grade >= 80) {
        print("You have a B- in the class")
    }
    else if (grade >= 77) {
        print("You have a C+ in the class")
    }
    else if (grade >= 74) {
        print("You have a C in the class")
    }
    else if (grade >= 70) {
        print("You have a C- in the class")
    }
    else if (grade >= 67) {
        print("You have a D+ in the class")
    }
    else if (grade >= 64) {
        print("You have a D in the class")
    }
    else if (grade >= 60) {
        print("You have a D- in the class")
    }
    else {
        print("You have an E in the class")
    }
})  