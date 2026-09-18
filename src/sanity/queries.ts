import { client } from "./client";

export async function getHero() {
  return client.fetch(
    `*[_type == "hero"][0]{
      badge, headlineLine1, headlineLine2, subtitle,
      primaryCta, primaryCtaUrl, secondaryCta, secondaryCtaUrl
    }`
  );
}

export async function getFeatures() {
  return client.fetch(
    `*[_type == "feature"] | order(order asc){
      title, description, icon, visual
    }`
  );
}

export async function getFaqs() {
  return client.fetch(
    `*[_type == "faq"] | order(order asc){
      question, answer
    }`
  );
}

export async function getPlans() {
  return client.fetch(
    `*[_type == "plan"] | order(order asc){
      name, monthlyPrice, currency, description,
      features, cta, href, highlighted
    }`
  );
}

export async function getCta() {
  return client.fetch(
    `*[_type == "cta"][0]{
      headline, subtitle,
      primaryCta, primaryCtaUrl, secondaryCta, secondaryCtaUrl
    }`
  );
}

export async function getHowItWorksSteps() {
  return client.fetch(
    `*[_type == "howItWorksStep"] | order(order asc){
      number, title, description, detail
    }`
  );
}

export async function getLandingPage() {
  return client.fetch(
    `*[_type == "landingPage"][0]{
      featuresTitle, featuresSubtitle,
      howItWorksTitle, howItWorksSubtitle,
      pricingTitle, pricingSubtitle,
      faqTitle, inlineCta1, inlineCta2
    }`
  );
}
