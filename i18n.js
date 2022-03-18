import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    title: 'Our Laravel React App',
                    button_action: {
                        decrease: 'Decrease',
                        increase: 'Increase',
                    }
                }
            },
            es: {
                translation: {
                    title: 'Nuestro Laravel React Aplicacion',
                    button_action: {
                        decrease: 'Disminuir',
                        increase: 'Aumentar',
                    }
                }
            }

        }
    });

export default i18n;
