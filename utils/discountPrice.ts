import { percentage } from "./percentage"

export function discountPrice(discount: number, total: number): number {
  return total - percentage(discount, total)
}
