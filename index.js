/*

const Caroline = {
    name: "Caroline",
    dob: 2004,
    graduated: false, 
    age: function(){
        console.log(this);
        return 2020 - this.dob;
    }
};

const Homor = {
    name: "Homer",
    age: 32,
    family: {
        wife:{
            name: "Marge"
        },
        son: {
            name: "Bart"
        }
    },
    pets: ["cat", "dog"]
};



const Haoran = {
    name: "how",
    dob: 2001,
    year: "Senior",
    age: function() {
        return 2020 - this.dob
    }
};

const Eric = Haoran.year; // reference to Haoran
const Christian = {};
Christian.dob = Haoran.dob;
Christian.dob = 2003;
const calculator = {
    add: //function x + y,
    subtract: //function x - y
}
*/

//Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
   
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
   
  //3) return only the last three presidents
   
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
   
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
   
 /* 
/////challenge 1
const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

const democraticPresidents =  presidents.filter(function(president) {
	return president.party == “Democratic”;
});

/////challenge 2

let Trump = Trump;
if (trump === R){
    console.log("Reublican");
}

/////challenge 3
const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

const lastthreePresidents =  presidents.filter(function(president) {
	return president.name == “Trump, Obama, Bush”;
});

/////challenge 4

const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

let demooratic2President = [
    {
      president: 'Obama',
      party: Democratic,
    },
    {
        president: 'Clinton',
        party: Democratic,
    },
    {
        president: 'Johnson',
        party: Democratic,
    },

    console.log("Democratic");
  ]
  */

/*
  const header = document.querySelector(".header");
  const header = document.querySelector("#Idheader");
  const header = document.getElementById("Idheader");
  const header = document.getSelectorAll(".list-item");
  items.forEach((element) => console.log(element))
  const itemsArr = Array.from(items);
*/

const header = document.querySelector(".header-two");
const button = document.querySelector(".button");
const background = document.querySelector(".background");

button.addEventListener("click", function() {
    if(background.style.backgroundColor !== "rgb(255, 0, 0)"){
        background.style.backgroundColor !== "rgb(255, 0, 0)";
    } else{
        background.style.backgroundColor = "rgb(0, 0, 255)";
    }
});

/*
button.addEventListener("click", function(){
    const R = Math.floor(Math.random)
})
*/