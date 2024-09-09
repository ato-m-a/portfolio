import { getDateDistance } from '@/common/date';

interface EntityWithDate {
  startDate: Date;
  endDate: Date | null;
}

type PeriodSerializerReturns<T> = Omit<T, 'startDate' | 'endDate'> & { period: string };

export const periodSerializer = <
  T extends EntityWithDate & Record<string, any>
>(
  { startDate, endDate, ...restOf }: T,
  fallback?: string
): PeriodSerializerReturns<T> => ({
  ...restOf,
  period: getDateDistance(startDate, endDate, fallback)
});