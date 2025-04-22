//Q1

const employeesJson = [

//employee 1
{
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: "40000",
    raiseEligible:"true"
},

//employee 2
{
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: "18500",
    raiseEligible:"true"
},

//employee 3
{
    firstName:"Bill",
    department: "HR",
    designation: "Executive",
    salary:"21200",
    raiseEligible:"false"
}

];

console.log(employeesJson);


//Q2

const company =
    {
        companyName: "Tech Stars",
        website: "www.techstars.site",
        employees: employeesJson
    
    };

console.log(company);
//Q3

const newEmployee={
    firstName:"Anna",
    department: "Tech",
    designation:"Executive",
    salary:"25600",
    raiseEligible:"false"

};

employeesJson.push(newEmployee);
console.log(company);



//Q4

function total(company){
    let sum = 0
    for ( i in company.employees){
        sum += parseInt(company.employees[i].salary);    }

    return console.log(sum);

    
}

total(company);



//Q5

function raise(employeesJson){

for (let x of employeesJson){
    if (x.raiseEligible === "true"){
        x.salary = x.salary * 1.1;
        x.raiseEligible = "false"
        
    }

}

};

raise(employeesJson);
console.log(company);
//Q6

const wfhPeople = ["Anna", "Sam"];

function wfh(employeesJson, array){
    for (let x of employeesJson){
        if(x.firstName === array[0] || x.firstName === array[1]){
            x.wfh = 'true'


        } else{
            x.wfh = 'false'
        }
    }

};

wfh(employeesJson, wfhPeople);

console.log(company);