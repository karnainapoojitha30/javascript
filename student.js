let student = {
    name: "Poojitha",
    rollno: 544
};
function subjectChooser(code) {
    let subject;
    switch (code) {
        case 1:
            subject = "Maths";
            break;
        case 2:
            subject = "Computer Science";
            break;
        case 3:
            subject = "Machine Learning";
            break;
        case 4:
            subject = "Data Science";
            break;
    }
    return subject;
}
function gradeCalculator(marks) {
    let grade;
    if (marks >= 90) grade = 'A';
    else if (marks >= 80) grade = 'B';
    else if (marks >= 70) grade = 'C';
    else if (marks >= 60) grade = 'D';
    else grade = 'Fail';
    return grade;
}
function studentDetails() {
    let subjectcode = 3;
    let marks=90;
    console.log("Student Name: " + student.name);
    console.log("Roll Number: " + student.rollno);
    console.log("Subject: " + subjectChooser(subjectcode));
    console.log("Marks Obtained: " + marks);
    console.log("Grade: " + gradeCalculator(marks));
}
studentDetails(90);
