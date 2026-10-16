declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Sparkles: LucideIcon;
  export const MapPin: LucideIcon;
  export const Compass: LucideIcon;
  export const Users: LucideIcon;
  export const Calendar: LucideIcon;
  export const Phone: LucideIcon;
  export const User: LucideIcon;
  export const UtensilsCrossed: LucideIcon;
  export const Send: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Heart: LucideIcon;
  export const Coffee: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Utensils: LucideIcon;
  export const Star: LucideIcon;
  export const Flame: LucideIcon;
  export const Eye: LucideIcon;
  export const Lock: LucideIcon;
  export const Clock: LucideIcon;
  export const Navigation: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Leaf: LucideIcon;
  export const Info: LucideIcon;
  export const X: LucideIcon;
  export const Trash2: LucideIcon;
  export const Plus: LucideIcon;
  export const Minus: LucideIcon;
  export const ShoppingBag: LucideIcon;
  export const Check: LucideIcon;
  export const Search: LucideIcon;
  export const MessageSquareQuote: LucideIcon;
  export const Globe: LucideIcon;
  export const Menu: LucideIcon;
  export const ShieldAlert: LucideIcon;

  const icons: Record<string, LucideIcon>;
  export default icons;
}
