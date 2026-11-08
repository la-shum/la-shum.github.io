import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Mail",
        href: "mailto:leonid.shumilov@mpp.mpg.de",
        linkTitle: "Send an email to Leonid Shumilov",
        isActive: false,
    },
    {
        name: "iNSPIRE",
        href: "https://inspirehep.net/authors/2878659?ui-citation-summary=true",
        linkTitle: "Leonid Shumilov on INSPIRE-HEP",
        isActive: true,
    },
    {
        name: "arXiv",
        href: "https://arxiv.org/search/?query=Leonid+Shumilov&searchtype=author",
        linkTitle: "Leonid Shumilov on arXiv",
        isActive: true,
    },
    {
        name: "ORCiD",
        href: "https://orcid.org/0000-0003-2484-7161",
        linkTitle: "Leonid Shumilov on ORCID",
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    INSPIRE: "INSPIRE",
    arXiv: "arXiv",
    RSS: "RSS",
};
