import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import '../../../i18n';
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "./LanguageSwitcher";

export default function HelloReact() {
    const { t } = useTranslation();

    return (
        <div className='text-center py-6 bg-amber-50 h-screen'>
            <h2 className='text-3xl font-bold underline mb-4'>{t('title')}</h2>
            <Counter />
            <LanguageSwitcher />
        </div>
    );
}

if (document.getElementById('react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('react'));
}
