import React, { Component } from "react"
import { withTranslation } from 'react-i18next';
import DonateButton from "../DonateButton"
import "./styles.sass"

class SubscribeForm extends Component {
    state = {
        name: "",
        lastName: "",
        email: ""
    };

    handleInputChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ "form-name": "subscription", ...this.state })
        })
            .then(() => alert("Gracias!"))
            .catch(error => console.error(error));
    }

    render() {
        const { t } = this.props;
        let {name, lastName, email} = this.state;

        return (
            <form className="gc-form" name="subscription" onSubmit={this.handleSubmit} method="POST"
                  data-netlify="true" data-netlify-honeypot="bot-field" >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="subscription" />
                <div class="field is-horizontal">
                    <label class="label">
                        {t("name")}
                        <input
                            class="input"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={name}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label class="label">
                        {t("lastName")}
                        <input
                            class="input"
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <div class="field is-fullwidth">
                    <label class="label">
                        {t("email")}
                        <input
                            class="input"
                            type="email"
                            name="email"
                            placeholder="email@gmail.com"
                            value={email}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <div class="field is-horizontal">
                    <DonateButton label={t("donate")}/>
                    <button type="submit" className="gc-button is-yellow">{t("subscribeMe")}</button>
                </div>
            </form>
        )
    }

}

export default withTranslation()(SubscribeForm);