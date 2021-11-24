let student = new Array();
document.getElementById('tables').style.display = 'none';
let now = moment();


function save() {
    document.getElementById('tables').style.display = 'flex';
    let nameinput = document.getElementById('name').value;
    let subjectinput = document.getElementById('subject').value;

    student.push({
        studentname: nameinput,
        subject: subjectinput
    });

    document.getElementById('name').value = '';
    document.getElementById('subject').value = '';
    display();

}

function display() {

    let table = document.getElementById('table');
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    for (let i = 0; i < student.length; i++) {
        cell1.innerHTML = student[i].studentname;
        cell2.innerHTML = student[i].subject;
    }

}

function random() {

    var table2 = document.getElementById('table2');
    var row2 = table2.insertRow();
    var cell21 = row2.insertCell(0);
    var cell22 = row2.insertCell(1);
    var cell23 = row2.insertCell(2);
    var max = student.length;
    var i = 0;
    var randStudent = new Array();
    var projectday = new Array();
    
    i = Math.floor(Math.random() * (max));
    randStudent.push(student[i]);
    student.splice(i, 1);
    // if(moment().day() == 4){
    //     projectday.push(now.add(3, 'days').format('DD-MM-YYYY'));
    // }else if(moment().day()==5){
    //     projectday.push(now.add(2, 'days').format('DD-MM-YYYY'));
    // }else{
    //     projectday.push(now.add(1, 'days').format('DD-MM-YYYY'));
    // }
    for()

    projectday.push(now.add(1, 'days').format('DD-MM-YYYY'));
    
    for (let f = 0; f < randStudent.length; f++) {
        cell21.innerHTML = randStudent[f].studentname;
        cell22.innerHTML = randStudent[f].subject;
        cell23.innerHTML = projectday[f];
        
    }
   console.log(moment().day());

}