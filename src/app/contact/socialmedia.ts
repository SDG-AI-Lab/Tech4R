import { FaEnvelope, FaLinkedinIn , FaFacebookF, FaInstagram, FaSquareXTwitter, FaTiktok } from 'react-icons/fa6';

/**
 * Type for all valid social media keys
 */
export type SocialKey = keyof typeof socials;

/**
 * Type for all valid social media information
 */
export type SocialInfo = typeof socials[SocialKey];

/**
 * Helper function to get a social media information with type safety
 */
export function getsocial(key: SocialKey): SocialInfo {
  return socials[key];
}

export const socials = {
    info: [
        {name: "Email", desc: "tech4r@undp.org", icon: FaEnvelope, url: "mailto:tech4r@undp.org"},
        {name: "LinkedIn", desc: "Tech4R", icon: FaLinkedinIn, url: "" },
        {name: "Facebook", desc: "Tech4R", icon: FaFacebookF, url: "" },
        {name: "Instagram", desc: "@tech4R", icon: FaInstagram, url: "" },
        {name: "Twitter/X", desc: "@tech4R", icon: FaSquareXTwitter, url: "" },
        {name: "Tiktok", desc: "@tech4R", icon: FaTiktok, url: "" }
    ]
} as const;