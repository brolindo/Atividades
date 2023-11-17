const departmentList = [
    {
      departmentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: true
    },
];

// 01
function howManyDepartments() {
    return departmentList.length;
}

console.log(howManyDepartments());


// 02
function changeDepartmentName(departmentName, newName) {
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentName.toLowerCase() === departmentName.toLowerCase()) {
            departmentList[i].departmentName = newName;
            return departmentList[i];
        }
    }
    return "Department not found";
}

// 03
function giveTheDepartmentABreak(){
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].working) {
            departmentList[i].working = false;
        } else {
            departmentList[i].working = true;
        }
    }
    return departmentList;
}

// 04
function howManyEmployeesInDepartment(department) {
  for (let i = 0; i < departmentList.length; i++) {
    if (departmentList[i].departmentName.toLowerCase() === department.toLowerCase()) {
      return departmentList[i].employees.length;
    }
  }
  return "Department not found";
}


// 05
function makeAPerson (name, age, responsibility, salary){
  const person = {
    Name: `${name}`,
    Age: age,
    Responsibility: `${responsibility}`,
    Salary: salary
  }
  return person;
}

let newEmployee = makeAPerson("Brolin", 28, "Financial direcctor", 20000);

function insertNewEmployeeInDepartment(nameDepartment, person) {
  let department = []

  for (i = 0; i < departmentList.length; i++) {
    let departmentNameLowerCase = departmentList[i].departmentName.toLowerCase();

    if (departmentNameLowerCase.includes(nameDepartment.toLowerCase())){
      department.push(departmentList[i]);
      departmentList[i].employees.push(person);
    }
  }
  if (department.length != 1) {
    return "Department not found"
  }

  return department;
} 

console.log(insertNewEmployeeInDepartment("Financiddal", newEmployee));