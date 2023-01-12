
import moment from "moment";

const days = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

const getExactDatesBewtweenTwoDates = (sdate, ldate, days) => {
  let Dates = [];
  //convert string date to moment date
  let StartDate = moment(sdate, "DD/MM/YYYY");
  let LastDate = moment(ldate, "DD/MM/YYYY");

  let i = 0;
  for (let j = 0; j < days.length; j++) {
    i = 0;
    let sdate = StartDate.clone();
    while (sdate.day(i + days[j]).isSameOrBefore(LastDate)) {
      if (moment(sdate.clone().format("DD/MM/YYYY"), "DD/MM/YYYY").isSameOrAfter(StartDate)) {
        Dates.push(sdate.clone().format("DD/MM/YYYY"));
      }
      //loop to next week
      i = 7;
    }
  }
  return Dates;
};

const test = getExactDatesBewtweenTwoDates("01/01/2023", "14/01/2023", [days.mon,days.tue,]);
console.log(test);

