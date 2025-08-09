import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (languageCode: string) => {
        i18n.changeLanguage(languageCode);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown className={`h-3 w-3 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </Button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 rounded-md border bg-popover shadow-md z-50">
                    <div className="py-1">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${i18n.language === language.code ? 'bg-accent text-accent-foreground' : ''
                                    }`}
                            >
                                <span className="text-lg">{language.flag}</span>
                                <span>{language.name}</span>
                                {i18n.language === language.code && (
                                    <span className="ml-auto text-xs text-muted-foreground">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
} 
