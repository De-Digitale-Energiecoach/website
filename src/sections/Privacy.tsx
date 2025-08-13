import { useTranslation } from "react-i18next";
import { Shield } from "lucide-react";

export function Privacy() {
    const { t } = useTranslation();

    return (
        <section className="py-16 bg-muted/30">
            < div className="container mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold text-foreground">{t('privacy.title')}</h3>
                        </div>
                        <div className="space-y-3 text-muted-foreground">
                            <p className="text-lg">{t('privacy.description')}</p>
                            <p>
                                {t('privacy.fullVersionBefore')}
                                <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                                    {t('privacy.fullVersionLink')}
                                </a>
                                {t('privacy.fullVersionAfter')}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-48 h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                            <Shield className="h-20 w-20 text-muted-foreground/30" />
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}
