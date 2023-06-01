import moment from "moment";

export const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
export function calculateDaysInMonth(selectedMonth: number): string[] {
  const daysInMonth: string[] = [];
  for (
    let i = 1;
    i <=
    moment(
      `${new Date().getFullYear()}-${selectedMonth + 1}`,
      "YYYY-MM"
    ).daysInMonth();
    i++
  ) {
    daysInMonth.push(
      moment()
        .set({
          year: new Date().getFullYear(),
          month: selectedMonth,
          date: i,
        })
        .toISOString()
    );
  }
  return daysInMonth;
}

export const daysOfTheWeekInPortuguese = [
  "Dom",
  "Seg",
  "Ter",
  "Qua",
  "Qui",
  "Sex",
  "Sab",
];

export function addZeroToNumberLessThanTen(number: number) {
  return number < 10 ? `0${number}` : number;
}
