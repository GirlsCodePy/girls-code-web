import React from 'react';
import {withTranslation} from "react-i18next";
import './styles.sass';

export const Partner = ({t}) => (
    <div>
        <div className="principal-title aliances" >{t("partners")}</div>
        <div className="wrapper">
            <div><img src= "/img/koga-impact-lab.png" alt="koga impact lab" /></div>
            <div><img src="/img/enfoque-ninez.png" alt="enfoque niñez" /></div>
            <div><img src="/img/mitic.png" alt="mitic" /></div>
            <div><img src="/img/campus-party.png" alt="campus party" /></div>
            <div><img src="/img/paraguay-educa.png" alt="paraguay educa" /></div>
            <div><img src="/img/django-girls.png" alt="django girls" /></div>
            <div><img src="/img/global-shapers.png" alt="global shapers" /></div>
        </div>
    </div>

);

export default withTranslation()(Partner);
