window.onload = chooseQuestion;

// question
const questionIDEl = document.getElementById("question_id");
const question_imgEl = document.getElementById("question_img");
const question_yearEl = document.getElementById("question_year");
// answering
const abcdEl = document.getElementById("abcde");
const writeEl = document.getElementById("write");
const answerInputEl = document.getElementById("answerInput");
const submitAnswerInputEl = document.getElementById("submitAnswerInput");
const corAnswerEl = document.getElementById("corAnswer");
// find
const findInputEl = document.getElementById("findInput");
const submitFindInput = document.getElementById("submitFindInput");

const answers = [
  "-5",
  "31944",
  "3,5",
  "40",
  "3",
  "70",
  "-6,25",
  "54,24",
  "15",
  "15,95",
  "0,12 alebo 0,87",
  "5",
  "22,8",
  "350",
  "241,66",
  "173",
  "9,6",
  "37",
  "540",
  "2",
  "D",
  "A",
  "B",
  "C",
  "B",
  "D",
  "A",
  "E",
  "B",
  "C",
  "12",
  "78,4",
  "47,75",
  "13",
  "16,5",
  "117,28",
  "4000",
  "8",
  "4",
  "2",
  "48",
  "30",
  "15,63",
  "-8",
  "3840",
  "7",
  "0",
  "123",
  "60",
  "568",
  "D",
  "A",
  "C",
  "B",
  "B",
  "C",
  "E",
  "C",
  "E",
  "B",
  "26",
  "14",
  "-7",
  "8",
  "-8",
  "2697,74 a 2697,75",
  "9372",
  "4",
  "35,26",
  "3",
  "243",
  "8",
  "-4",
  "21",
  "102",
  "5",
  "25",
  "10",
  "3",
  "67",
  "D",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "A",
  "B",
  "D",
  "15",
  "96",
  "72",
  "9",
  "9,27",
  "–5",
  "108",
  "0,8",
  "102",
  "25",
  "17,43",
  "–2",
  "33,33",
  "126",
  "0,57",
  "3",
  "780",
  "0,85",
  "18",
  "47,89",
  "A",
  "E",
  "C",
  "C",
  "B",
  "D",
  "A",
  "D",
  "D",
  "B",
  "5,4",
  "18",
  "56",
  "-2,73",
  "15",
  "1,25",
  "0,75",
  "0,25",
  "5",
  "4",
  "175",
  "24",
  "25",
  "30",
  "49",
  "0,43",
  "45",
  "48",
  "89",
  "27,94",
  "D",
  "C",
  "D",
  "E",
  "B",
  "E",
  "A",
  "B",
  "D",
  "C",
  "2,92",
  "23,94",
  "14325",
  "1231,50",
  "6,51",
  "34",
  "0,33",
  "-0,87",
  "11",
  "-1",
  "39",
  "16",
  "1",
  "11",
  "265,85",
  "7",
  "105",
  "0,22",
  "0,24",
  "0,41",
  "D",
  "A",
  "E",
  "D",
  "B",
  "E",
  "D",
  "A",
  "C",
  "B",
  "-5",
  "9",
  "85",
  "9,5",
  "4",
  "9,5",
  "8",
  "3,14",
  "7,07",
  "5000",
  "124",
  "7",
  "17,43",
  "0,5",
  "3,2",
  "12",
  "214,67",
  "23,07",
  "14,56",
  "58,91",
  "E",
  "B",
  "C",
  "E",
  "D",
  "B",
  "A",
  "D",
  "E",
  "A",
  "7,5",
  "55",
  "-4",
  "8",
  "48",
  "891",
  "25",
  "2",
  "1,5",
  "1,2",
  "279,75",
  "52,5",
  "3",
  "25,56",
  "2",
  "53,13",
  "4",
  "2,48",
  "36,31",
  "0,13",
  "D",
  "A",
  "B",
  "C",
  "D",
  "C",
  "B",
  "E",
  "E",
  "A",
  "-5",
  "165",
  "81,22",
  "12",
  "9,04",
  "52",
  "12",
  "26,14",
  "0,4",
  "11",
  "-1,56",
  "1,88",
  "86,63",
  "4",
  "52,36",
  "123",
  "480",
  "673",
  "54,74",
  "4,6",
  "D",
  "B",
  "E",
  "A",
  "B",
  "B",
  "C",
  "E",
  "E",
  "D",
  "4,25",
  "33",
  "6",
  "50,91",
  "0,67",
  "12",
  "15,31",
  "-5",
  "4",
  "3",
  "12",
  "-1",
  "2,88",
  "122",
  "3,54",
  "2628",
  "231",
  "1,37",
  "512",
  "206,28",
  "C",
  "D",
  "B",
  "A",
  "C",
  "E",
  "E",
  "A",
  "E",
  "D",
  "24",
  "62",
  "24",
  "6,93",
  "36",
  "19,03",
  "0,17",
  "4",
  "17,32",
  "71,57",
  "0",
  "0,04",
  "6",
  "27,57",
  "55,55",
  "5,93",
  "20",
  "1,45",
  "-5050",
  "12,36",
  "E",
  "D",
  "A",
  "E",
  "C",
  "D",
  "D",
  "B",
  "E",
  "B",
];
let year;
let question;
let prevAns = "A";
let prevCorAns = "A";
const years = [
  2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2023, 2024,
];

function showQuestion(ID, year, number) {
  reset();

  if (number <= 20) {
    abcdEl.style.display = "none";
    writeEl.style.display = "flex";
  } else {
    abcdEl.style.display = "flex";
    writeEl.style.display = "none";
  }

  question_imgEl.src = `../questions/${years[year]}-${number}.png`;
  questionIDEl.textContent = `PRÍKLAD ${ID}`;
  question_yearEl.textContent = `(${number}/${years[year]})`;
}

function reset() {
  // reset A,B,C,D,E
  for (let n = 65; n <= 69; n++) {
    document.getElementById(String.fromCharCode(n)).disabled = false;
  }

  document.getElementById(prevAns).style.backgroundColor = "";
  document.getElementById(prevCorAns).style.backgroundColor = "";

  answerInputEl.value = "";
  answerInputEl.placeholder = "výsledok";
  answerInputEl.disabled = false;
  answerInputEl.style.color = "black";

  submitAnswerInputEl.style.backgroundColor = "";
  submitAnswerInputEl.disabled = false;

  corAnswerEl.textContent = "";
  corAnswerEl.display = "hidden";

  findInputEl.placeholder = "#";
  findInputEl.value = "";
}

function chooseQuestion() {
  reset();

  let curRandomYear = Math.floor(Math.random() * years.length);
  let curRandomQuestion = Math.floor(Math.random() * 30) + 1;

  year = years[curRandomYear];
  question = curRandomQuestion;

  let curID = years.indexOf(year) * 30 + question;


  showQuestion(curID, curRandomYear, curRandomQuestion);

}

function goToQuestion() {
  let val = findInputEl.value;
  if (!val || val <= 0 || val > 330) {
    findInputEl.value = "";
    findInputEl.placeholder = "X";
    return;
  }

  let nextYear = val / 30;
  if (Number.isInteger(nextYear)) nextYear = Math.floor(nextYear) - 1;
  else nextYear = Math.floor(nextYear);
  let nextNumber = val - 30 * nextYear;

  showQuestion(val, nextYear, nextNumber);
}

function checkAnswer(ans = "written") {
  let corAns = answers[years.indexOf(year) * 30 + question - 1];
  if (ans === "written") {
    // let val = Number(answerInputEl.value.trim());
    let val = answerInputEl.value.trim();

    console.log(corAns, val, answers[years.indexOf(year) * 30 + question - 1], years.indexOf(year) * 30 + question - 1)


    submitAnswerInputEl.disabled = true;
    answerInputEl.disabled = true;
    if (corAns === val) {
      answerInputEl.style.color = "green";
      submitAnswerInputEl.style.backgroundColor = "green";
    } else {
      answerInputEl.style.color = "red";
      submitAnswerInputEl.style.backgroundColor = "red";
      corAnswerEl.textContent = corAns;
      corAnswerEl.style.display = "block";
    }
  } else {
    prevCorAns = corAns;
    prevAns = ans;
    if (ans != corAns)
      document.getElementById(ans).style.backgroundColor = "red";
    document.getElementById(corAns).style.backgroundColor = "green";

    for (let n = 65; n <= 69; n++) {
      document.getElementById(String.fromCharCode(n)).disabled = true;
    }
  }
}

function isNumberKey(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (
    charCode > 31 &&
    (charCode < 48 || charCode > 57) &&
    charCode != 44 &&
    charCode != 45
  )
    return false;
  return true;
}
