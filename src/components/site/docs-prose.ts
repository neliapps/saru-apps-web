/* Reading typography for long-form light sections */
export const docsProse = [
  "text-ink",
  "[&_h2]:font-display [&_h2]:text-[clamp(22px,2vw,26px)] [&_h2]:font-bold [&_h2]:leading-[1.25] [&_h2]:tracking-[-0.025em] [&_h2]:mt-14 [&_h2]:mb-4 [&_h2:first-child]:mt-0",
  "[&_p]:text-[17px] [&_p]:leading-[1.7] [&_p]:mb-5",
  "[&_li]:text-[17px] [&_li]:leading-[1.7] [&_li]:mb-2 [&_li]:pl-1 [&_li]:marker:text-ink",
  "[&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:decoration-accent [&_a]:decoration-2 [&_a]:underline-offset-4",
].join(" ");
