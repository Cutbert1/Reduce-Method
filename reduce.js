  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property in array of objects
//Our goal is to total all  the experience the team has as a whole.

let totalEperience = teamMembers.reduce((acc, curr) => acc +curr.yrsExperience, 0);
console.log(totalEperience);


// Grouping by a property, and totaling it too
//Use reduce to group our team members by profession and find  the total experience for each profession.  
// {Developer: 12, Designer: 4} <--- This is what we want to achieve!!

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {}) 
console.log(experienceByProfession);


//Reduce Methos Challenge

//You will use the reduce method to execute a function on each item resulting in a single object. 
//The object should be that of the student with the highest english score and should show the student's name and english score. 
//You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.
//Keep an eye open for spots to use destructuring, You will not be tested to see if you have done this, but it would be good for getting in more practice.

//1. Create a variable named biggest using the keyword const
//2. Assign it a value from using the reduce method on the students array
//3. Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
//4. Use a default value with the reduce method
//5. log out the variable biggest to see the value

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

// Write code
const biggest = students.reduce((acc, cur) => {
  acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
  return acc;
  }, {name: '', max: 0});
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
  if(max < english) {
      acc = {name:n, max: english};
  }
  return acc;
  }, {name: '', max: 0});
  
console.log(biggest);
*/
