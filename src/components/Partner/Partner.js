import React from 'react';
import {withTranslation} from "react-i18next";
import './styles.sass';

export const Partner = ({t}) => (
    <>
        <div className="section section-partner margin-top-10">
            <div className="principal-title aliances" >{t("partners")}</div>
        </div>
        <div className="section-logos">
            <div className="wrapper">
                <div><img class="center" src= "/img/koga-impact-lab.png" alt="koga impact lab" /></div>
                <div><img class="center" src="/img/mitic.png" alt="mitic" /></div>
                <div><img class="center" src="/img/campus-party.png" alt="campus party" /></div>
                <div><img class="center" src="/img/paraguay-educa.png" alt="paraguay educa" /></div>
                <div><img class="center" src="/img/global-shapers.png" alt="global shapers" /></div>
                <div><img class="center enfoque" src="/img/enfoque-ninez.png" alt="enfoque niñez" /></div>
                <div><img class="center" src="/img/django-girls.png" alt="django girls" /></div>
            </div>
        </div>
    </>
);

export default withTranslation()(Partner);
