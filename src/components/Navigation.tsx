import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
    const t = useTranslations("Navigation");

    return (
        <div className='bg-slate-850 py-4'>
            <nav className='container flex justify-between text-white '>
                <div>
                    <NavigationLink href='/'>{t("home")}</NavigationLink>
                    <NavigationLink href='/about'>{t("about")}</NavigationLink>
                </div>
                <LocaleSwitcher />
            </nav>
        </div>
    );
}
