import React, {useState} from "react";
import {withTranslation} from "react-i18next";
import DonateButton from "../DonateButton";
import {toast} from "react-toastify";
import "./styles.sass"

const initialState = {
    name: "",
    lastName: "",
    email: ""
};

const SubscriptionForm = ({t}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = event => {
        const {value, name} = event.target;
        setValues({...values, [name]: value})
    };

    const clearValues = () => {
        setValues(initialState);
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = e => {
        e.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "subscription", ...values })
        }).then(() => {
            toast.success(t("subscriptionSuccess"))
            clearValues();
        }).catch(error => {
            toast.error(t("subscriptionError"))
            console.error(error)
        });
    };

    return (
        <form className="gc-form" name="subscription" onSubmit={handleSubmit} method="POST"
              data-netlify="true" data-netlify-honeypot="bot-field" >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="subscription" />
            <div className="field is-horizontal">
                <label className="label">
                    {t("name")}
                    <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label className="label">
                    {t("lastName")}
                    <input
                        className="input"
                        type="text"
                        name="lastName"
                        placeholder="Apellido"
                        value={values.lastName}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div className="field is-fullwidth">
                <label className="label">
                    {t("email")}
                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="email@gmail.com"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div className="field is-horizontal">
                <DonateButton label={t("donate")}/>
                <button type="submit" className="gc-button is-yellow">{t("subscribeMe")}</button>
            </div>
        </form>
    )
};

export default withTranslation()(SubscriptionForm);
