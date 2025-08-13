import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function PrivacyPolicy() {
    const { t } = useTranslation();

    const handleBackToHome = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <Button
                        variant="ghost"
                        onClick={handleBackToHome}
                        className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t('common.back')}
                    </Button>
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        {t('privacyPolicy.title')}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {t('privacyPolicy.lastUpdated')}: {t('privacyPolicy.date')}
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-4xl space-y-8">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('privacyPolicy.introduction.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('privacyPolicy.introduction.description1')}</p>
                            <p>{t('privacyPolicy.introduction.description2')}</p>
                        </div>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('privacyPolicy.informationWeCollect.title')}
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium text-foreground mb-2">
                                    {t('privacyPolicy.informationWeCollect.personalData.title')}
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                    <li>{t('privacyPolicy.informationWeCollect.personalData.item1')}</li>
                                    <li>{t('privacyPolicy.informationWeCollect.personalData.item2')}</li>
                                    <li>{t('privacyPolicy.informationWeCollect.personalData.item3')}</li>
                                    <li>{t('privacyPolicy.informationWeCollect.personalData.item4')}</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium text-foreground mb-2">
                                    {t('privacyPolicy.informationWeCollect.usageData.title')}
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                    <li>{t('privacyPolicy.informationWeCollect.usageData.item1')}</li>
                                    <li>{t('privacyPolicy.informationWeCollect.usageData.item2')}</li>
                                    <li>{t('privacyPolicy.informationWeCollect.usageData.item3')}</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('privacyPolicy.howWeUse.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('privacyPolicy.howWeUse.description')}</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>{t('privacyPolicy.howWeUse.purpose1')}</li>
                                <li>{t('privacyPolicy.howWeUse.purpose2')}</li>
                                <li>{t('privacyPolicy.howWeUse.purpose3')}</li>
                                <li>{t('privacyPolicy.howWeUse.purpose4')}</li>
                                <li>{t('privacyPolicy.howWeUse.purpose5')}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Sharing */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('privacyPolicy.dataSharing.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('privacyPolicy.dataSharing.description')}</p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p className="font-medium text-foreground mb-2">
                                    {t('privacyPolicy.dataSharing.important')}
                                </p>
                                <p>{t('privacyPolicy.dataSharing.noThirdParty')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('privacyPolicy.dataSecurity.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('privacyPolicy.dataSecurity.description')}</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>{t('privacyPolicy.dataSecurity.measure1')}</li>
                                <li>{t('privacyPolicy.dataSecurity.measure2')}</li>
                                <li>{t('privacyPolicy.dataSecurity.measure3')}</li>
                                <li>{t('privacyPolicy.dataSecurity.measure4')}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('privacyPolicy.yourRights.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('privacyPolicy.yourRights.description')}</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>{t('privacyPolicy.yourRights.right1')}</li>
                                <li>{t('privacyPolicy.yourRights.right2')}</li>
                                <li>{t('privacyPolicy.yourRights.right3')}</li>
                                <li>{t('privacyPolicy.yourRights.right4')}</li>
                                <li>{t('privacyPolicy.yourRights.right5')}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('privacyPolicy.contact.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('privacyPolicy.contact.description')}</p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p><strong>Email:</strong> privacy@dedigitaleenergiecoach.nl</p>
                                <p><strong>Phone:</strong> +31 623429129</p>
                                <p><strong>Address:</strong> Dream Street 12, 2133LK Hoofddorp, Netherlands</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
