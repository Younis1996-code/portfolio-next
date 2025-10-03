'use client';

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvgwklgd");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className="grid gap-y-6 lg:gap-y-10 w-full lg:w-1/2 mx-auto my-8 lg:my-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-2">
        <label
          className="text-[4.10256vw]/[150%] md:text-[3.10256vw]/[150%] lg:text-[1.3888vw]/[150%] xl:text-[1.25vw]/[150%]"
          htmlFor="name"
        >
          Your Name
        </label>
        <input
          className="appearance-none rounded-md border-0 px-4 py-4 lg:p-5 outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-Green-65 bg-Grey-10 text-[3.5897vw]/[150%] md:text-[2.0806vw]/[150%] lg:text-[1.25vw]/[150%] xl:text-[1.04167vw]/[150%]"
          id="name"
          placeholder="Younis Issa"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className="text-[4.10256vw]/[150%] md:text-[3.10256vw]/[150%] lg:text-[1.3888vw]/[150%] xl:text-[1.25vw]/[150%]"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="appearance-none rounded-md border-0 p-4 lg:p-5 outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-Green-65 bg-Grey-10 text-[3.5897vw]/[150%] md:text-[2.0806vw]/[150%] lg:text-[1.25vw]/[150%] xl:text-[1.04167vw]/[150%]"
          id="email"
          placeholder="TlQ7S@example.com"
          name="email"
          required
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        {/* <p className="block leading-5 text-[--color-text-muted]">
          This will help me respond to your query via an email.
        </p> */}
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className="text-[4.10256vw]/[150%] md:text-[3.10256vw]/[150%] lg:text-[1.3888vw]/[150%] xl:text-[1.25vw]/[150%]"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="resize-none h-[30.769vw] md:h-40 appearance-none rounded-md border-0 p-4 lg:p-5 outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-Green-65 bg-Grey-10 text-[3.5897vw]/[150%] md:text-[2.0806vw]/[150%] lg:text-[1.25vw]/[150%] xl:text-[1.04167vw]/[150%]"
          id="message"
          placeholder="Help me Improve..."
          name="message"
          required
        />
        {/* <p className="block leading-5 text-[--color-text-muted]">
          What would you like to discuss?
        </p> */}
      </div>
      <div className="flex flex-row-reverse gap-x-6">
        <button
          className="cursor-pointer rounded-md bg-Green-75/80 px-6 lg:px-8 py-3 text-[4.10256vw]/[150%] md:text-[3.10256vw]/[150%] lg:text-[1.3888vw]/[150%] xl:text-[1.25vw]/[150%] font-semibold transition-colors duration-200 hover:bg-Green-75 focus-visible:bg-[--color-primary-active] focus-visible:outline-4 focus-visible:outline-[--color-highlight]"
          type="submit"
        >
          Submit
        </button>
          
        
      </div>
    </form>
  );
}



// text-[3.5897vw]/[150%] md:text-[2.0806vw]/[150%] lg:text-[1.25vw]/[150%] xl:text-[1.04167vw]/[150%]