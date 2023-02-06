$("#btnSubmit").click(function () {
    // assign inputs to variables
    let assignments = $("#assignments").val();
    let projects = $("#projects").val();
    let quizzes = $("#quizzes").val();
    let midterm = $("#midterm").val();
    let final = $("#final").val();
    let intex = $("#intex").val();
    let letterGrade = "";
    var result = $("#result");


    //change for weight
    let percentAssignments = .5 * parseFloat(assignments);
    let percentProjects = .1 * parseFloat(projects);
    let percentQuizzes = .1 * parseFloat(quizzes);
    let percentMidterm = .1 * parseFloat(midterm);
    let percentFinal = .1 * parseFloat(final);
    let percentIntex = .1 * parseFloat(intex);


    //final grade 
    let grade = percentAssignments + percentProjects + percentQuizzes + percentMidterm + percentFinal + percentIntex;


    //print results
    if (grade >= 94) {
        letterGrade = "A";
    }
    else if (grade < 94 && grade >= 90) {
        letterGrade = "A-";
    }
    else if (grade < 90 && grade >= 87) {
        letterGrade = "B+";
    }
    else if (grade < 87 && grade >= 84) {
        letterGrade = "B";
    }
    else if (grade < 84 && grade >= 80) {
        letterGrade = "B-";
    }
    else if (grade < 80 && grade >= 77) {
        letterGrade = "C+";
    }
    else if (grade < 77 && grade >= 74) {
        letterGrade = "C";
    }
    else if (grade < 74 && grade >= 70) {
        letterGrade = "C-";
    }
    else if (grade < 70 && grade >= 67) {
        letterGrade = "D+";
    }
    else if (grade < 67 && grade >= 64) {
        letterGrade = "D";
    }
    else if (grade < 64 && grade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    let finalString = "You got a(n) " + letterGrade + " in the class."
    $("#result").html(finalString)
})  