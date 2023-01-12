import ArrowDown2 from "./icons/ArrowDown2"
import ArrowLeft from "./icons/ArrowLeft"
import ArrowLeft2 from "./icons/ArrowLeft2"
import ArrowRight from "./icons/ArrowRight"
import Call from "./icons/Call"
import Category from "./icons/Category"
import Fire from "./icons/Fire"
import Instagram from "./icons/Instagram"
import MagicStar from "./icons/MagicStar"
import Map from "./icons/Map"
import SearchNormal from "./icons/SearchNormal"
import Send from "./icons/Send"
import Send2 from "./icons/Send2"
import ShoppingCart from "./icons/ShoppingCart"
import TicketDiscount from "./icons/TicketDiscount"
import Whatsapp from "./icons/Whatsapp"

export const icons = {
  "arrow-down-2": ArrowDown2,
  "arrow-left": ArrowLeft,
  "arrow-left-2": ArrowLeft2,
  "arrow-right": ArrowRight,
  "search-normal": SearchNormal,
  "shopping-cart": ShoppingCart,
  "ticket-discount": TicketDiscount,
  "magic-star": MagicStar,
  "send-2": Send2,
  call: Call,
  category: Category,
  fire: Fire,
  instagram: Instagram,
  map: Map,
  send: Send,
  whatsapp: Whatsapp,
}

export type IconName = keyof typeof icons
