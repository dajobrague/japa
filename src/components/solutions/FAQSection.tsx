import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import Pill from '@/components/ui/Pill';
import { FAQItem } from '@/types/solutions';
import { HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqItems }) => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-wide">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Pill className="mb-4">Questions & Answers</Pill>
            <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-japa-slate/80">
              Find answers to common questions about our smart parking solutions.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* FAQ image */}
          <div className="lg:col-span-5">
            <AnimationWrapper animation="fade-right">
              <div className="relative rounded-xl overflow-hidden h-full min-h-[300px] shadow-lg">
                <img 
                  src="/lovable-uploads/doug-bagg-FB406CKGL0Q-unsplash.jpg" 
                  alt="Smart parking solutions in action" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Have Questions?</h3>
                  <p className="text-white/90 mb-4">
                    Our team is ready to help you implement the perfect smart parking solution for your needs.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-white text-japa-blue font-medium px-5 py-2 rounded-lg hover:bg-japa-blue hover:text-white transition-colors w-fit"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* FAQ items */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <AnimationWrapper key={index} animation="fade-up" delay={50 * (index + 1)}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-japa-slate mb-3 flex items-center">
                      <HelpCircle className="w-5 h-5 text-japa-blue mr-2 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-japa-slate/80">{faq.answer}</p>
                  </div>
                </AnimationWrapper>
              ))}
            </div>

            <AnimationWrapper animation="fade-up" delay={300}>
              <div className="mt-12 text-center">
                <p className="text-japa-slate/80 mb-4">Don't see the answer to your question?</p>
                <a href="#" className="inline-flex items-center justify-center bg-japa-blue hover:bg-japa-darkBlue text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Contact Our Support Team
                </a>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 