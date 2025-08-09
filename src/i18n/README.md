## 🌍 Internationalization (i18n)

This website is fully internationalized and supports multiple languages:

- **English** (en) - Default language
- **Dutch** (nl) - Fully translated

### Features

- **Automatic language detection** - Detects user's browser language
- **Language switching** - Users can toggle between languages using the language switcher in the header
- **Persistent language preference** - Language choice is saved in localStorage
- **Complete translation coverage** - All text content is translated
- **Type-safe translations** - Uses react-i18next for robust internationalization

### Language Switcher

The language switcher is located in the header navigation and allows users to:
- Switch between English and Dutch
- See the current language indicator
- Maintain their language preference across sessions

### Adding New Languages

To add a new language:

1. Create a new translation file in `src/i18n/locales/` (e.g., `fr.json` for French)
2. Add the language to the resources object in `src/i18n/index.ts`
3. Translate all the keys from the English translation file

Example:
```typescript
// src/i18n/index.ts
import fr from './locales/fr.json';

const resources = {
  en: { translation: en },
  nl: { translation: nl },
  fr: { translation: fr }, // Add new language
};
```

### Translation Structure

Translations are organized in a hierarchical structure:

```json
{
  "common": {
    "download": "Download",
    "learnMore": "Learn More"
  },
  "hero": {
    "title": "⚡ PowerWise",
    "subtitle": "Cut your energy waste. One smart action at a time."
  },
  "navigation": {
    "home": "Home",
    "features": "Features"
  }
}
```
