import React, { Component } from "react"
import { withTranslation } from 'react-i18next';

class LanguageSwitcher extends Component {

    handleChangeLanguage(e) {
        const lng = e.target.value;
        const { i18n } = this.props;
        i18n.changeLanguage(lng)
    }

    render() {
        const { t } = this.props;

        return (
            <div className="select is-purple">
                <select onChange={(e) => this.handleChangeLanguage(e)}>
                    <option value="es">{t("spanish")}</option>
                    <option value="en">{t("english")}</option>
                </select>
            </div>
        )
    }
}

export default withTranslation()(LanguageSwitcher);