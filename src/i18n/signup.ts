import type { Locale } from "./config";

const TN_APP_ID = "29765";
const TN_REDIRECT_URI = "https://api.saruapps.com/api/integrations/tiendanube/callback";

/** Sign up with Tiendanube/Nuvemshop OAuth — the same flow as the dashboard's register button */
export function signupUrl(locale: Locale) {
  const host = locale === "pt" ? "https://www.nuvemshop.com.br" : "https://www.tiendanube.com";
  return `${host}/apps/${TN_APP_ID}/authorize?state=oauth_login&redirect_uri=${encodeURIComponent(TN_REDIRECT_URI)}`;
}

export function isSignupUrl(href: string) {
  return href.includes(`/apps/${TN_APP_ID}/authorize`);
}
