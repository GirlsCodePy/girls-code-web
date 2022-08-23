import React from 'react';
import { withTranslation } from 'react-i18next';

import './style.sass';

const EmailSent = ({ t }) => {
  return (
    <div className="email-sent-image-container">
      <p className="is-size-2 has-text-center">{t('emailSent')}</p>
      <img src="/img/email-sent32.png" alt="email-sent" />
      <p className="is-size-5 has-text-center">{t('emailSentMessage')}</p>
    </div>
  );
};

export default withTranslation()(EmailSent);
