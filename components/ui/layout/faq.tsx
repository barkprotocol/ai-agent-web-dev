'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is BARK AI Agent?",
    answer: "BARK AI Agent is an advanced trading platform that combines artificial intelligence with blockchain technology to provide users with smart, automated trading strategies and real-time market insights."
  },
  {
    question: "How does BARK AI Agent work with Solana?",
    answer: "BARK AI Agent leverages Solana's high-speed, low-cost blockchain to execute trades quickly and efficiently. It also integrates with Solana's DeFi ecosystem for additional financial opportunities."
  },
  {
    question: "Is BARK AI Agent secure?",
    answer: "Yes, BARK AI Agent prioritizes security. We use industry-standard encryption, multi-factor authentication, and offer cold storage options. However, as with all financial platforms, we recommend users follow best practices for personal account security."
  },
  {
    question: "Can I customize my trading strategies with BARK AI Agent?",
    answer: "BARK AI Agent allows you to set your preferences and risk tolerance. The AI then tailors its trading strategies to match your individual needs and goals."
  },
  {
    question: "How do I get started with BARK AI Agent?",
    answer: "Getting started is easy! Simply sign up on our platform, connect your Solana wallet, set your trading preferences, and let our AI start working for you. We also provide comprehensive tutorials and customer support to help you along the way."
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-muted" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <h2 id="faq-heading" className="text-3xl font-bold mb-8 text-center text-foreground">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl mx-auto space-y-6"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className="bg-card text-card-foreground p-4 rounded-lg shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="bg-accent text-accent-foreground p-4 rounded-lg shadow-sm mt-2 transition-all duration-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

