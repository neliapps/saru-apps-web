"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Check, Search, ShoppingBag, Star, User } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { signupUrl } from "@/i18n/signup";
import { ArrowLink, Underline, ease, useRange } from "./home/primitives";
import { HomeScreen, Island, PHONE_H, PHONE_W, PushCard, StatusBar, frameStyle } from "./home/phone";

const WEB_W = 1120;

/* ─── Headline: words rise out of a mask, one by one ─── */

function Words({ text, start = 0, className = "" }: { text: string; start?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: start + i * 0.06, ease }}
          >
            {w}
            {" "}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* ─── The merchant's web store, as seen in a browser ─── */

function WebStore() {
  const { dict } = useDictionary();
  const m = dict.mockups;
  return (
    <div className="h-full bg-white text-ink">
      <div className="flex items-center justify-between border-b border-black/[0.06] px-10 py-5">
        <b className="text-[22px] font-extrabold tracking-[-0.03em]">{m.storeName}</b>
        <nav className="flex gap-8 text-[14px] font-medium">
          {(m.webMenu as string[]).map((x) => (
            <span key={x}>{x}</span>
          ))}
        </nav>
        <span className="flex gap-5">
          <Search className="h-5 w-5" strokeWidth={1.9} />
          <User className="h-5 w-5" strokeWidth={1.9} />
          <ShoppingBag className="h-5 w-5" strokeWidth={1.9} />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-6 px-10 pt-6">
        <div className="relative h-[250px] overflow-hidden rounded-[18px] bg-ink">
          <img src="/brand/modelo-parka.png" alt="" className="h-full w-full object-cover object-[50%_25%] opacity-90" />
        </div>
        <div className="flex flex-col justify-center">
          <small className="text-[13px] font-medium">{m.season}</small>
          <p className="mt-1 text-[44px] font-extrabold leading-[1] tracking-[-0.04em]">{m.newCollection}</p>
          <span className="mt-4 w-fit border-b-2 border-ink text-[14px] font-semibold">{m.seeNow}</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-10 pt-6">
        {(m.products as { name: string; price: string; img: string }[]).map((p) => (
          <div key={p.name}>
            <div className="aspect-[4/3] overflow-hidden rounded-[14px] bg-[#f4f4f5]">
              <img src={`/brand/${p.img}`} alt="" className="h-full w-full object-cover" />
            </div>
            <p className="mt-2 text-[13px] font-medium">{p.name}</p>
            <p className="text-[13px] font-bold">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Scroll stage: the browser becomes an iPhone ─── */

function useViewport() {
  const [vp, setVp] = useState({ w: 1280, h: 800 });
  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return vp;
}

function MorphStage() {
  const { dict } = useDictionary();
  const t = dict.hero;
  const m = dict.mockups;
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const done = useMotionValue(1);
  const p: MotionValue<number> = reduce ? done : scrollYProgress;

  const vp = useViewport();
  const mobile = vp.w < 768;
  const wideW = Math.min(WEB_W, vp.w - (mobile ? 32 : 96));
  const wideH = Math.min(640, vp.h - (mobile ? 200 : 140));
  const fit = Math.min(1, (vp.h - (mobile ? 90 : 110)) / PHONE_H);

  const width = useRange(p, [0.05, 0.5], [wideW, PHONE_W]);
  const height = useRange(p, [0.05, 0.5], [wideH, PHONE_H]);
  const radius = useRange(p, [0.05, 0.5], [16, 50]);
  const bezel = useRange(p, [0.2, 0.5], [0, 9]);
  const innerRadius = useTransform(() => Math.max(10, radius.get() - bezel.get()));
  const scale = useRange(p, [0.3, 0.55], [1, fit]);
  const rotate = useRange(p, [0.6, 1], [0, -4]);
  const chromeH = useRange(p, [0.05, 0.3], [mobile ? 30 : 40, 0]);
  const chromeO = useRange(p, [0.05, 0.2], [1, 0]);
  // the web page shrinks with the frame (no cropping), then hands over to the app
  const webScale = useTransform(width, (w) => w / WEB_W);
  const webO = useRange(p, [0.16, 0.3], [1, 0]);
  const appO = useRange(p, [0.34, 0.48], [0, 1]);
  const appY = useRange(p, [0.34, 0.48], [24, 0]);
  const islandO = useRange(p, [0.42, 0.52], [0, 1]);
  const glowO = useRange(p, [0.3, 0.7], [0, 0.45]);

  const n1 = { o: useRange(p, [0.58, 0.65], [0, 1]), y: useRange(p, [0.58, 0.65], [-24, 0]) };
  const n2 = { o: useRange(p, [0.66, 0.73], [0, 1]), y: useRange(p, [0.66, 0.73], [-24, 0]) };
  const n3 = { o: useRange(p, [0.74, 0.81], [0, 1]), y: useRange(p, [0.74, 0.81], [-24, 0]) };
  const toastO = useRange(p, [0.84, 0.9], [0, 1]);
  const toastY = useRange(p, [0.84, 0.9], [16, 0]);
  const ratingO = useRange(p, [0.88, 0.94], [0, 1]);
  const ratingX = useRange(p, [0.88, 0.94], [-16, 0]);

  return (
    <div ref={ref} className={reduce ? "relative" : "relative h-[240vh] md:h-[260vh]"}>
      <div className={`${reduce ? "py-16" : "sticky top-0 h-[100svh]"} flex items-center justify-center overflow-hidden`}>
        <motion.div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: glowO }} aria-hidden="true" />

        <div className="relative" aria-hidden="true">
          {/* Device: browser → phone */}
          <motion.div
            className="relative flex flex-col overflow-hidden"
            style={{ width, height, borderRadius: radius, padding: bezel, scale, rotate, ...frameStyle }}
          >
            <motion.div className="relative flex flex-1 flex-col overflow-hidden bg-white text-ink" style={{ borderRadius: innerRadius }}>
              <motion.div
                className="flex shrink-0 items-center gap-2 overflow-hidden border-b border-black/[0.06] bg-[#f4f4f5] px-4"
                style={{ height: chromeH, opacity: chromeO }}
              >
                <i className="h-2.5 w-2.5 rounded-full bg-black/15" />
                <i className="h-2.5 w-2.5 rounded-full bg-black/15" />
                <i className="h-2.5 w-2.5 rounded-full bg-black/15" />
                <span className="mx-auto rounded-md bg-white px-10 py-1 text-[11px] font-medium text-ink">
                  {(m.storeName as string).replace(" ", "")}.com
                </span>
              </motion.div>

              <div className="relative flex-1">
                <motion.div
                  className="absolute left-1/2 top-0 origin-top"
                  style={{ width: WEB_W, height: (wideH * WEB_W) / wideW, x: "-50%", scale: webScale, opacity: webO }}
                >
                  <WebStore />
                </motion.div>
                <motion.div className="absolute inset-y-0 left-1/2 w-[282px]" style={{ x: "-50%", y: appY, opacity: appO }}>
                  <HomeScreen />
                </motion.div>
              </div>

              <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: islandO }}>
                <StatusBar />
                <Island />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Push notifications land next to the phone */}
          <div className="absolute left-1/2 top-[6%] z-10 flex w-[290px] -translate-x-1/2 flex-col gap-2 md:left-auto md:right-[calc(100%+40px)] md:top-[14%] md:translate-x-0">
            {[
              { v: n1, title: m.push1Title, body: m.push1Body, time: m.now },
              { v: n2, title: m.push2Title, body: m.push2Body, time: m.minAgo },
              { v: n3, title: m.push3Title, body: m.push3Body, time: m.minAgo },
            ].map((n, i) => (
              <motion.div key={n.title} style={{ opacity: n.v.o, y: n.v.y }} className={i > 0 ? "hidden md:block" : ""}>
                <PushCard title={n.title} body={n.body} time={n.time} animated={false} />
              </motion.div>
            ))}
          </div>

          {/* iOS-style system toast: the app just went live */}
          <motion.div
            className="absolute -right-4 bottom-[16%] z-10 flex items-center gap-3 rounded-[18px] bg-white py-3 pl-3 pr-5 text-ink shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] md:-right-20"
            style={{ opacity: toastO, y: toastY }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#34C759]">
              <Check className="h-4 w-4 text-white" strokeWidth={3} />
            </span>
            <span>
              <b className="block text-[14px] font-bold leading-tight">{t.mockupPublished}</b>
              <span className="block text-[12px] font-medium leading-tight">{t.mockupPublishedTime}</span>
            </span>
          </motion.div>

          <motion.div
            className="absolute left-[calc(100%+48px)] top-[34%] hidden items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-white md:flex"
            style={{ opacity: ratingO, x: ratingX }}
          >
            <span className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-white" strokeWidth={0} />
              ))}
            </span>
            4,9 {t.mockupRatingLabel}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { dict, locale } = useDictionary();
  const t = dict.hero;

  return (
    <section className="section-dark grain overflow-clip">
      <div className="relative mx-auto max-w-[1280px] px-6 pt-36 md:pt-44">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mb-8 flex items-center gap-3 text-[16px] font-semibold"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-white p-1.5">
            <img src="/brand/tiendanube-isotipo.png" alt="" className="h-full w-full object-contain" />
          </span>
          {t.badge}
        </motion.p>

        <h1 className="font-display text-[clamp(40px,6.2vw,92px)] font-extrabold leading-[0.98] tracking-[-0.045em]">
          <Words text={t.titleLine1} />
          <br />
          <span className="relative inline-block">
            <em className="accent">
              <Words text={t.titleAccent} start={0.3} />
            </em>
            <Underline delay={1.1} />
          </span>
        </h1>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5] md:col-span-6 md:col-start-7"
          >
            {t.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease }}
            className="flex flex-wrap items-center gap-x-10 gap-y-2 md:col-span-6 md:col-start-7"
          >
            <ArrowLink href={signupUrl(locale)}>{t.ctaPrimary}</ArrowLink>
            <ArrowLink href="#como-funciona" weight="medium">
              {t.ctaSecondary}
            </ArrowLink>
          </motion.div>
        </div>
      </div>

      <MorphStage />
    </section>
  );
}
