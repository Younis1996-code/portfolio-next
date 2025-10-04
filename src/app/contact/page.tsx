import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'
import React from 'react'

const Contact = () => {
  return (
    <Container className='pt-18 md:pt-[77px] xl:pt-[99px] h-screen flex flex-col items-center justify-center overflow-x-hidden' >
      <ContactForm />
    </Container>
  )
}

export default Contact
