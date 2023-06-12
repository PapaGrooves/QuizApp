// a series of variables to keep scores from all individual quizzes
let mathsScore = localStorage.getItem('mathsScore') || 0;
let historyScore = localStorage.getItem('historyScore') || 0;
let chemistryScore = localStorage.getItem('chemistryScore') || 0;
let physicsScore = localStorage.getItem('physicsScore') || 0;
let geographyScore = localStorage.getItem('geographyScore') || 0;
let biologyScore = localStorage.getItem('biologyScore') || 0;

let f = 0; //used to mark position in array

// setting cookie for the users name, to be displayed on all pages 
// thst contian the id "userName"
let cook = document.getElementById("firstName");
const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("name="))
  .split("=")[1];
function showCookieValue() {
  const output = document.getElementById("userName");
  output.textContent = cookieValue;
}
showCookieValue();

//validation to check if user entered a name
// and an appropriate password 
function validation() {
  if (
    document.getElementById("firstName").value == "" &&
    !email.value.includes("@")
  ) {
    alert("Enter valid email and name");
  } else if (document.getElementById("firstName").value == "") {
    alert("Enter valid name");
  } else if (!email.value.includes("@")) {
    alert("Enter valid email");
  } else {
    document.cookie = `name=${cook.value}`;
    document.location.href = "quiz-home.html";
  }
}

// set to allow time display
function showTime() {
  let clock = new Date();
  let h = clock.getHours();
  let m = clock.getMinutes();
  // adding a 0 in front of the
  // digit in case it is less
  // than 10
  // h = *condition* ? *if true* : *if false*
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  // sets order of the digit display
  let time = h + ":" + m;
  document.getElementById("MyClockDisplay").innerHTML = time;
  // updates clock every second
  setTimeout(showTime, 1000);
}
showTime();

// set up to allow date display
function showDate() {
  let date = new Date();

  // set up array with month names
  // to display as string rather than int
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = date.getDate(); //day of the month
  let m = months[date.getMonth()]; //month
  let y = date.getFullYear(); //year

  // sets order of date display
  let calendar = d + " " + m + " " + y; //full date display set up
  document.getElementById("dateDisplay").innerHTML = calendar; //actual date display

  // updates date every second
  setTimeout(showDate, 1000);
}
showDate();

// array storing questions and answers
// to be fetched when button is pressed
let mathQuestions = [
  ["Q1: Hannah ran 12 laps every day for 8 days. How many laps did she run in all?", "96"],
  ["Q2: What is the square root of 225?", "15"],
  ["Q3: The midday temperatures in Grantford were recorded over a nine day period. The temperatures, in °C, were <br> 4 7 4 3 6 10 9 5 3 9 <br> What was the median temperature?", "6"],
  ["Q4: If a triangle has 36° in one corner, and 47° in another, how many ° does the remaining corner have?", "97"],
  ["Q5: The radius of circle is 13.67cm, what is the diameter of the circle?", "27.34"],
  []
];

let historyQuestions = [
  ["Q1: What year did World War 2 start?", "1939"],
  ["Q2: How many wives did Henry VIII have?", "6"],
  ["Q3: In what year did Martin Luther publish the Ninety-five Theses?", "1517"],
  ["Q4: In what year was William Wallace hanged?", "1305"],
  ["Q5: When did the battle of Bannockburn take place?", "1314"],
  []
];

let chemistryQuestions = [
  ["Q1: What is the symbol for Gold on the periodic table?", "Au"],
  ["Q2: An atom has 26 protons, 26 electrons and 30 neutrons. What is the mass number?" , "56"],
  ["Q3: True or false, Metallic bonding is the strong electrostatic force of attraction between the metal ions and the delocalised electrons.", "True"],
  ["Q4: Name the type of radiation emitted by the americium-241 radioisotope.", "Alpha"],
  ["Q5: What does Br stand for on the periodic table?", "Bromine"],
  []
];

let physicsQuestions = [
  ["Q1: What moves through a conductor when a current flows through it?", "Electrons"],
  ["Q2: What frequency is the mains supply in Scotland?", "50Hz"],
  ["Q3: True or false, MOSFET transistors can be used as an electronic switch.", "True"],
  ["Q4: What is the temperature of ‘absolute zero’ in the Celsius scale?", "-273"],
  ["Q5: What is the bending of waves called?", "Diffraction"],
  []
];

let geographyQuestions = [
  ["Q1: What is formed when multiple snowfalls in mountainous areas turn into ice?", "Glaciers"],
  ["Q2: As the process of freeze-thaw weathering continues, rocks break apart in sharp, angular pieces called what?", "Scree"],
  ["Q3: What happens when sliding plate boundries occur?", "Earthquake"],
  ["Q4: What do we use to measure shockwaves?", "Seisometer"],
  ["Q5: In what year did Mt St Helens erupt?", "1980"],
  []
];

let biologyQuestions = [
  ["Q1: What term is used to describe the temperature at which an enzyme works best?", "Optimum"],
  ["Q2: Which part of a cell controls cell division?", "Nucelus"],
  ["Q3: How many chromosomes are found in a human diploid cell?", "46"],
  ["Q4: The DNA base, (A) adenine, pairs with what other base?", "Thymine"],
  ["Q5: What do plants use to produce proteins?", "Nitrate"],
  []
];

function mathLink() { // takes user to the appropriate quiz page when button is pressed
  document.location.href = "math-quiz.html"
}
function m() { // displayes the appropriate questions on quiz page load
  document.getElementById("question").innerHTML = mathQuestions[f][0];
}
function historyLink() {
  document.location.href = "history-quiz.html"
}
function h() {
  document.getElementById("question").innerHTML = historyQuestions[f][0];
}
function chemistryLink() {
  document.location.href = "chemistry-quiz.html"
}
function c() {
  document.getElementById("question").innerHTML = chemistryQuestions[f][0];
}
function physicsLink() {
  document.location.href = "physics-quiz.html"
}
function p() {
  document.getElementById("question").innerHTML = physicsQuestions[f][0];
}
function geographyLink() {
  document.location.href = "geography-quiz.html"
}
function g() {
  document.getElementById("question").innerHTML = geographyQuestions[f][0];
}
function biologyLink() {
  document.location.href = "biology-quiz.html"
}
function b() {
  document.getElementById("question").innerHTML = biologyQuestions[f][0];
}

// this allows us to cycle through the array, display and validate all questions
// then we take away the submit button and replace it with the home and statistics buttons
function mathQuiz() {
  if (document.getElementById("answer").value == mathQuestions[f][1]) { 
    mathsScore++;
  } 
  // 
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
  f++;
  document.getElementById("question").innerHTML = mathQuestions[f][0];

  let p = "";
  if (mathsScore <=2)
  {
    p = "FAIL!"
  }
  else {
    p = "PASS!"
  }

  if (f == 5) {
    document.getElementById("btn-flip").style.display = "block";
    document.getElementById("btn-flip-two").style.display = "block";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("answer").style.visibility="hidden";
    document.getElementById("question").innerHTML = "You scored " + mathsScore + "/5. " + p;
  }

   //saves score to local storage 
    localStorage.setItem('mathsScore', mathsScore);
 
}

function historyQuiz() {
  if (document.getElementById("answer").value == historyQuestions[f][1]) { 
    historyScore++;
  } 
  // 
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
  f++;
  document.getElementById("question").innerHTML = historyQuestions[f][0];

  let p = "";
  if (historyScore <=2)
  {
    p = "FAIL!"
  }
  else {
    p = "PASS!"
  }

  if (f == 5) {
    document.getElementById("btn-flip").style.display = "block";
    document.getElementById("btn-flip-two").style.display = "block";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("answer").style.visibility="hidden";
    document.getElementById("question").innerHTML = "You scored " + historyScore + "/5. " + p;
  }

  if (historyScore > 0) {
    localStorage.setItem('historyScore', historyScore);
  }
}

function chemistryQuiz() {
  if (document.getElementById("answer").value == chemistryQuestions[f][1]) { 
    chemistryScore++;
  } 
  // 
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
  f++;
  document.getElementById("question").innerHTML = chemistryQuestions[f][0];

  let p = "";
  if (chemistryScore <=2)
  {
    p = "FAIL!"
  }
  else {
    p = "PASS!"
  }

  if (f == 5) {
    document.getElementById("btn-flip").style.display = "block";
    document.getElementById("btn-flip-two").style.display = "block";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("answer").style.visibility="hidden";
    document.getElementById("question").innerHTML = "You scored " + chemistryScore + "/5. " + p;
  }

  if (chemistryScore > 0) {
    localStorage.setItem('chemistryScore', chemistryScore);
  }
}

function physicsQuiz() {
  if (document.getElementById("answer").value == physicsQuestions[f][1]) { 
    physicsScore++;
  } 
  // 
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
  f++;
  document.getElementById("question").innerHTML = physicsQuestions[f][0];

  let p = "";
  if (physicsScore <=2)
  {
    p = "FAIL!"
  }
  else {
    p = "PASS!"
  }

  if (f == 5) {
    document.getElementById("btn-flip").style.display = "block";
    document.getElementById("btn-flip-two").style.display = "block";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("answer").style.visibility="hidden";
    document.getElementById("question").innerHTML = "You scored " + physicsScore + "/5. " + p;
  }

  if (physicsScore > 0) {
    localStorage.setItem('physicsScore', physicsScore);
  }
}

function geographyQuiz() {
  if (document.getElementById("answer").value == geographyQuestions[f][1]) { 
    geographyScore++;
  } 
  // 
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
  f++;
  document.getElementById("question").innerHTML = geographyQuestions[f][0];

  let p = "";
  if (geographyScore <=2)
  {
    p = "FAIL!"
  }
  else {
    p = "PASS!"
  }

  if (f == 5) {
    document.getElementById("btn-flip").style.display = "block";
    document.getElementById("btn-flip-two").style.display = "block";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("answer").style.visibility="hidden";
    document.getElementById("question").innerHTML = "You scored " + geographyScore + "/5. " + p;
  }

  if (geographyScore > 0) {
    localStorage.setItem('geographyScore', geographyScore);
  }
}

function biologyQuiz() {
  if (document.getElementById("answer").value == biologyQuestions[f][1]) { 
    biologyScore++;
  } 
  // 
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
  f++;
  document.getElementById("question").innerHTML = biologyQuestions[f][0];

  let p = "";
  if (biologyScore <=2)
  {
    p = "FAIL!"
  }
  else {
    p = "PASS!"
  }

  if (f == 5) {
    document.getElementById("btn-flip").style.display = "block";
    document.getElementById("btn-flip-two").style.display = "block";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("answer").style.visibility="hidden";
    document.getElementById("question").innerHTML = "You scored " + biologyScore + "/5. " + p;
  }

  if (biologyScore > 0) {
    localStorage.setItem('biologyScore', biologyScore);
  }
}

function progress() {
  // setting progress bar width according 
  // to the score on the quizzes

  // MATH PROGRESS
  for (let i = 0; i<=20; i+=4)
  {
    let j = mathsScore;
    let result = j*i;
    if (mathsScore >= 5)
    {
      result = 100;
    }
    document.getElementById("mathBar").style.width = result + "%";
    
  }
  // HISTORY PROGRESS
  for (let i = 0; i<=20; i+=4)
  {
    let j = historyScore;
    let result = j*i;
    if (historyScore >= 5)
    {
      result = 100;
    }
    document.getElementById("historyBar").style.width = result + "%";
  }
  // CHEMISTRY PROGRESS
  for (let i = 0; i<=20; i+=4)
  {
    let j = chemistryScore;
    let result = j*i;
    if (chemistryScore >= 5)
    {
      result = 100;
    }
    document.getElementById("chemBar").style.width = result + "%";
  }
  // PHYSICS PROGRESS
  for (let i = 0; i<=20; i+=4)
  {
    let j = physicsScore;
    let result = j*i;
    if (physicsScore >= 5)
    {
      result = 100;
    }
    document.getElementById("physicsBar").style.width = result + "%";
  }
  // GEOGRAPHY PROGRESS
  for (let i=0; i<=20; i+=4)
  {
    let j = geographyScore;
    let result = j*i;
    if (geographyScore >= 5)
    {
      result = 100;
    }
    document.getElementById("geoBar").style.width = result + "%";
  }
  // BIOLOGY PROGRESS
  for (let i = 0; i<=20; i+=4)
  {
    let j = biologyScore;
    let result = j*i;
    if (biologyScore >= 5)
    {
      result = 100;
    }
    document.getElementById("bioBar").style.width = result + "%";
  }
}

  // let indexOfLink="";
  // for (let i=0; i<= 5; i++)
  // {
  //   document.getElementById(i)?.addEventListener("click", ()=>{
  //             indexOfLink = document.getElementById(i).id;
  //             window.localStorage.setItem("questions", JSON.stringify(indexOfLink));
  //             document.getElementById(i).id; 
  //             console.log("wowzers");
            
  //           if (i==0)
  //             {
  //               document.location.href = "math-quiz.html"
  //             }
  //             else if (i==1)
  //             {
  //               document.location.href = "history-quiz.html"
  //             } 
  //             else if (i==2)
  //             {
  //               document.location.href = "chemistry-quiz.html"
  //             }
  //             else if (i==3)
  //             {
  //               document.location.href = "physics-quiz.html"
  //             }
  //             else if (i==4)
  //             {
  //               document.location.href = "grography-quiz.html"
  //             }
  //             else if (i==5)
  //             {
  //               document.location.href = "biology-quiz.html"
  //             }
  //           })
  //         }
// }