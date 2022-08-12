let one = "one"
let senatornames = ["John Boozman",
  "Debra S Fischer",
  "William F Hagerty, Iv",
  "Shelley M Capito",
  "Daniel S Sullivan",
  "Lindsey Graham",
  "Thomas H Tuberville",
  "Thomas R Carper",
  "Rick Scott",
  "A. Mitchell Mcconnell, Jr.",
  "Susan M Collins",
  "John W Hickenlooper",
  "Gary C Peters",
  "Tina Smith",
  "John R Thune",
  "Christopher A Coons",
  "Ron L Wyden",
  "Patrick J Toomey",
  "Mark R Warner",
  "Jerry Moran,",
  "Jacklyn S Rosen",
  "Roy Blunt",
  "Cynthia M Lummis",
  "Sheldon Whitehouse",
  "Roger W Marshall",
  "John Hoeven",
  "Rand Paul",
  "Michael F Bennet",
  "Mike Rounds",
  "Richard M Burr",
  "James M Inhofe",
  "Pat Roberts",
  "William Cassidy",
  "Richard Blumenthal",
  "David A Perdue , Jr",
  "Kelly Loeffler",
  "Timothy M Kaine",
  "Jeanne Shaheen",
  "Ron Johnson",
  "Roger F Wicker",
  "Dianne Feinstein",
  "Lamar Alexander",
  "John N Kennedy",
  "Rafael E Cruz",
  "Thomas Udall",
  "Thomas R Tillis",
  "John A Barrasso",
  "Robert P Casey, Jr.",
  "Robert J Portman",
  "Benjamin L Cardin",
  "Tammy Duckworth",
  "Joseph Manchin, Iii",
  "Michael D Crapo",
  "Patty Murray",
  "Steve Daines",
  "Chris Van Hollen",
  "John Cornyn",
  "Maria Cantwell",
  "Michael  B Enzi",
  "Cory A Booker",
  "Ron Wyden",
  "Jack Reed",
  "Angus S King",
  "Thad Cochran",
  "Maria E Cantwell",
  "Elizabeth Warren",
  "Richard C Shelby"];
let zenatornames = ['ZMAN',
  'CHER',
  ', IV',
  'PITO',
  'IVAN',
  'AHAM',
  'ILLE',
  'RPER',
  'COTT',
  ' JR.',
  'LINS',
  'OPER',
  'TERS',
  'MITH',
  'HUNE',
  'OONS',
  'YDEN',
  'OMEY',
  'RNER',
  'RAN,',
  'OSEN',
  'LUNT',
  'MMIS',
  'OUSE',
  'HALL',
  'EVEN',
  'PAUL',
  'NNET',
  'UNDS',
  'BURR',
  'HOFE',
  'ERTS',
  'SIDY',
  'THAL',
  ', JR',
  'FLER',
  'AINE',
  'HEEN',
  'NSON',
  'CKER',
  'TEIN',
  'NDER',
  'NEDY',
  'CRUZ',
  'DALL',
  'LLIS',
  'ASSO',
  ' JR.',
  'TMAN',
  'RDIN',
  'ORTH',
  ' III',
  'RAPO',
  'RRAY',
  'INES',
  'LLEN',
  'RNYN',
  'WELL',
  'ENZI',
  'OKER',
  'YDEN',
  'REED',
  'KING',
  'HRAN',
  'WELL',
  'RREN',
  'ELBY'];
let senators = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
let democratsfilter = ["Thomas R Carper", "John W Hickenlooper", "Gary C Peters", "Tina Smith", "Christopher A Coons", "Ron L Wyden", "Mark R Warner", "Jacklyn S Rosen", "Sheldon Whitehouse", "Michael F Bennet", "Richard Blumenthal", "Timothy M Kaine", "Jeanne Shaheen", "Dianne Feinstein", "Benjamin L Cardin", "Tammy Duckworth", "Joseph Manchin, Iii", "Patty Murray", "Chris Van Hollen", "Maria Cantwell", "Cory A Booker", "Ron Wyden", "Jack Reed", "Maria E Cantwell", "Elizabeth Warren"]
let republicansfilter = ["John Boozman", "Debra S Fischer", "William F Hagerty, Iv", "Shelley M Capito", "Daniel S Sullivan", "Lindsey Graham", "Thomas H Tuberville", "Rick Scott", "Tim Scott", "Susan M Collins", "Tina Smith", "John R Thune", "Patrick J Toomey", "Roy Blunt", "Cynthia M Lummis", "Roger W Marshall", "John Hoeven", "Rand Paul", "Mike Rounds", "Richard M Burr", "James M Inhofe", "William Cassidy", "Ron Johnson", "Roger F Wicker", "John N Kennedy", "Rafael E Cruz", "Thomas R Tillis", "John A Barrasso", "Robert J Portman", "Michael D Crapo", "Steve Daines", "John Cornyn", "Richard C Shelby"]
// angusking = ind
// concat thomas udall and tom s udall
// The following arrays will be how we access all of the data
twenty_twenty_two = [];
twenty_twenty_one = [];
twenty_twenty = [];
twenty_nineteen = [];
let data;

this_week = [];
this_month = [];
const yr = new Date();
this_year = "" + yr.getDate();
//console.log(typeof this_year);
these_five_years = [];

let senatorarray = [];
const generateTest = async () => {
  const response = await fetch("https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json");
  data = await response.json();
  for (i = 0; i < data.length; i++) {
    if ((data[i].transaction_date.slice(-4)) === '2022') {
      twenty_twenty_two.unshift(data[i]);
    }
    else if ((data[i].transaction_date.slice(-4)) === '2021') {
      twenty_twenty_one.unshift(data[i]);
    }
    else if ((data[i].transaction_date.slice(-4)) === '2020') {
      twenty_twenty.unshift(data[i]);
    }
    else if ((data[i].transaction_date.slice(-4)) === '2019') {
      twenty_nineteen.unshift(data[i]);
    }
    // let senatorname = data[i].senator
    // if (senatorarray.indexOf(senatorname) != -1) {
    //   indexnumber = senatorarray.indexOf(senatorname)
    //   senatorarray[indexnumber].push(data[i])
    // }
    // else {
    //   senatorname =[]
    //   senatorarray.push(senatorname)
    //   indexnumber = senatorarray.indexOf(senatorname)
    //   senatorarray[indexnumber].push(data[i])
    // }
    // console.log(senatorarray);

    // if (data[i].transaction_date.slice(-2) === this.year) {

    // }
    // for (senator in senatornames) {
    //   datasenatorname = data[i].senator
    //   indexnumber = senatornames.indexOf
    //   if data[i]
    // }

    // if (senatornames.indexOf(data[i].senator) != 0) {
    //   senatornames[senatornames.indexOf(data[i].senator)].push(data[i]);
    //   console.log("pushed")
    // }

    // currentsenatorname = data[0].senator
    // // for (let senator of senatornames) {
    // //   if (currentsenatorname == senator) {
    // senatornames.currentsenatorname.push(data[0])
    // //   }
    // // }

    if (senatornames.indexOf(data[i].senator) > -1) {
      senators[senatornames.indexOf(data[i].senator)].push(data[i]);
    }
    else {
      //console.log("ERROR PREVENTED");
    }


    // console.log(data[i])
    //   let senatorname = data[i].senator;
    //   arraytitle = senatorname + "array"
    //   if (String(arraytitle) === "undefined" || !Array.isArray(arraytitle)) {
    //     String(arraytitle) = []
    //     String(arraytitle) += data[i]
    //   }
    //   else {
    //     String(arraytitle) += data[i]



  }
};
//   for (i = 0; i < senators.length; i++) {
//     for (b = 0; b < democratslist.length; b++) {
//       if (senators[i][0].senator == democratslist[b]){
//         democratsfilter.push(senators[i])
//       }
//     }
//   }
//   for (i = 0; i < senators.length; i++) {
//     for (b = 0; b < republicanslist.length; b++) {
//       if (senators[i][0].senator == republicanslist[b]){
//         republicansfilter.push(senators[i])
//       }
//     }
//   }
generateTest();
setTimeout(() => {
  // for (i = 0; i < senators.length; i++) {
  //   console.log(senators[i]);
  // }
  // for (senatordata of senators[0]) {
  //   console.log(senatordata.transaction_date);
  //   console.log(senatordata.senator);
  // }
  // console.log(senators.length);

  // for (i = 0; i < senators[15].length; i++) {
  //   console.log(senators[15][i].senator)
  // }
  console.log(senators[15][4]);
  // console.log(typeof senators[4][0].amount);
  // Year 2022
  const twentytwotext = document.querySelector("#twentytwotext");
  let twentytwotextprep = ""
  for (trade of twenty_twenty_two) {
    twentytwotextprep += '<blockquote> Senator: ' + trade.senator + ' <br> Transaction Date: ' + trade.transaction_date + '<br> Amount: ' + trade.amount + '<br> Asset Type: ' + trade.asset_type + '<br> Ticker: ' + trade.ticker + '<br> Owner: ' + trade.owner + '</blockquote>';
    //console.log(twentytwotextprep);
  }
  twentytwotext.innerHTML = twentytwotextprep;



}, 1000);

let main = document.querySelector("#main");
let maintwo = document.querySelector("#maintwo");
let mainthree = document.querySelector("#mainthree");



// const ZMAN = document.querySelector("#ZMAN");
// ZMAN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[0]) {
// //     mainthree.innerHTML += '<footer class="card-footer">   <p class="card-footer-item">      <span> Amount: ' + trade.amount + '</span>     </p>     <p class="card-footer-item">       <span> Date: ' + trade.transaction_date + ' </span>     </p>  <p class="card-footer-item">       <span> Ticker: ' + trade.ticker; + ' </span>     </p> <p class="card-footer-item">       <span>Asset Description: ' + trade.asset_description + ' </span>     </p> <p class="card-footer-item">       <span> Disclosure Date: ' + trade.disclosure_date; + ' </span>     </p><p class="card-footer-item">       <span> Owner: ' + trade.owner; + ' </span>     </p><p class="card-footer-item">       <span> Type: ' + trade.type + ' </span>     </p></footer>'
// //   }
// // });
// // const ZMAN=document.querySelector("#ZMAN");
// // ZMAN.addEventListener("click", (e) => { 
// //   main.classList.add("is-hidden"); 
// //   maintwo.classList.remove("is-hidden"); 
// //   mainthree.classList.remove("is-hidden"); 
// //   for (trade of senators[0]) { 
// //     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
// //     }
// //  });




// const ZMAN = document.querySelector("#ZMAN");
// ZMAN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[0]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const CHER = document.querySelector("#CHER");
// CHER.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[1]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const PITO = document.querySelector("#PITO");
// PITO.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[2]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const IVAN = document.querySelector("#IVAN");
// IVAN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[3]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const AHAM = document.querySelector("#AHAM");
// AHAM.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[4]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const ILLE = document.querySelector("#ILLE");
// ILLE.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[5]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const RPER = document.querySelector("#RPER");
// RPER.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[6]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const COTT = document.querySelector("#COTT");
// COTT.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[7]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const LINS = document.querySelector("#LINS");
// LINS.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[8]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const OPER = document.querySelector("#OPER");
// OPER.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[9]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const TERS = document.querySelector("#TERS");
// TERS.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[10]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const MITH = document.querySelector("#MITH");
// MITH.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[11]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const HUNE = document.querySelector("#HUNE");
// HUNE.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[12]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const OONS = document.querySelector("#OONS");
// OONS.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[13]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const YDEN = document.querySelector("#YDEN");
// YDEN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[14]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const OMEY = document.querySelector("#OMEY");
// OMEY.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[15]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const RNER = document.querySelector("#RNER");
// RNER.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[16]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const OSEN = document.querySelector("#OSEN");
// OSEN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[17]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const LUNT = document.querySelector("#LUNT");
// LUNT.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[18]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const MMIS = document.querySelector("#MMIS");
// MMIS.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[19]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const OUSE = document.querySelector("#OUSE");
// OUSE.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[20]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const HALL = document.querySelector("#HALL");
// HALL.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[21]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const EVEN = document.querySelector("#EVEN");
// EVEN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[22]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const PAUL = document.querySelector("#PAUL");
// PAUL.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[23]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const NNET = document.querySelector("#NNET");
// NNET.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[24]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const UNDS = document.querySelector("#UNDS");
// UNDS.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[25]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const BURR = document.querySelector("#BURR");
// BURR.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[26]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const HOFE = document.querySelector("#HOFE");
// HOFE.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[27]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const ERTS = document.querySelector("#ERTS");
// ERTS.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[28]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const SIDY = document.querySelector("#SIDY");
// SIDY.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[29]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const THAL = document.querySelector("#THAL");
// THAL.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[30]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const FLER = document.querySelector("#FLER");
// FLER.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[31]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const AINE = document.querySelector("#AINE");
// AINE.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[32]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const HEEN = document.querySelector("#HEEN");
// HEEN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[33]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const NSON = document.querySelector("#NSON");
// NSON.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[34]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const CKER = document.querySelector("#CKER");
// CKER.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[35]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const TEIN = document.querySelector("#TEIN");
// TEIN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[36]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const NDER = document.querySelector("#NDER");
// NDER.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[37]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const NEDY = document.querySelector("#NEDY");
// NEDY.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[38]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const CRUZ = document.querySelector("#CRUZ");
// CRUZ.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[39]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const DALL = document.querySelector("#DALL");
// DALL.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[40]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const LLIS = document.querySelector("#LLIS");
// LLIS.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[41]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const ASSO = document.querySelector("#ASSO");
// ASSO.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[42]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const TMAN = document.querySelector("#TMAN");
// TMAN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[43]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const RDIN = document.querySelector("#RDIN");
// RDIN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[44]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const ORTH = document.querySelector("#ORTH");
// ORTH.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[45]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const RAPO = document.querySelector("#RAPO");
// RAPO.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[46]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const RRAY = document.querySelector("#RRAY");
// RRAY.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[47]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const INES = document.querySelector("#INES");
// INES.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[48]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const LLEN = document.querySelector("#LLEN");
// LLEN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[49]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const RNYN = document.querySelector("#RNYN");
// RNYN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[50]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const WELL = document.querySelector("#WELL");
// WELL.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[51]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const ENZI = document.querySelector("#ENZI");
// ENZI.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[52]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const OKER = document.querySelector("#OKER");
// OKER.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[53]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const YDENNN = document.querySelector("#YDENNN");
// YDENNN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[54]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const REED = document.querySelector("#REED");
// REED.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[55]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const KING = document.querySelector("#KING");
// KING.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[56]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const HRAN = document.querySelector("#HRAN");
// HRAN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[57]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const WELLL = document.querySelector("#WELLL");
// WELLL.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[58]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const RREN = document.querySelector("#RREN");
// RREN.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[59]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });
// const ELBY = document.querySelector("#ELBY");
// ELBY.addEventListener("click", (e) => {
//   main.classList.add("is-hidden");
//   maintwo.classList.remove("is-hidden");
//   mainthree.classList.remove("is-hidden");
//   for (trade of senators[60]) {
//     mainthree.innerHTML += '<footer class="card-footer"> <p class="card-footer-item"> <span> Amount: ' + trade.amount + '</span> </p> <p class="card-footer-item"> <span> Date: ' + trade.transaction_date + ' </span> </p> <p class="card-footer-item"> <span> Ticker: ' + trade.ticker; + ' </span> </p> <p class="card-footer-item"> <span>Asset Description: ' + trade.asset_description + ' </span> </p> <p class="card-footer-item"> <span> Disclosure Date: ' + trade.disclosure_date; + ' </span> </p><p class="card-footer-item"> <span> Owner: ' + trade.owner; + ' </span> </p><p class="card-footer-item"> <span> Type: ' + trade.type + ' </span> </p></footer>'
//   }
// });

// // senator last for = [#zman,#elby,#king,#mith]
// // for row 1 id^
// for (senator of senatorlast) {
//   senatorquery = document.querySelector(senator)
//   senatorquery.addEventListener
// }