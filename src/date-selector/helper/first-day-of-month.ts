export function getFirstDayOfMonth(date : Date) : Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1))
}