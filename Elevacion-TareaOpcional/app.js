// ============== 01 ==============

console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); // Output : undefined
// hello = "world";

// ============== 02 ==============
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle); // Output : 'magnet'
// }
// needle = 'haystack';
// test(); // execute function


// ============== 03 ==============
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);  Output : 'only okay'
// }
// brendan = 'super cool';
// console.log(brendan);  Output : 'super cool'

// ============== 04 ==============
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// food = 'chicken';
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food); Output : 'half-chicken'
//     food = 'gone';
// }
// console.log(food); Output : 'chicken'
// eat(); Output : 'half-chicken'


// ============== 05 ==============
// mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean(); Output: "TypeError: mean is not a function."
// No va ejecutar el codigo siguiente debido al error 
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


// ============== 06 ==============

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
// console.log(genre); Output: undefined
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre); Output: "rock"
//     genre = "r&b";
//     console.log(genre); Output: "r&b"
// }
// genre = "disco";
// rewind();

// console.log(genre); Output: "disco"


// ============== 07 ==============
console.log("07");
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    console.log(dojo);
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); Output : "seattle"
//     dojo = "burbank"; 
//     console.log(dojo); Output : "burbank"
// }
// dojo = "san jose";
// console.log(dojo); Output : "san jose"
// learn();

// console.log(dojo); Output : "san jose"

// ============== 08 ==============

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}


// function makeDojo(name, students) {
//     const dojo;
//     dojo.name;
//     dojo.students;
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring;
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now"; Output : "TypeError: Assignment to constant variable."
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // Output Dojo
// console.log(makeDojo("Berkeley", 0)); // Output : TypeError