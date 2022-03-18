import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import '../../../i18n';
import {useTranslation} from "react-i18next";

export default function HelloReact() {
    const { t, i18n } = useTranslation()
    const lngs = {
        en: { nativeName: 'English' },
        es: { nativeName: 'Spanish' }
    };
    return (
        <div className='text-center py-6 bg-amber-50 h-screen'>
            <h2 className='text-3xl font-bold underline mb-4'>{t('title')}</h2>
            <Counter />
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
        </div>
    );
}

if (document.getElementById('react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('react'));
}
