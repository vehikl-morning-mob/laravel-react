import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    title: 'Our {{techStack}} App',
                    button_action: {
                        decrease: 'Decrease',
                        increase: 'Increase',
                    }
                }
            },
            es: {
                translation: {
                    title: 'Nuestra {{techStack}} Aplicacion',
                    button_action: {
                        decrease: 'Disminuir',
                        increase: 'Aumentar',
                    }
                }
            },
            ua: {
                translation: {
                    title: 'Наш {{techStack}} додаток',
                    button_action: {
                        decrease: 'Зменшити',
                        increase: 'Збільшити',
                    }
                }
            },
            it: {
                translation: {
                    title: 'La Nostra {{techStack}} Applicazione',
                    button_action: {
                        decrease: 'Diminuire',
                        increase: 'Aumentare',
                    }
                }
            }
        }
    });

export default i18n;
