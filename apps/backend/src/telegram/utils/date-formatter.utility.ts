export const fromMilisecondsToDate = (miliseconds: number) => {
  return new Date(miliseconds * 1000);
}

export const formatDateToDayMonthYear = (date: Date, splitter: string = ".") => {
  let day: string|number = date.getDate();
  let month: string|number = date.getMonth();
  const year = date.getFullYear();

  if (`${day}`.length === 1) day = `0${day}`;
  if (`${month}`.length === 1) month = `0${month}`;

  return `${day}${splitter}${month}${splitter}${year}`;
}