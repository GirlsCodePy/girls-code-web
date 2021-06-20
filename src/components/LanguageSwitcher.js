import React from "react";
import clsx from "clsx";
import { withTranslation } from 'react-i18next';


const LanguageSwitcher = ({t, i18n, customClassName = 'is-purple', abbr = false}) => {
   const handleChangeLanguage = (e) => {
        const lng = e.target.value;
        i18n.changeLanguage(lng);
    }

    return (
        <div className={clsx('select', customClassName)}>
            <select onChange={(e) => handleChangeLanguage(e)}>
                <option value="es">{abbr ? 'ES' : t("spanish")}</option>
                <option value="en">{abbr ? 'EN' : t("english")}</option>
            </select>
        </div>
    );
    
}

export default withTranslation()(LanguageSwitcher);