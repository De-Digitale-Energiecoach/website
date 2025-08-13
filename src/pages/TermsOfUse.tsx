import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function TermsOfUse() {
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
                        {t('termsOfUse.title')}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {t('termsOfUse.lastUpdated')}: {t('termsOfUse.date')}
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-4xl space-y-8">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.introduction.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.introduction.description1')}</p>
                            <p>{t('termsOfUse.introduction.description2')}</p>
                        </div>
                    </section>

                    {/* Acceptance of Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.acceptance.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.acceptance.description')}</p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p className="font-medium text-foreground">
                                    {t('termsOfUse.acceptance.important')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Description */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.serviceDescription.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.serviceDescription.description')}</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>{t('termsOfUse.serviceDescription.feature1')}</li>
                                <li>{t('termsOfUse.serviceDescription.feature2')}</li>
                                <li>{t('termsOfUse.serviceDescription.feature3')}</li>
                                <li>{t('termsOfUse.serviceDescription.feature4')}</li>
                            </ul>
                        </div>
                    </section>

                    {/* User Responsibilities */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.userResponsibilities.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.userResponsibilities.description')}</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>{t('termsOfUse.userResponsibilities.responsibility1')}</li>
                                <li>{t('termsOfUse.userResponsibilities.responsibility2')}</li>
                                <li>{t('termsOfUse.userResponsibilities.responsibility3')}</li>
                                <li>{t('termsOfUse.userResponsibilities.responsibility4')}</li>
                                <li>{t('termsOfUse.userResponsibilities.responsibility5')}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Prohibited Uses */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.prohibitedUses.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.prohibitedUses.description')}</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>{t('termsOfUse.prohibitedUses.prohibition1')}</li>
                                <li>{t('termsOfUse.prohibitedUses.prohibition2')}</li>
                                <li>{t('termsOfUse.prohibitedUses.prohibition3')}</li>
                                <li>{t('termsOfUse.prohibitedUses.prohibition4')}</li>
                                <li>{t('termsOfUse.prohibitedUses.prohibition5')}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.intellectualProperty.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.intellectualProperty.description')}</p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p className="font-medium text-foreground mb-2">
                                    {t('termsOfUse.intellectualProperty.important')}
                                </p>
                                <p>{t('termsOfUse.intellectualProperty.rights')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Privacy and Data */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.privacyAndData.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.privacyAndData.description')}</p>
                            <p>{t('termsOfUse.privacyAndData.reference')}</p>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.limitationOfLiability.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.limitationOfLiability.description')}</p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p className="font-medium text-foreground">
                                    {t('termsOfUse.limitationOfLiability.disclaimer')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.termination.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.termination.description')}</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>{t('termsOfUse.termination.reason1')}</li>
                                <li>{t('termsOfUse.termination.reason2')}</li>
                                <li>{t('termsOfUse.termination.reason3')}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Changes to Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.changesToTerms.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.changesToTerms.description')}</p>
                            <p>{t('termsOfUse.changesToTerms.notification')}</p>
                        </div>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.governingLaw.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.governingLaw.description')}</p>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            {t('termsOfUse.contact.title')}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('termsOfUse.contact.description')}</p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p><strong>Email:</strong> legal@dedigitaleenergiecoach.nl</p>
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
