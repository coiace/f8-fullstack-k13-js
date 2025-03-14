const companyA = [
  { id: 1, name: "Minh", age: 25 },
  { id: 2, name: "An", age: 30 },
  { id: 3, name: "Bình", age: 28 },
  { id: 4, name: "Dũng", age: 25 },
];
const companyB = [
  { id: 5, name: "Bình", age: 32 },
  { id: 6, name: "Chi", age: 28 },
  { id: 7, name: "An", age: 29 },
  { id: 8, name: "Dũng", age: 25 },
];

/**                                                                                                            
1. Viết hàm findCommonNames(arr1, arr2) để tìm những người trùng tên trong cả hai danh sách.                
    const arr1 = [] , arr2 = []                                                                            
                                                                                                            
                    │                                                                                      
                    ▼                                                                                      
        call function findCommonNames(comA,comB)                                                             
                                                                                                            
                    │                                                                                      
                    ▼                                                                                      
    const alikeArr = [] , nameObj = {}                                                                    
                                                                                                            
                    │                                                                                      
                    ▼              ┌──────────────────────────────────────┐                                 
        for i=0,i<arr1.length ────►│ nameObj[arr1[i].name] = arr1[i].name │                                 
                                   └──────────────────────────────────────┘                                 
                    │             ┌────────────────────────────────────────┐                               
                    ▼             │                                        │                               
       for i=0,i<arr2.length ────►│ let key = arr2[i].name                 │                               
                                  │                                        │                               
                    │             │          │                             │                               
                    │             │          ▼          no                 │                               
                    │             │   if(nameObj[key]) ────►  do nothing   │                               
                    │             │                                        │                               
                    │             │          │ yes                         │                               
                    │             │          │                             │                               
                    │             │          ▼                             │                               
                    │             │  alikeArr.push(` ${nameObj[key]}`)     │                               
                    │             │                                        │                               
                    │             └────────────────────────────────────────┘                               
                    ▼                                                                                      
console.log(`Những người trùng tên trong cả hai danh sách:${alikeArr}`)                                                                                                                
*/

function findCommonNames(arr1, arr2) {
  const alikeArr = [];
  const nameObj = {};
  for (let i = 0; i < arr1.length; i++) {
    nameObj[arr1[i].name] = arr1[i].name;
  }
  for (let i = 0; i < arr2.length; i++) {
    let key = arr2[i].name;
    if (nameObj[key]) {
      alikeArr.push(` ${nameObj[key]}`);
    }
  }
  console.log(`Những người trùng tên trong cả hai danh sách:${alikeArr}`);
}
findCommonNames(companyA, companyB);

/**
2. Viết hàm findCommonAgesAndName(arr1, arr2)mđểhtìm những người cóncùngnđộctuổiivàatênstrong cả hai danh sách.      
                                                                                                                          
    const arr1 = [] , arr2 = []                                                                                       
                                                                                                                        
                    │                                                                                                    
                    ▼                                                                                                    
    call function findCommonNames(comA,comB)                                                                           
                                                                                                                        
                    │                                                                                                    
                    ▼                                                                                                    
            const obj = {}                                                                                             
                                                                                                                        
                    │                                                                                                    
                    ▼          ┌───────────────────────────────────────────────────────────────────┐                  
    for i=0,i<arr1.length ────►│  let key = arr1[i].name + arr1[i].age;  obj[key] = key;           │                  
                               └───────────────────────────────────────────────────────────────────┘                  
                                                                                                                        
                    │           ┌─────────────────────────────────────────────────────────────┐                        
                    ▼           │                                           no                │                        
     for i=0,i<arr2.length ────►│ if (obj[obj[arr2[i].name + arr2[i].age]]) ────► do nothing  │                        
                                │                                                             │                        
                                │                        │ yes                                │                        
                                │                        │                                    │                        
                                │                        ▼                                    │                        
                                │       console.log(`Những người...`)                         │                        
                                └─────────────────────────────────────────────────────────────┘                        
                                                                                                                          
*/
function findCommonAgesAndName(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i].name + arr1[i].age;
    obj[key] = key;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[obj[arr2[i].name + arr2[i].age]]) {
      console.log(`Những người có cùng độ tuổi và tên trong cả hai danh sách: ${arr2[i].name} ${arr2[i].age}`);
    }
  }
}
findCommonAgesAndName(companyA, companyB);
