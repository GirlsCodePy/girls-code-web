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
                <div><img className="center" src= "/img/koga-impact-lab.png" alt="koga impact lab" /></div>
                <div><img className="center" src="/img/mitic.png" alt="mitic" /></div>
                <div><img className="center" src="/img/campus-party.png" alt="campus party" /></div>
                <div><img className="center" src="/img/paraguay-educa.png" alt="paraguay educa" /></div>
                <div><img className="center" src="/img/global-shapers.png" alt="global shapers" /></div>
                <div><img className="center" src="/img/django-girls.png" alt="django girls" /></div>
                <div><img className="center" src="/img/SNJ.jpeg" alt="secretaría nacional de la juventud" /></div>
                <div><img className="center" src="/img/M_Mujer.png" alt="ministerio de la mujer" /></div>
                <div><img className="center" src="/img/alma-civica.png" alt="alma cívica" /></div>
                <div><img className="center" src="/img/cird.png" alt="cird" /></div>
                <div><img className="center" src="/img/fundacion-paraguaya.png" alt="fundación paraguaya" /></div>
                <div><img className="center" src="/img/centro-cultural-melodia.png" alt="centro cultural melodía" /></div>
                <div><img className="center" width="120" height="180" src="/img/FPUNA.png" alt="fpuna" /></div>
                <div><img className="center" src="/img/Programando-Paraguay.png" alt="programando paraguay" /></div>
                <div><img className="center" src="/img/OMAPA.png" alt="omapa" /></div>
                <div><img className="center" src="/img/willdom.png" alt="willdom" /></div>
                <div><img className="center" width="147" height="187" src="/img/tedic.png" alt="tedic" /></div>
                <div><img className="center" src="/img/UCOM.png" alt="ucom" /></div>
                <div><img className="center" src="/img/tecnopy.jpg" alt="tecnopy" /></div>
            </div>
        </div>
    </>
);

export default withTranslation()(Partner);
