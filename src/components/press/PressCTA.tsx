import React, { useState } from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Send, BellRing } from 'lucide-react';

const PressCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real implementation, this would be an actual API call
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleSubscribe = () => {
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real implementation, this would be an actual API call
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="pt-20 pb-0 bg-japa-blue">
      <div className="container-wide">
        <div className="bg-japa-blue rounded-xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <AnimationWrapper animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Stay Updated on JAPA News
                </h2>
                <p className="text-white/90 text-lg mb-10">
                  Subscribe to our press release distribution list to receive the latest news and updates directly in your inbox.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mb-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label htmlFor="email" className="block text-white mb-2 text-sm">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                          required
                        />
                      </div>
                      <div className="flex items-end">
                        <button
                          type="submit"
                          className="bg-white text-japa-blue hover:bg-white/90 rounded-lg px-6 py-3 font-medium flex items-center gap-2 transition-colors"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Subscribing...' : 'Subscribe'}
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm mt-4">
                      By subscribing, you agree to receive JAPA press releases via email. You can unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <BellRing className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Thank You for Subscribing!</h3>
                    <p className="text-white/80">
                      You'll now receive our press releases and news updates directly in your inbox.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h3 className="text-white font-bold text-lg mb-3">Press Kit Download</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Access logos, images, and other brand assets for media use.
                  </p>
                  <AnimatedButton 
                    variant="outline" 
                    size="sm" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => document.getElementById('press-kits')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Press Kits
                  </AnimatedButton>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h3 className="text-white font-bold text-lg mb-3">Media Contact</h3>
                  <p className="text-white/80 text-sm mb-4">
                    For urgent inquiries, please contact our media relations team directly.
                  </p>
                  <AnimatedButton 
                    variant="outline" 
                    size="sm" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => document.getElementById('press-contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Contacts
                  </AnimatedButton>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressCTA; 