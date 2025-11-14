import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

import privacyPolicyEN from '../content/en/PrivacyPolicy.md?raw';
import privacyPolicyNL from '../content/nl/PrivacyPolicy.md?raw';
import { Button } from '../components/ui/button';

export function PrivacyPolicy() {
    const { t, i18n } = useTranslation();

    const normalizedLanguage = i18n.language?.split('-')[0];

    const content =
        normalizedLanguage === 'nl' ? privacyPolicyNL : privacyPolicyEN;

    const handleBackToHome = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Button
                    variant="ghost"
                    onClick={handleBackToHome}
                    className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    {t('common.back')}
                </Button>
                <div className="max-w-4xl markdown-content">
                    <ReactMarkdown>
                        {content}
                    </ReactMarkdown>
                </div>
            </div >
        </div >
    );
}
