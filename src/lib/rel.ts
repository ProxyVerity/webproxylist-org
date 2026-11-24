/**
 * The rel values on outbound provider links, defined once.
 *
 * An exchange entry is a reciprocal placement: the provider published an
 * article about ProxyVerity and links to us without nofollow, so our link back
 * matches theirs byte for byte. A listing is a catalogue entry we wrote with
 * no agreement behind it, and those links carry nofollow.
 *
 * Both live here and are consumed only by ProviderLink.astro, because the one
 * reliable way to end up with different rel values on different pages is to
 * write the attribute by hand N times.
 */
export const OUTBOUND_REL_EXCHANGE = 'noopener noreferrer';
export const OUTBOUND_REL_LISTING = 'noopener noreferrer nofollow';

/** Our own site. One link, from /about/, and that is deliberate. */
export const OWNER_URL = 'https://proxyverity.com/';
