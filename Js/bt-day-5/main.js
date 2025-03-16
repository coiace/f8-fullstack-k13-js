const companies = [
    { id: 1, name: 'Tech Corp' },
    { id: 2, name: 'Finance Inc' },
    { id: 3, name: 'Health Plus' }
];
const employees = [
    { name: 'Alice', companyId: 1, salary: 15000000 },
    { name: 'Bob', companyId: 1, salary: 18000000 },
    { name: 'Charlie', companyId: 2, salary: 22000000 },
    { name: 'David', companyId: 2, salary: 20000000 },
    { name: 'Eve', companyId: 3, salary: 25000000 }
];
/*
const companies, employees                                                                                                             
let result = companies.map                                    
┌───────────────────────────────────────────────────────────────┐   
│                                                               │   
│  let employee = employees.filter                              │   
│               │                                               │   
│               ▼                                               │   
│ ┌───────────────────────────────────┐                         │   
│ │ employee.companyId === company.id │                         │   
│ └───────────────────────────────────┘                         │   
│                                                               │   
│  let sum = 0                                                  │   
│                                ┌────────────────────────────┐ │   
│  for i=0,i<employee.length ───►│  sum += employee[i].salary │ │   
│                                └────────────────────────────┘ │   
│                                                               |
|                                                               |
|   let average = sum / employee.length                         │    
│                                                               │   
│  return {                                                     │   
│          name: company.name,                                  │   
│          employees: employee,                                 │   
│          averageSalary: average                               │   
│      }                                                        │   
│                                                               │   
└───────────────────────────────────────────────────────────────┘    
**/
let result = companies.map(company => {
    let employee = employees.filter(function(employee) {
        return employee.companyId === company.id
    })
    let sum = 0;
    for(let i = 0; i < employee.length; i++) {
        sum += employee[i].salary
    }
    let average = sum / employee.length
    return {
        name: company.name,
        employees: employee,
        averageSalary: average
    }
})
console.log(result)

