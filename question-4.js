const alphaTech = [
  { name: 'Alice', age: 23, department: 'Engineering' },
  { name: 'Bob', age: 19, department: 'Design' }
];

const betaSoft = [
  { name: 'Charlie', age: 28, department: 'Engineering' },
  { name: 'David', age: 17, department: 'Support' }
];

const gammaDev = [
  { name: 'Eve', age: 25, department: 'Marketing' },
  { name: 'Faythe', age: 18, department: 'Engineering' },
  { name: 'Grace', age: 20, department: 'Engineering' }
];

let companies = [];

const getUsers = async () => {
  try {
    const userData = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await userData.json();

    companies = data.map((user) => ({
      name: user.name,
      company: user.company.name,
    }));

    const alphaTechWithCompany = alphaTech.map(employee => ({ ...employee, company: 'alphaTech' }));
    const betaSoftWithCompany = betaSoft.map(employee => ({ ...employee, company: 'betaSoft' }));
    const gammaDevWithCompany = gammaDev.map(employee => ({ ...employee, company: 'gammaDev' }));

    const allEmployees = [
      ...alphaTechWithCompany,
      ...betaSoftWithCompany,
      ...gammaDevWithCompany,
      ...companies,
    ];

    const result = allEmployees
      .filter((employee) => employee.department === 'Engineering' && employee.age >= 20)
      .map((employee) => ({
        name: employee.name,
        company: employee.company,
      }));

    console.log(result);
  

    return result;

  } catch (error) {
    console.log(error);
  }
};

getUsers();