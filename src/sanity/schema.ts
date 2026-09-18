import { type SchemaTypeDefinition } from "sanity";
import { heroType } from "./schemas/hero";
import { featureType } from "./schemas/feature";
import { faqType } from "./schemas/faq";
import { planType } from "./schemas/plan";
import { ctaType } from "./schemas/cta";
import { howItWorksStepType } from "./schemas/howItWorksStep";
import { landingPageType } from "./schemas/landingPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroType,
    featureType,
    faqType,
    planType,
    ctaType,
    howItWorksStepType,
    landingPageType,
  ],
};
