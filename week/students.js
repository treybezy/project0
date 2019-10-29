let studentId = 1000;

function addStudent() {

  //Get the input field values
  let studentName = document.getElementById('studentName').value;
  let studentMajor = document.getElementById('studentMajor').value;

  //validate that the input fields have values within themselves
  if(studentName && studentMajor) {

    // Create a row and cells for the students table
    let row = document.createElement('tr');
    let studentIdCell = document.createElement('td');
    let studentNameCell = document.createElement('td');
    let studentMajorCell = document.createElement('td');

    //Add the newly created cells to the new row
    row.appendChild(studentIdCell);
    row.appendChild(studentNameCell);
    row.appendChild(studentMajorCell);

    // Attach the new row to our students table
    document.getElementById('students').appendChild(row);

    // Add student information to the newly appended cells
    studentIdCell.innerText = studentId++;
    studentNameCell.innerText = studentName;
    studentMajorCell.innerText = studentMajor;

    //Clear the input fields

    document.getElementById('studentName').value = '';
    document.getElementById('studentMajor').value = '';
  }
}

document.getElementById('addStudent').addEventListener('click', addStudent);