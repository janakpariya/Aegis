import React from "react";
import Layout from "../components/layout";
import Location from "../components/location";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <Layout title="Aegis | Contact Us">
      <div className="fjaround p--16">
        <Location />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
