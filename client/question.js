window.onload = chooseQuestion;

const answers = [
  "15",
  "336",
  "34",
  "36",
  "- 2011",
  "90",
  "- 40",
  "36",
  "4,24",
  "348",
  "700",
  "0,11",
  "6",
  "35,26",
  "5",
  "294",
  "242",
  "2",
  "10",
  "3",
  "B",
  "A",
  "C",
  "A",
  "E",
  "C",
  "D",
  "E",
  "C",
  "D",
  "- 5",
  "31944",
  "3,5",
  "40",
  "3",
  "70",
  "- 6,25",
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
  "4 000",
  "8",
  "4",
  "2",
  "48",
  "30",
  "15,63",
  "-8",
  "3 840",
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
  "2 697,74 a 2 697,75",
  "9 372",
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
  "0,8 alebo 0,80",
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
  "2 628",
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
  "-5 050",
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
function chooseQuestion() {
  const years = [
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2023, 2024,
  ];

  let randomYear = Math.floor(Math.random() * years.length);
  let randomQuestion = Math.floor(Math.random() * 30) + 1;
  year = years[randomYear];
  question = randomQuestion;

  let questionNumber = randomYear*30 + randomQuestion;

  document.getElementById(
    "question"
  ).src = `../questions/${years[randomYear]}-${randomQuestion}.png`;
  document.getElementById(
    "question_number"
  ).textContent = `PRÍKLAD ${questionNumber}`;
  
  document.getElementById(
    "question_year"
  ).textContent = `(${randomQuestion}/${years[randomYear]})`;
}

function getAnswer() {
    console.log((year-2011)*30 + question)
  document.getElementById("answer").innerHTML = answers[(year-2011)*30 + question - 1];

}