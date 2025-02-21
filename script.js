const day = prompt("Enter a day").toLowerCase();
if (day === "monday") {
  console.log("It's Monday!");
  console.log("Go to work");
} else if (day === "tuesday") {
  console.log("I hate Tuesday");
} else if (day === "wednesday" || day === "thursday") {
  console.log("It's midweek!");
} else if (day === "friday") {
  console.log("weekend is coming");
} else if (day === "saturday") {
  console.log("it's weekend");
} else if (day === "sunday") {
  console.log("it's time to relax");
} else {
  console.log("Not a valid day");
}

// same logic with switch
switch (day) {
  case "monday":
    console.log("It's Monday!");
    console.log("Go to work");
    break;
  case "tuesday":
    console.log("I hate Tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("It's midweek!");
    break;
  case "friday":
    console.log("weekend is coming");
    break;
  case "saturday":
    console.log("it's weekend");
    break;
  case "sunday":
    console.log("it's time to relax");
    break;
  default:
    console.log("Not a valid day");
    break;
}
