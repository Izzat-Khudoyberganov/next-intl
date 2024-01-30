import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = {
    params: { locale: string };
};
export default function IndexPage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    const t = useTranslations("IndexPage");
    return (
        <div className='container'>
            <p className='mt-10 max-w-[590px]'>
                {t.rich("description", {
                    code: (chunks) => (
                        <code className='font-mono text-white'>{chunks}</code>
                    ),
                })}
            </p>
        </div>
    );
}
