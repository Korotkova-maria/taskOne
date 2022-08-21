let str =
  "Старший братец ПОНЕДЕЛЬНИК –  \nработяга , не бездельник.  \nОн неделю открывает \nвсех трудиться зазывает. \n\n ВТОРНИК следует за братом \nу него идей богато. \n\nА потом СРЕДА - сестрица, \nне пристало ей лениться. \n\nБрат ЧЕТВЕРГ и так, и сяк, \nон мечтательный чудак. \n\n ПЯТНИЦА - сестра сумела \nпобыстрей закончить дело. \n\nПредпоследний брат СУББОТА \nне выходит на работу. \n\nВ гости ходит ВОСКРЕСЕНЬЕ , \nочень любит угощенье";

let weekDays = [
  "ПОНЕДЕЛЬНИК",
  "ВТОРНИК",
  "СРЕДА",
  "ЧЕТВЕРГ",
  "ПЯТНИЦА",
  "СУББОТА",
  "ВОСКРЕСЕНЬЕ",
];

let weekEngDays = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

let wordsArr = str.split(" ");

for (let word = 0; word < wordsArr.length; word++) {
  for (let day = 0; day < weekDays.length; day++) {
    if (wordsArr[word] == weekDays[day]) {
      wordsArr[word] = weekEngDays[day];
    }
  }
}

console.log(wordsArr.join(" "));
