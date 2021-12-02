import { Fragment, useEffect } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from 'next/head'
function ContactPage() {

  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact me if you need anything"/>
      </Head>
      <ContactForm />
    </Fragment>
  );
}
export default ContactPage;
