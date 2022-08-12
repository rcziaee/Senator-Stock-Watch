let democratslist = ["Kyrsten Sinema", "Mark Kelly", "Dianne Feinstein", "Alex Padilla", "Michael Bennet", "John Hickenlooper", "Richard Blumenthal", "Chris Murphy", "Tom Carper", "Chris Coons", "Jon Ossoff", "Raphael Warnock", "Brian Schatz", "Mazie Hirono", "Dick Durbin", "Tammy Duckworth", "Ben Cardin", "Chris Van Hollen", "Elizabeth Warren", "Ed Markey", "Debbie Stabenow", "Gary Peters", "Amy Klobuchar", "Tina Smith", "Jon Tester", "Catherine Cortez Masto", "Jacky Rosen", 'Jeanne Shaheen', 'Maggie Hassan', 'Bob Menendez', 'Cory Booker', 'Martin Heinrich', 'Ben Ray Lujan', 'Chuck Schumer', 'Kirsten Gillibrand', 'Sherrod Brown', 'Ron Wyden', 'Jeff Merkley', 'Bob Casey Jr.', 'Jack Reed', 'Sheldon Whitehouse', 'Patrick Leahy', 'Mark Warner', "Tim Kaine", "Patty Murray", "Maria Cantwell", "Joe Manchin", "Tammy Baldwin"]
let republicanslist = ['Richard Shelby', 'Tommy Tuberville', 'Lisa Murkowski', 'Dan Sullivan', 'John Boozman', 'Tom Cotton', 'Marco Rubio', 'Rick Scott', 'Mike Crapo', 'Jim Risch', 'Todd Young', 'Mike Braun', 'Chuck Grassley', 'Joni Ernst', 'Jerry Moran', 'Roger Marshall', 'Mitch McConnell', 'Rand Paul', 'Bill Cassidy', 'John Kennedy', 'Susan Collins', 'Roger Wicker', 'Cindy Hyde-Smith', 'Roy Blunt', 'Josh Hawley', 'Steve Daines', 'Deb Fischer', 'Ben Sasse', 'Richard Burr', 'Thom Tillis', 'John Hoeven', 'Kevin Cramer', 'Rob Portman', 'Jim Inhofe', 'James Lankford', 'Pat Toomey', 'Lindsey Graham', 'Tim Scott', 'John Thune', 'Mike Rounds', 'Marsha Blackburn', 'Bill Hagerty', 'John Cornyn', 'Ted Cruz', 'Mike Lee', 'Mitt Romney', 'Shelley Moore Capito', 'Ron Johnson', 'John Barrasso', 'Cynthia Lummis']
let senators = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],];
let senatorarray = [];
const generateTest = async () => {
  const response = await fetch("https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json");
  data = await response.json();
  for (i = 0; i < data.length; i++) {
    senators[senatornames.indexOf(data[i].senator)].unshift(data[i]);
  }
}
generateTest();
let senatornames = ["John Boozman", "Debra S Fischer", "William F Hagerty, Iv", "Shelley M Capito", "Daniel S Sullivan", "Lindsey Graham", "Thomas H Tuberville", "Thomas R Carper", "Rick Scott", "A. Mitchell Mcconnell, Jr.", "Susan M Collins", "John W Hickenlooper", "Gary C Peters", "Tina Smith", "John R Thune", "Christopher A Coons", "Ron L Wyden", "Patrick J Toomey", "Mark R Warner", "Jerry Moran,", "Jacklyn S Rosen", "Roy Blunt", "Cynthia M Lummis", "Sheldon Whitehouse", "Roger W Marshall", "John Hoeven", "Rand Paul", "Angus S King, Jr.", "Michael F Bennet", "Mike Rounds", "Richard M Burr", "Ladda Tammy Duckworth", "James M Inhofe", "Pat Roberts", "William Cassidy", "Richard Blumenthal", "David A Perdue , Jr", "Kelly Loeffler", "Timothy M Kaine", "Jeanne Shaheen", "Ron Johnson", "Roger F Wicker", "Dianne Feinstein", "Lamar Alexander", "John N Kennedy", "Rafael E Cruz", "Thomas Udall", "John F Reed", "Thomas R Tillis", "John A Barrasso", "Robert P Casey, Jr.", "Robert J Portman", "Benjamin L Cardin", "Tammy Duckworth", "Joseph Manchin, Iii", "Michael D Crapo", "Patty Murray", "Steve Daines", "Chris Van Hollen", "John Cornyn", "Maria Cantwell", "Michael  B Enzi", "Cory A Booker", "Ron Wyden", "Jack Reed", "Angus S King", "Thad Cochran", "Roy D Blunt", "Maria E Cantwell", "Ronald L Wyden", "Michael B Enzi", "Rafael Edward (Ted) Cruz", "Elizabeth Warren", "Richard C Shelby", "Tom S Udall"]
// for (i = 0; i < senators.length; i++) {
//   for (b = 0; b < democratslist.length; b++) {
//     if (senators[i][0].senator == democratslist[b]){
//       democratsfilter.push(senators[i])
//     }
//   }
// }
// for (i = 0; i < senators.length; i++) {
//   for (b = 0; b < republicanslist.length; b++) {
//     if (senators[i][0].senator == republicanslist[b]){
//       republicansfilter.push(senators[i])
//     }
//   }
// }
console.log(senators[0][0])