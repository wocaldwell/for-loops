var byFive = 5;
for (var i = 0; byFive < 120; i++) {
    console.log("Current value is " + byFive);
    byFive += 5;
}

var divider = 4096;
for (var i = 0; divider !== 1; i++) {
    console.log("Current value is " + divider);
    divider /= 2;
}

var presidents = [
"George Washington",
"John Adams",
"Thomas Jefferson",
"James Madison",
"James Monroe",
"John Quincy Adams",
"Andrew Jackson",
"Martin Van Buren",
"William H. Harrison",
"John Tyler",
"James K. Polk",
"Zachary Taylor",
"Millard Fillmore",
"Franklin Pierce",
"James Buchanan",
"Abraham Lincoln",
"Andrew Johnson",
"Ulysses S. Grant",
"Rutherford B. Hayes",
"James A. Garfield",
"Chester A. Arthur",
"Grover Cleveland",
"Benjamin Harrison",
"Grover Cleveland",
"William McKinley",
"Theodore Roosevelt",
"William H. Taft",
"Woodrow Wilson",
"Warren G. Harding",
"Calvin Coolidge",
"Herbert Hoover",
"Franklin D. Roosevelt",
"Harry S. Truman",
"Dwight D. Eisenhower",
"John F. Kennedy",
"Lyndon B. Johnson",
"Richard M. Nixon",
"Gerald R. Ford",
"Jimmy Carter",
"Ronald Reagan",
"George H. W. Bush",
"Bill Clinton",
"George W. Bush",
"Barack Obama"
]

var potusNum = 1;

for (i = 0; i < presidents.length; i++) {
    console.log("President #" + potusNum + " was " + presidents[i]);
    potusNum += 1;
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var i in antSpecies) {
    console.log(i)
}







