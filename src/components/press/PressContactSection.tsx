import React from 'react';
import { pressContacts } from '@/data/pressData';
import { Mail, Phone } from 'lucide-react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import AnimatedButton from '@/components/ui/AnimatedButton';

const PressContactSection: React.FC = () => {
  return (
    <section className="my-20" id="press-contact">
      <AnimationWrapper animation="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-4">
            Media Contacts
          </h2>
          <p className="text-japa-slate/70 max-w-2xl mx-auto">
            For press inquiries, interview requests, or additional information, please contact our media relations team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pressContacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              {contact.image && (
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={contact.image} 
                    alt={contact.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-japa-slate">{contact.name}</h3>
                <p className="text-japa-blue mb-4">{contact.position}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center md:justify-start text-japa-slate/70">
                    <Mail className="w-5 h-5 mr-2" />
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="hover:text-japa-blue transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                  
                  {contact.phone && (
                    <div className="flex items-center justify-center md:justify-start text-japa-slate/70">
                      <Phone className="w-5 h-5 mr-2" />
                      <a 
                        href={`tel:${contact.phone}`} 
                        className="hover:text-japa-blue transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  )}
                </div>
                
                <AnimatedButton 
                  variant="outline" 
                  size="sm"
                  className="mt-4"
                  onClick={() => window.location.href = `mailto:${contact.email}`}
                >
                  Contact {contact.name.split(' ')[0]}
                </AnimatedButton>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 mt-10 max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-japa-slate mb-2">General Press Inquiries</h3>
          <p className="text-japa-slate/70 mb-4">
            For general press inquiries or to be added to our press release distribution list, please email us at:
          </p>
          <div className="flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2 text-japa-blue" />
            <a 
              href="mailto:press@parkjapa.com" 
              className="text-japa-blue font-medium hover:underline"
            >
              press@parkjapa.com
            </a>
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default PressContactSection; 