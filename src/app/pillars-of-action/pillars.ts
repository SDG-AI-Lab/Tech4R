import { FaHandsHelping, FaBullhorn, FaTools, FaShieldAlt } from 'react-icons/fa';

/**
 * Type for all valid pillar keys
 */
export type PillarKey = keyof typeof pillars;

/**
 * Type for all valid pillar information
 */
export type PillarInfo = typeof pillars[PillarKey];

/**
 * Helper function to get a pillar information with type safety
 */
export function getPillar(key: PillarKey): PillarInfo {
  return pillars[key];
}

export const pillars = {
    info: [
        {title: "Rescue", desc: "Swift action saves lives. We deploy geospatial data, real-time tracking, and mobile connectivity to enhance first-response coordination, enabling responders to identify critical needs and mobilize faster in crisis zones.", icon: FaHandsHelping},
        {title: "Response", desc: "Accurate information is key during emergencies. Tech4R leverages AI, satellite data, and digital communication platforms to support logistics, map affected regions, and deliver timely updates to responders and communities alike.", icon: FaBullhorn},
        {title: "Recovery", desc: "After the immediate danger subsides, communities need structured support. We offer data-driven tools for damage assessment, aid tracking, and project management to ensure transparent, effective recovery efforts.", icon: FaTools},
        {title: "Resilience", desc: "Preparedness is the foundation of resilience. Through predictive analytics, digital training modules, and infrastructure mapping, we help communities anticipate risks, adapt, and build systems that can withstand future shocks.", icon: FaShieldAlt}
    ]
} as const;