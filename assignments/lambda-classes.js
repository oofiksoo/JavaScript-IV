// CODE here for your Lambda Classes

/* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
 * Lambda personnel can be broken down into three different types of `people`.
 * **Instructors** - extensions of Person
 * **Students** - extensions of Person
 * **Project Managers** - extensions of Instructors
 * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
 */
//```js




// #### Person
/*
 * First we need a Person class. This will be our `base-class`
 * Person receives `name` `age` `location` all as props
 * Person receives `speak` as a method.
 * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
 */
class Person {
    constructor(pAttr) {
        this.name = pAttr.name,
            this.age = pAttr.age,
            this.location = pAttr.location
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}
//#### Instructor
/*
 * Now that we have a Person as our base class, we'll build our Instructor class.
 * Instructor uses the same attributes that have been set up by Person
 * Instructor has the following unique props:
 * `specialty` what the Instructor is good at i.e. 'redux'
 * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
 * `catchPhrase` i.e. `Don't forget the homies`
 * Instructor has the following methods:
 * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
 * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
 */
class Instructor extends Person {
    constructor(iAttr) {
        super(iAttr);
        this.specialty = iAttr.specialty,
            this.favLanguage = iAttr.favLanguage,
            this.catchPhrase = iAttr.catchPhrase
    }
    demo(sub) {
        console.log(`Today we are learning about ${sub}`);
    }
    grade(stdnt, sbjct) {
        console.log(`${stdnt.name} receives a perfect score on ${sbjct}`);
    }
}
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

/*

#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

*/
class Student extends Person {
    constructor(sAttr) {
        super(sAttr);
        this.previousBackground = sAttr.previousBackground,
            this.className = sAttr.className,
            this.favSubjects = [sAttr.favSubjects]
    }
    listSubjects() {
        this.favSubjects.forEach(element => {
            console.log(`${this.favSubjects}`);
        });
    }
    PRAssignment(sub) {
        console.log(`${this.name} has submitted a PR for ${sub}`);
    }
    sprintChallenge(sub) {
        console.log(`${this.name} has begun sprint challenge on ${sub}`);
    }
}
const Paul = new Student({
    name: 'Paul',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    className: 'biology',
    favSubjects: ['math', 'science', 'keybording']
})
fred.demo(".Net ADAL API Managment");
fred.grade(Paul, "fishing");
Paul.listSubjects();
Paul.PRAssignment("Computers");
Paul.sprintChallenge("User Interface")
    /*

    #### Project Manager

    * Now that we have instructors and students, we'd be nowhere without our PM's
    * ProjectManagers are extensions of Instructors
    * ProjectManagers have the following unique props:
      * `gradClassName`: i.e. CS1
      * `favInstructor`: i.e. Sean
    * ProjectManagers have the following Methods:
      * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
      * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`*
    */
class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName,
            this.favInstructor = pmAttr.favInstructor
    }
    standUp(chan) {
        console.log(`${this.name} announces to ${chan}, @channel standy times!​​​​​`);
    }
    debugsCode(sAttr, sub) {
        console.log(`${this.name} debugs ${sAttr.name}'s code on ${sub}`);
    }
}
const John = new ProjectManager({
    name: 'John',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    className: 'biology',
    favSubjects: ['math', 'science', 'keybording'],
    gradClassName: 'WEB25',
    favInstructor: 'Joseph'
})
John.standUp("The Big Channel");
John.debugsCode(Paul, "Data 101");