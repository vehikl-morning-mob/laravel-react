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
                    title: 'Nuestra Laravel React Aplicacion',
                    button_action: {
                        decrease: 'Disminuir',
                        increase: 'Aumentar',
                    }
                }
            },
            ua: {
                translation: {
                    title: 'Наш Laravel React додаток',
                    button_action: {
                        decrease: 'Зменшити',
                        increase: 'Збільшити',
                    }
                }
            },
            it: {
                translation: {
                    title: 'La Nostra Laravel React Applicazione',
                    button_action: {
                        decrease: 'Diminuire',
                        increase: 'Aumentare',
                    }
                }
            }
        }
    });

export default i18n;
