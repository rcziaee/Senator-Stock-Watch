let one = "one";
let senatornames = ['John Boozman', 'Debra S Fischer', 'William F Hagerty Iv', 'Shelley M Capito', 'Daniel S Sullivan', 'Lindsey Graham', 'Thomas H Tuberville', 'Thomas R Carper', 'Rick Scott', 'A. Mitchell Mcconnell Jr.', 'Susan M Collins', 'John W Hickenlooper', 'Gary C Peters', 'Tina Smith', 'John R Thune', 'Christopher A Coons', 'Ron L Wyden', 'Patrick J Toomey', 'Mark R Warner', 'Jerry Moran', 'Jacklyn S Rosen', 'Roy Blunt', 'Cynthia M Lummis', 'Sheldon Whitehouse', 'Roger W Marshall', 'John Hoeven', 'Rand Paul', 'Michael F Bennet', 'Mike Rounds', 'Richard M Burr', 'James M Inhofe', 'Pat Roberts,William Cassidy', 'Richard Blumenthal', 'David A Perdue  Jr', 'Kelly Loeffler', 'Timothy M Kaine', 'Jeanne Shaheen', 'Ron Johnson', 'Roger F Wicker', 'Dianne Feinstein', 'Lamar Alexander', 'John N Kennedy', 'Rafael E Cruz,Thomas Udall', 'Thomas R Tillis', 'John A Barrasso', 'Robert P Casey Jr.', 'Robert J Portman', 'Benjamin L Cardin', 'Tammy Duckworth', 'Joseph Manchin Iii', 'Michael D Crapo', 'Patty Murray', 'Steve Daines', 'Chris Van Hollen', 'John Cornyn', 'Maria Cantwell', 'Michael  B Enzi', 'Cory A Booker', 'Ron Wyden', 'Jack Reed', 'Angus S King', 'Thad Cochran', 'Maria E Cantwell', 'Elizabeth Warren', 'Richard C Shelby'];
let senators = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
let democratsfilter = ["Thomas R Carper", "John W Hickenlooper", "Gary C Peters", "Tina Smith", "Christopher A Coons", "Ron L Wyden", "Mark R Warner", "Jacklyn S Rosen", "Sheldon Whitehouse", "Michael F Bennet", "Richard Blumenthal", "Timothy M Kaine", "Jeanne Shaheen", "Dianne Feinstein", "Benjamin L Cardin", "Tammy Duckworth", "Joseph Manchin, Iii", "Patty Murray", "Chris Van Hollen", "Maria Cantwell", "Cory A Booker", "Ron Wyden", "Jack Reed", "Maria E Cantwell", "Elizabeth Warren"]
let republicansfilter = ["John Boozman", "Debra S Fischer", "William F Hagerty, Iv", "Shelley M Capito", "Daniel S Sullivan", "Lindsey Graham", "Thomas H Tuberville", "Rick Scott", "Tim Scott", "Susan M Collins", "Tina Smith", "John R Thune", "Patrick J Toomey", "Roy Blunt", "Cynthia M Lummis", "Roger W Marshall", "John Hoeven", "Rand Paul", "Mike Rounds", "Richard M Burr", "James M Inhofe", "William Cassidy", "Ron Johnson", "Roger F Wicker", "John N Kennedy", "Rafael E Cruz", "Thomas R Tillis", "John A Barrasso", "Robert J Portman", "Michael D Crapo", "Steve Daines", "John Cornyn", "Richard C Shelby"]
figureslist = document.querySelectorAll("figure")
//console.log(figureslist)

// angusking = ind
// fixed retired people who arent retired
// square pictures
// The following arrays will be how we access all of the data
// sort trades by date
twenty_twenty_two = [];
twenty_twenty_one = [];
twenty_twenty = [];
twenty_nineteen = [];
twenty_eighteen = [];
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
    else if ((data[i].transaction_date.slice(-4)) === '2018') {
      twenty_eighteen.unshift(data[i]);
    }

    if (senatornames.indexOf(data[i].senator) > -1) {
      senators[senatornames.indexOf(data[i].senator)].push(data[i]);
    }
    else {

    }

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
  //console.log(senators[15][4]);
  // console.log(typeof senators[4][0].amount);
  // Year 2022
  // const twentytwotext = document.querySelector("#twentytwotext");
  // let twentytwotextprep = ""
  // console.log(twentytwotext);
  // for (trade of twenty_twenty_two) {
  //   twentytwotextprep += '<blockquote> Senator: ' + trade.senator + ' <br> Transaction Date: ' + trade.transaction_date + '<br> Amount: ' + trade.amount + '<br> Asset Type: ' + trade.asset_type + '<br> Ticker: ' + trade.ticker + '<br> Owner: ' + trade.owner + '</blockquote>';
  //   //console.log(twentytwotextprep);
  // }

  // twentytwotext.innerHTML = twentytwotextprep;

  // const twentyonetext = document.querySelector("#twentyonetext");
  // let twentyonetextprep = ""
  // for (trade of twenty_twenty_one) {
  //   twentyonetextprep += '<blockquote> Senator: ' + trade.senator + ' <br> Transaction Date: ' + trade.transaction_date + '<br> Amount: ' + trade.amount + '<br> Asset Type: ' + trade.asset_type + '<br> Ticker: ' + trade.ticker + '<br> Owner: ' + trade.owner + '</blockquote>';
  //   console.log(test);
  // }

  // twentyonetext.innerHTML = twentyonetextprep;



}, 1000);

let main = document.querySelector("#main");
let maintwo = document.querySelector("#maintwo");
let mainthree = document.querySelector("#mainthree");
for (let senator of senators){
  console.log(senator[0].senator)
}

let backbutton = document.querySelector("#backbutton");
console.log(backbutton)
backbutton.addEventListener("click", (e) => {
  backbutton.classList.add("is-hidden");
  window.location.reload();
});


allsenators = document.querySelectorAll(".senatorcard")
idarray = []
for (let senator of allsenators) {
  idarray.push('#' + senator.id)
}
x = 0
console.log(idarray)
for (let senator of idarray) {
  senatorquery = document.querySelector(senator)
  senatorquery.addEventListener("click", (e) => {
    main.classList.add("is-hidden");
    maintwo.classList.remove("is-hidden");
    mainthree.classList.remove("is-hidden");
    backbutton.classList.remove("is-hidden");
    window.scrollTo(0, 0);
    for (trade of senators[idarray.indexOf(senator)]) {
      mainthree.innerHTML += '<blockquote> Amount: ' + trade.amount + '<br> Date: ' + trade.transaction_date + ' <br> Ticker: ' + trade.ticker + ' <br> Asset Description: ' + trade.asset_description + ' <br> Disclosure Date: ' + trade.disclosure_date + ' <br> Owner: ' + trade.owner + ' <br> Type: ' + trade.type + ' </blockquote>'
      x++
    }
  })
}




