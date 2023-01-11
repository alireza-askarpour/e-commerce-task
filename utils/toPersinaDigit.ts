const numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]

export function toPersinaDigit(text: string | number) {
  return text.toString().replace(/[0-9]/g, w => numbers[+w])
}
