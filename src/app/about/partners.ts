
/**
 * Type for all valid partner keys
 */
export type PartnerKey = keyof typeof partners;

/**
 * Type for all valid partner information
 */
export type PartnerInfo = typeof partners[PartnerKey];

/**
 * Helper function to get a partner information with type safety
 */
export function getPartner(key: PartnerKey): PartnerInfo {
  return partners[key];
}

export const partners = {
    info: [
        {name: "UNDP", desc: "UNDP works in about 170 countries and territories, helping to eradicate poverty, reduce inequalities and exclusion, and build resilience so countries can sustain progress. As the UN’s development agency, UNDP plays a critical role in helping countries achieve the Sustainable Development Goals.", icon: "/images/logo-undp.png", url: "https://www.undp.org/"},
        {name: "ICPSD", desc: "UNDP’s Istanbul International Center for Private Sector in Development (ICPSD), supports the private sector and foundations to become transformative partners in development through research, advocacy for inclusive business, facilitation of public-private dialogue and multi stakeholder-partnerships.", icon: "/images/logo-icpsd.jpg", url: "https://www.undp.org/policy-centre/istanbul"},
        {name: "SDG AI Lab", desc: "Harnessing the potential of Artificial Intelligence for Sustainable Development", icon: "/images/logo-sdg.png", url: "https://sdgailab.org/"}        
    ]
} as const;