import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = {
    params: { locale: string };
};
export default function About({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    const t = useTranslations("About");
    return (
        <div className='container'>
            {t.rich("description", {
                p: (chunks) => <p className='mt-4'>{chunks}</p>,
                code: (chunks) => (
                    <code className='font-mono text-white'>{chunks}</code>
                ),
            })}
        </div>
    );
}
