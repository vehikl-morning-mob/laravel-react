import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const lngs = {
        en: { nativeName: 'English' },
        es: { nativeName: 'Spanish' },
        ua: { nativeName: 'Ukrainian' },
        it: { nativeName: 'Italian' },
    };

    return <div className='mt-2'>
        {Object.keys(lngs).map((lng) => (
            <button
                key={lng} className='px-2 border rounded mx-2'
                style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                type='submit'
                onClick={() => i18n.changeLanguage(lng)}
            >
                {lngs[lng].nativeName}
            </button>
        ))}
    </div>
}
