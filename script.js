let student = new Array();
document.getElementById('tables').style.display = 'none';

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
    // console.log(student);

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

var arrRst = new Array();
function random() {

    var step1 = student.length ; 
    var step2 = Math.random() * step1; 
    var result = Math.floor(step2); 

    
    var StudentNumber = student[result];
    student.splice(result, 1);
    arrRst.push({
        name: StudentNumber.studentname,
        subject: StudentNumber.subject,
    });
    console.log(arrRst)

    resutlatRandom();
;}

function resutlatRandom(){
    var table2 = document.getElementById('table2');
    var x = table2.rows.length;
    //delete day dupplicate
    while(--x){
        table2.deleteRow(x);
    }

    var date = new Date();
    for(var i=0 ; i < arrRst.length ; i++){
        //day auto increment
        if(date.getDay()+1 == 6){
            date.setDate(date.getDate ()+ 3)
        }else {
            date.setDate(date.getDate()+ 1)
        }

        var row2 = table2.insertRow();
        var cell1 = row2.insertCell();
        var cell2 = row2.insertCell();
        var cell3 = row2.insertCell();
  
        cell1.innerHTML = arrRst[i].name;
        cell2.innerHTML = arrRst[i].subject;
        cell3.innerHTML = date.toLocaleDateString();
    }
}


//exportation function
function Exportation(type, fn, dl) {
    var elt = document.getElementById('table2');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || ('final result.' + (type || 'xlsx')));
}


    
    
   

