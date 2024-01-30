import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "uz"] as const;

export const pathnames = {
    "/": "/",
    "/about": {
        en: "/about",
        uz: "/debout",
    },
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
