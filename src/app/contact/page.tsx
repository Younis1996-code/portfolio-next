import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import React from "react";

export const metadata = {
  title: "Younis Issa | Contact",
  description: "Get in touch with Younis Issa for collaborations, freelance opportunities, or inquiries about web development projects.",
  keywords: "Younis Issa, contact, email, web developer, React, Next.js, freelance, hire",
  url: "https://portfolio-self-ten-96.vercel.app/contact",
  siteName: "Younis Issa Portfolio",
  openGraph: {
    title: "Younis Issa | Contact",
    description: "Get in touch with Younis Issa for collaborations, freelance opportunities, or inquiries about web development projects.",
    url: "https://portfolio-self-ten-96.vercel.app/contact",
    siteName: "Younis Issa Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Younis Issa | Contact",
    description: "Get in touch with Younis Issa for collaborations, freelance opportunities, or inquiries about web development projects.",
  },
};


const Contact = () => {
  return (
    <Container className="pt-18 md:pt-[77px] xl:pt-[99px] h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <ContactForm />
    </Container>
  );
};

export default Contact;
