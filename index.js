const dgevandeliDge = new Date().getDay();
let shetyobineba;

switch (dgevandeliDge) {
  case 0:
    shetyobineba = "Today is Sunday, it's a weekend.";
    break;
  case 1:
    shetyobineba = "Today is Monday, it's a workday.";
    break;
  case 2:
    shetyobineba = "Today is Tuesday, it's a workday.";
    break;
  case 3:
    shetyobineba = "Today is Wednesday, it's a workday.";
    break;
  case 4:
    shetyobineba = "Today is Thursday, it's a weekend.";
    break;
  case 5:
    shetyobineba = "Today is Friday, it's a workday.";
    break;
  case 6:
    shetyobineba = "Today is Saturday, it's a weekend.";
    break;
  default:
    shetyobineba = "Invalid day.";
    break;
}

console.log(shetyobineba);
