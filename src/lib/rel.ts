/**
 * The rel value on every outbound provider link, defined once.
 *
 * It mirrors, byte for byte, what mobileproxies.org puts on its link to
 * proxyverity.com: rel="noopener noreferrer" — no nofollow, no sponsored.
 *
 * It lives here and is consumed only by ProviderLink.astro because the one
 * reliable way to end up with different rel values on different pages is to
 * write the attribute by hand N times.
 */
export const OUTBOUND_REL = 'noopener noreferrer';

/** Our own site. One link, from /about/, and that is deliberate. */
export const OWNER_URL = 'https://proxyverity.com/';
