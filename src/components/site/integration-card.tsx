import {
  ArrowRight,
  CreditCard,
  Gift,
  LayoutDashboard,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  MessagesSquare,
  Package,
  PackageCheck,
  Repeat,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Tags,
  TicketPercent,
  Truck,
  Users,
  Wallet,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import type { Integration, IntegrationIcon } from "@/content/integraciones";

const ICONS: Record<IntegrationIcon, LucideIcon> = {
  package: Package,
  bag: ShoppingBag,
  users: Users,
  ticket: TicketPercent,
  tags: Tags,
  smartphone: Smartphone,
  dashboard: LayoutDashboard,
  card: CreditCard,
  wallet: Wallet,
  truck: Truck,
  pin: MapPin,
  tracking: PackageCheck,
  store: Store,
  mail: Mail,
  megaphone: Megaphone,
  gift: Gift,
  "wallet-cards": WalletCards,
  repeat: Repeat,
  reviews: MessageSquareText,
  sparkles: Sparkles,
  chat: MessagesSquare,
};

type Labels = {
  available: string;
  soon: string;
  more: string;
  plans: { all: string; growth: string; scale: string };
};

/* ─── One integration: icon, name, what it does, its status and the plan that includes it ─── */

export function IntegrationCard({ item, labels, href }: { item: Integration; labels: Labels; href?: string }) {
  const Icon = ICONS[item.icon];
  const soon = item.status === "soon";
  return (
    <article
      className={`flex h-full flex-col rounded-[24px] border p-6 md:p-7 ${
        soon ? "border-dashed border-line-light" : "border-card-light-border bg-card-light"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-card-light-border bg-white">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span
          className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
            soon ? "border border-line-light" : "bg-ink text-white"
          }`}
        >
          {soon ? labels.soon : labels.available}
        </span>
      </div>
      <h3 className="mt-5 text-[20px] font-bold leading-[1.2] tracking-[-0.02em]">{item.name}</h3>
      <p className="mt-2 text-[15px] leading-[1.6]">{item.description}</p>
      {(item.plan || href) && (
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pt-5 text-[13px] font-medium">
          {item.plan && <span>{labels.plans[item.plan]}</span>}
          {href && (
            <a href={href} className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline">
              {labels.more}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
