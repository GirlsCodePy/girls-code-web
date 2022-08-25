import React, { useRef, useState } from 'react';
import { withTranslation } from 'react-i18next';

import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

import Layout from '../../components/Layout';
import CustomNavbar from '../../components/CustomNavbar';
import Container from '../../components/Container';
import './style.sass';
import ContactForm from './ContactForm';
import EmailSent from './EmailSent';

const ContactPage = ({ t }) => {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        'service_r951ybm',
        'template_yy8hgea',
        form.current,
        '8WALsufFZOplDZPVf'
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowForm(false);
        },
        (error) => {
          toast.error(t('contactSendError'));
        }
      );
  };

  return (
    <Layout>
      <ToastContainer />
      <Container>
        <CustomNavbar className="navbar-nopadding" />
      </Container>
      <div className={`section ${showForm ? 'contact-container-bg ' : ''}`}>
        <Container>
          {showForm ? (
            <ContactForm form={form} sendEmail={sendEmail} sending={sending} />
          ) : (
            <EmailSent />
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default withTranslation()(ContactPage);
