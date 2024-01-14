export type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

const days: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export type DayInNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const getDay = (dayInNum: DayInNumber): Day => {
  return days[dayInNum];
}