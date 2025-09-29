const sortName = document.getElementById("sortName");
const sortPosition = document.getElementById("sortPosition");
const sortOffice = document.getElementById("sortOffice");
const sortAge = document.getElementById("sortAge");
const sortStartDate = document.getElementById("sortStartDate");

const names = [
  "John",
  "Alice",
  "Bob",
  "Emma",
  "Michael",
  "Sophia",
  "David",
  "Olivia",
  "Daniel",
  "Ava",
];

const positions = [
  "Accountant",
  "Engineer",
  "Designer",
  "Doctor",
  "Teacher",
  "Lawyer",
  "Nurse",
  "Developer",
  "Manager",
  "Analyst",
];

const cities = [
  "New York",
  "London",
  "Paris",
  "Berlin",
  "Tokyo",
  "Cairo",
  "Rome",
  "Madrid",
  "Toronto",
  "Sydney",
];

const ages = [25, 30, 28, 35, 40, 32, 27, 29, 31, 26];

const startDates = [
  "2020-01-15",
  "2019-03-22",
  "2018-07-10",
  "2021-11-05",
  "2017-09-12",
  "2022-02-18",
  "2016-12-01",
  "2019-08-14",
  "2021-06-30",
  "2018-04-09",
];

const createEmployees = function (name, position, office, age, startDate) {
  this.name = name;
  this.position = position;
  this.office = office;
  this.age = age;
  this.startDate = startDate;
};

let employees = [];
const myTableBody = document.getElementById("myTable");
const employeesForm = document.getElementById("employees-form");

// Populate Employees Data:
for (let i = 0; i < 10; i++) {
  let emp = new createEmployees(
    names[i],
    positions[i],
    cities[i],
    ages[i],
    startDates[i]
  );

  employees.push(emp);
}

// Render Table Data:
function renderTable(data) {
  myTableBody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let tr = `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].position}</td>
        <td>${data[i].office}</td>
        <td>${data[i].age}</td>
        <td>${data[i].startDate}</td>
    </tr>`;
    myTableBody.innerHTML += tr;
  }
}
renderTable(employees);

// Sort Buttons Functions
function sortTable(field, type = "string") {
  employees.sort((a, b) => {
    if (type === "number") {
      return a[field] - b[field];
    } else if (type === "date") {
      return new Date(a[field]) - new Date(b[field]);
    } else {
      return a[field].localeCompare(b[field]);
    }
  });
  renderTable(employees);
}
sortName.addEventListener("click", () => {
  sortTable("name");
});
sortPosition.addEventListener("click", () => {
  sortTable("position");
});
sortOffice.addEventListener("click", () => {
  sortTable("office");
});
sortAge.addEventListener("click", () => {
  sortTable("age", "number");
});
sortStartDate.addEventListener("click", () => {
  sortTable("startDate", "date");
});

// Add Employee Form Submission
employeesForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const office = document.getElementById("office").value;
  const age = document.getElementById("age").value;
  const startDate = document.getElementById("startDate").value;

  const newEmployee = new createEmployees(
    name,
    position,
    office,
    age,
    startDate
  );
  employees.push(newEmployee);
  renderTable(employees);
});
    