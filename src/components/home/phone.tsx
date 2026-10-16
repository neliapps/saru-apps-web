"use client";

import { motion } from "framer-motion";
import {
  Search,
  ShoppingBag,
  Heart,
  Home,
  User,
  ChevronLeft,
  Star,
  RefreshCw,
} from "lucide-react";
import type { ReactNode } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { ease } from "./primitives";

/* The phone is drawn at 300×618. Screens are laid out for that size;
   use <ScaledPhone> to render it smaller without breaking the layout. */

export const PHONE_W = 300;
export const PHONE_H = 618;

export const frameStyle = {
  background: "linear-gradient(145deg, #3a3a3c 0%, #1a1a1c 30%, #0d0d0e 70%, #2a2a2c 100%)",
  boxShadow: "0 0 0 2px #2c2c2e, inset 0 0 0 2px #4a4a4c, 0 60px 120px -24px rgba(0,0,0,0.55)",
};

type Product = { name: string; price: string; img: string };

function useMockups() {
  const { dict } = useDictionary();
  return dict.mockups as Record<string, any> & { products: Product[] };
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? "#fff" : "#0a0a0a";
  return (
    <div className="absolute inset-x-0 top-[15px] z-10 flex items-center justify-between px-[28px] text-[12px] font-semibold" style={{ color: c }}>
      <span>9:41</span>
      <span className="flex items-center gap-[4px]">
        <span className="flex h-[8px] items-end gap-[1.5px]">
          {[3, 5, 6, 8].map((h) => (
            <i key={h} className="block w-[2.5px] rounded-[1px]" style={{ height: h, background: c }} />
          ))}
        </span>
        <span className="ml-[2px] block h-[10px] w-[20px] rounded-[3px] border p-[1.5px]" style={{ borderColor: dark ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.4)" }}>
          <i className="block h-full w-[75%] rounded-[1.5px]" style={{ background: c }} />
        </span>
      </span>
    </div>
  );
}

export function Island() {
  return <div className="absolute left-1/2 top-[10px] z-20 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black" />;
}

export function PhoneFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="relative rounded-[50px] p-[9px]" style={{ width: PHONE_W, height: PHONE_H, ...frameStyle }}>
      <div className={`relative h-full w-full overflow-hidden rounded-[41px] ${dark ? "bg-[#0c0c0e] text-white" : "bg-white text-ink"}`}>
        <StatusBar dark={dark} />
        <Island />
        {children}
      </div>
    </div>
  );
}

export function ScaledPhone({ scale, children, dark }: { scale: number; children: ReactNode; dark?: boolean }) {
  return (
    <div className="relative" style={{ width: PHONE_W * scale, height: PHONE_H * scale }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ transform: `scale(${scale})` }}>
        <PhoneFrame dark={dark}>{children}</PhoneFrame>
      </div>
    </div>
  );
}

const icon = "h-[18px] w-[18px]";

function AppHeader({ title }: { title?: string }) {
  const m = useMockups();
  return (
    <div className="flex items-center justify-between px-[18px] pt-[50px] pb-[10px]">
      {title ? (
        <span className="flex items-center gap-1 text-[15px] font-bold">
          <ChevronLeft className={icon} strokeWidth={1.9} />
          {title}
        </span>
      ) : (
        <b className="text-[17px] font-extrabold tracking-[-0.03em]">{m.storeName}</b>
      )}
      <span className="flex items-center gap-3">
        <Search className={icon} strokeWidth={1.9} />
        <span className="relative">
          <ShoppingBag className={icon} strokeWidth={1.9} />
          <i className="absolute -right-1.5 -top-1 flex h-[13px] min-w-[13px] items-center justify-center rounded-full bg-ink px-[3px] text-[8px] font-bold not-italic text-white">
            2
          </i>
        </span>
      </span>
    </div>
  );
}

function TabBar({ active = 0 }: { active?: number }) {
  const items = [Home, Search, Heart, User];
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-around border-t border-black/[0.06] bg-white pb-[22px] pt-[10px]">
      {items.map((I, i) => (
        <I key={i} className={`${icon} ${i === active ? "text-ink" : "text-ink/35"}`} strokeWidth={i === active ? 2.2 : 1.9} />
      ))}
    </div>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <div>
      <div className="aspect-square overflow-hidden rounded-[12px] bg-[#f4f4f5]">
        <img src={`/brand/${p.img}`} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="mt-[6px] truncate text-[11px] font-medium">{p.name}</p>
      <p className="text-[11px] font-bold">{p.price}</p>
    </div>
  );
}

/* ─── Home of "tu tienda" ─── */

export function HomeScreen() {
  const m = useMockups();
  return (
    <>
      <AppHeader />
      <div className="relative mx-[14px] h-[150px] overflow-hidden rounded-[16px] bg-ink">
        <img src="/brand/modelo-parka.png" alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-[12px] left-[14px] text-white">
          <small className="block text-[9px] font-medium">{m.season}</small>
          <b className="block text-[17px] font-extrabold leading-tight tracking-[-0.02em]">{m.newCollection}</b>
          <span className="mt-[2px] inline-block border-b border-white text-[10px] font-semibold">{m.seeNow}</span>
        </div>
      </div>
      <div className="mt-[12px] flex gap-[6px] px-[14px]">
        {(m.chips as string[]).map((c, i) => (
          <span key={c} className={`rounded-full px-[10px] py-[5px] text-[10px] font-semibold ${i === 0 ? "bg-ink text-white" : "bg-[#f4f4f5]"}`}>
            {c}
          </span>
        ))}
      </div>
      <div className="mt-[12px] grid grid-cols-2 gap-[10px] px-[14px]">
        {m.products.map((p) => (
          <ProductCard key={p.name} p={p} />
        ))}
      </div>
      <TabBar />
    </>
  );
}

/* ─── Product detail with low stock ─── */

export function ProductScreen() {
  const m = useMockups();
  const p = m.products[3];
  return (
    <>
      <div className="relative h-[330px] bg-[#f4f4f5]">
        <img src={`/brand/${p.img}`} alt="" className="h-full w-full object-cover object-[50%_20%]" />
        <span className="absolute left-[14px] top-[48px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
          <ChevronLeft className="h-[16px] w-[16px]" strokeWidth={2} />
        </span>
        <span className="absolute right-[14px] top-[48px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
          <Heart className="h-[15px] w-[15px] fill-ink" strokeWidth={2} />
        </span>
      </div>
      <div className="px-[18px] pt-[14px]">
        <p className="text-[17px] font-bold tracking-[-0.02em]">{p.name}</p>
        <p className="text-[15px] font-semibold">{p.price}</p>
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="mt-[10px] flex items-center gap-[6px] text-[11px] font-semibold"
        >
          <motion.i
            className="block h-[7px] w-[7px] rounded-full bg-accent"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          {m.lowStock}
        </motion.p>
        <div className="mt-[12px] flex gap-[6px]">
          {["S", "M", "L", "XL"].map((s) => (
            <span
              key={s}
              className={`flex h-[32px] w-[40px] items-center justify-center rounded-[9px] text-[11px] font-semibold ${
                s === "M" ? "bg-ink text-white" : "border border-black/10"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-[14px] rounded-[12px] bg-ink py-[12px] text-center text-[12px] font-bold text-white">{m.addToCart}</div>
      </div>
    </>
  );
}

/* ─── Lock screen with push notifications that slide in ─── */

export function LockScreen() {
  const m = useMockups();
  const notifs = [
    { t: m.push1Title, b: m.push1Body, time: m.now },
    { t: m.push2Title, b: m.push2Body, time: m.minAgo },
    { t: m.push3Title, b: m.push3Body, time: m.minAgo },
  ];
  return (
    <div className="absolute inset-0 flex flex-col items-center bg-[radial-gradient(120%_70%_at_50%_0%,#1d2440_0%,transparent_60%),#0c0c0e]">
      <p className="mt-[64px] text-[14px] font-semibold">{m.lockDate}</p>
      <p className="text-[76px] font-semibold leading-none tracking-[-0.03em]">9:41</p>
      <div className="mt-[26px] flex w-full flex-col gap-[8px] px-[10px]">
        {notifs.map((n, i) => (
          <PushCard key={n.t} title={n.t} body={n.b} time={n.time} delay={0.35 + i * 0.45} />
        ))}
      </div>
    </div>
  );
}

export function AppIcon({ size = 30 }: { size?: number }) {
  const m = useMockups();
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-[22%] bg-ink font-extrabold tracking-[-0.04em] text-white"
      style={{ width: size, height: size, fontSize: size * 0.32 }}
    >
      {(m.storeName as string).split(" ").map((w) => w[0]).join("")}
    </span>
  );
}

export function PushCard({
  title,
  body,
  time,
  delay = 0,
  animated = true,
}: {
  title: string;
  body: string;
  time: string;
  delay?: number;
  animated?: boolean;
}) {
  const m = useMockups();
  return (
    <motion.div
      initial={animated ? { opacity: 0, y: -24, scale: 0.96 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease }}
      className="grid grid-cols-[auto_1fr_auto] items-start gap-x-[9px] rounded-[18px] border border-white/[0.08] bg-[rgba(58,58,64,0.72)] p-[10px] text-[11.5px] leading-[1.28] text-white backdrop-blur-xl"
    >
      <AppIcon size={30} />
      <div className="min-w-0">
        <b className="block font-semibold">{title}</b>
        <span className="block">{body}</span>
      </div>
      <span className="text-[10px] text-white/60">{time}</span>
      <span className="sr-only">{m.storeName}</span>
    </motion.div>
  );
}

/* ─── Editor: a block being dragged into the screen ─── */

export function EditorScreen() {
  const m = useMockups();
  const blocks = m.blocks as string[];
  return (
    <>
      <AppHeader />
      <div className="relative mx-[14px] h-[110px] overflow-hidden rounded-[16px] bg-ink">
        <img src="/brand/modelo-parka.png" alt="" className="absolute inset-0 h-full w-full object-cover object-[50%_30%] opacity-90" />
        <b className="absolute bottom-[10px] left-[12px] text-[15px] font-extrabold text-white">{m.newCollection}</b>
      </div>
      <div className="relative mx-[14px] mt-[10px] flex h-[96px] items-center justify-center rounded-[14px] border-2 border-dashed border-accent bg-accent/[0.06]">
        <span className="text-[11px] font-bold text-accent-dark">{m.dropHere}</span>
        <motion.div
          className="absolute inset-[6px] grid grid-cols-3 gap-[6px]"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.45, 0.55, 0.9, 1], repeat: Infinity }}
        >
          {m.products.slice(0, 3).map((p) => (
            <div key={p.name} className="overflow-hidden rounded-[8px] bg-[#f4f4f5]">
              <img src={`/brand/${p.img}`} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 rounded-t-[22px] border-t border-black/[0.06] bg-white px-[14px] pb-[26px] pt-[12px] shadow-[0_-12px_30px_-18px_rgba(0,0,0,.25)]">
        <div className="mx-auto mb-[10px] h-[4px] w-[36px] rounded-full bg-black/15" />
        <p className="mb-[8px] text-[11px] font-bold">{m.components}</p>
        <div className="grid grid-cols-2 gap-[6px]">
          {blocks.map((b, i) => (
            <span
              key={b}
              className={`flex items-center gap-[6px] rounded-[10px] px-[10px] py-[9px] text-[10.5px] font-semibold ${
                i === 1 ? "border border-dashed border-black/20 text-ink/40" : "bg-[#f4f4f5]"
              }`}
            >
              <span className="text-[9px] tracking-[-0.1em]">⋮⋮</span>
              {b}
            </span>
          ))}
        </div>
      </div>
      {/* the dragged block + cursor */}
      <motion.div
        className="absolute z-30 flex items-center gap-[6px] rounded-[10px] bg-ink px-[10px] py-[9px] text-[10.5px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(0,0,0,.5)]"
        style={{ left: 160, top: 500 }}
        animate={{ x: [0, 0, -70, -70, 0], y: [0, 0, -238, -238, 0], opacity: [0, 1, 1, 0, 0], rotate: [0, -4, -2, 0, 0] }}
        transition={{ duration: 4, times: [0, 0.1, 0.45, 0.55, 1], repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[9px] tracking-[-0.1em]">⋮⋮</span>
        {blocks[1]}
        <svg width="16" height="19" viewBox="0 0 20 24" className="absolute -bottom-[12px] -right-[8px]" aria-hidden="true">
          <path d="M4 0L4 16L8 12L12 20L15 18.5L11 10.5L16 10.5L4 0Z" fill="white" stroke="#0a0a0a" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </>
  );
}

/* ─── App Store listing of the merchant's app ─── */

export function StoreScreen() {
  const m = useMockups();
  return (
    <div className="px-[18px] pt-[56px]">
      <div className="flex gap-[14px]">
        <AppIcon size={86} />
        <div className="flex flex-col justify-between py-[2px]">
          <div>
            <p className="text-[18px] font-bold leading-tight tracking-[-0.02em]">{m.storeName}</p>
            <p className="text-[11px] text-ink/60">{m.shopping}</p>
          </div>
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.3, ease }}
            className="w-fit rounded-full bg-accent px-[16px] py-[5px] text-[12px] font-bold text-white"
          >
            {m.get}
          </motion.span>
        </div>
      </div>
      <div className="mt-[16px] flex justify-between border-y border-black/[0.08] py-[10px] text-center">
        <div className="flex-1">
          <p className="text-[9px] text-ink/60">2.4K</p>
          <p className="flex items-center justify-center gap-[3px] text-[13px] font-bold">
            4,9 <Star className="h-[11px] w-[11px] fill-ink" />
          </p>
        </div>
        <div className="flex-1 border-x border-black/[0.08]">
          <p className="text-[9px] text-ink/60">iOS</p>
          <p className="text-[13px] font-bold">17+</p>
        </div>
        <div className="flex-1">
          <p className="text-[9px] text-ink/60">Android</p>
          <p className="text-[13px] font-bold">✓</p>
        </div>
      </div>
      <div className="mt-[14px] grid grid-cols-2 gap-[8px]">
        {[m.products[0], m.products[1]].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease }}
            className="relative h-[250px] overflow-hidden rounded-[16px] border border-black/[0.08] bg-[#f4f4f5]"
          >
            <img src={i === 0 ? "/brand/modelo-parka.png" : "/brand/modelo-sweater.png"} alt="" className="h-full w-full object-cover" />
            <b className="absolute bottom-[8px] left-[8px] text-[10px] font-bold text-white">{i === 0 ? m.newCollection : p.name}</b>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Sync: stock coming in from Tiendanube ─── */

export function SyncScreen() {
  const m = useMockups();
  const stock = [12, 4, 27, 2];
  return (
    <>
      <AppHeader />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        className="mx-[14px] flex items-center gap-[8px] rounded-[12px] bg-ink px-[12px] py-[9px] text-[11px] font-semibold text-white"
      >
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[6px] bg-white p-[3px]">
          <img src="/brand/tiendanube-isotipo.png" alt="" className="h-full w-full object-contain" />
        </span>
        {m.stockSynced}
        <motion.span className="ml-auto" animate={{ rotate: 360 }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}>
          <RefreshCw className="h-[13px] w-[13px]" strokeWidth={2.2} />
        </motion.span>
      </motion.div>
      <div className="mt-[8px]">
        {m.products.map((p, i) => (
          <div key={p.name} className="flex items-center gap-[10px] border-b border-black/[0.06] px-[14px] py-[10px]">
            <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-[10px] bg-[#f4f4f5]">
              <img src={`/brand/${p.img}`} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold">{p.name}</p>
              <p className="text-[12px] font-bold">{p.price}</p>
            </div>
            <motion.span
              key={stock[i]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.15, ease }}
              className={`text-right text-[11px] font-bold ${i === 3 ? "text-accent-dark" : ""}`}
            >
              {stock[i]}
              <span className="block text-[9px] font-medium">{m.units}</span>
            </motion.span>
          </div>
        ))}
      </div>
      <TabBar active={1} />
    </>
  );
}

/* ─── Analytics: one blue bar ─── */

export function AnalyticsScreen() {
  const m = useMockups();
  const bars = [38, 52, 44, 61, 58, 74, 92];
  return (
    <div className="px-[18px] pt-[58px]">
      <p className="text-[12px] font-semibold">{m.salesFromApp}</p>
      <p className="mt-[2px] text-[44px] font-extrabold leading-none tracking-[-0.04em]">+38%</p>
      <p className="mt-[4px] text-[11px]">{m.thisWeek}</p>
      <div className="mt-[28px] flex h-[220px] items-end gap-[8px]">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-[6px]">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${h * 2}px` }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.07, ease }}
              className={`w-full rounded-[6px] ${i === bars.length - 1 ? "bg-accent" : "bg-ink"}`}
            />
            <span className="text-[10px] font-semibold">{(m.days as string[])[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-[22px] flex items-center justify-between rounded-[14px] bg-[#f4f4f5] p-[14px]">
        <p className="text-[11px] font-semibold">{m.abandonedCart}</p>
        <p className="text-[20px] font-extrabold tracking-[-0.03em]">62</p>
      </div>
    </div>
  );
}
