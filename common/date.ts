import {
  kstFormat,
  getDateDistance as tossGetDateDistance,
} from '@toss/date';

/**
 * @description toss/date의 getDateDistance를 랩핑해 Y년 M개월 형식의 텍스트를 리턴
 * @returns string
 * @example '1년 2개월'
 */
export const getDateDistance = (startDate: Date, endDate: Date | null, fallback?: string): string => {
  const startFromEnd = [
    startDate,
    endDate
  ].map((date) => date ? kstFormat(date, 'yyyy.MM') : '현재').join(' ~ ');
  
  if (!endDate) return `${startFromEnd} (${fallback ?? '진행중'})`;

  const timeUnits = tossGetDateDistance(startDate, endDate);

  const months = Math.round(timeUnits.days / 30);
  const years = Math.floor(months / 12);

  const dateRange = [
    { value: years, suffix: '년' },
    { value: months % 12, suffix: '개월' }
  ].filter(({ value }) => value > 0)
    .map(({ value, suffix }) => `${value}${suffix}`)
    .join(' ');

  return `${startFromEnd} (${dateRange})`;
}