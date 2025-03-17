import React, { useState } from 'react';
import { pressKits } from '@/data/pressData';
import { Download, ChevronDown, ChevronUp, Image, FileText, Package } from 'lucide-react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import AnimatedButton from '@/components/ui/AnimatedButton';

const PressKitSection: React.FC = () => {
  const [expandedKit, setExpandedKit] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    if (expandedKit === id) {
      setExpandedKit(null);
    } else {
      setExpandedKit(id);
    }
  };
  
  const handleDownload = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="my-20" id="press-kits">
      <AnimationWrapper animation="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-4">
            Media Resources
          </h2>
          <p className="text-japa-slate/70 max-w-2xl mx-auto">
            Access official JAPA logos, product images, and other resources for media use. All assets are available for download in high resolution.
          </p>
        </div>
        
        <div className="space-y-6">
          {pressKits.map((kit) => (
            <div 
              key={kit.id} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div 
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(kit.id)}
              >
                <div>
                  <h3 className="text-xl font-bold text-japa-slate">{kit.title}</h3>
                  <p className="text-japa-slate/70">{kit.description}</p>
                </div>
                <button className="p-2 text-japa-slate/60 hover:text-japa-slate">
                  {expandedKit === kit.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              {expandedKit === kit.id && (
                <div className="border-t border-gray-200 p-6">
                  {/* Logos */}
                  {kit.assets.logos && kit.assets.logos.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-bold text-japa-slate mb-4 flex items-center">
                        <Package className="w-5 h-5 mr-2 text-japa-blue" /> Logos
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {kit.assets.logos.map((logo, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center">
                            <div className="w-16 h-16 bg-white rounded border border-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                              <img src={logo.preview} alt={logo.name} className="max-w-full max-h-full p-2" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-japa-slate text-sm">{logo.name}</h5>
                              <AnimatedButton 
                                variant="text" 
                                size="sm"
                                className="mt-1"
                                icon={<Download className="w-4 h-4" />}
                                onClick={() => handleDownload(logo.download)}
                              >
                                Download
                              </AnimatedButton>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Images */}
                  {kit.assets.images && kit.assets.images.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-bold text-japa-slate mb-4 flex items-center">
                        <Image className="w-5 h-5 mr-2 text-japa-blue" /> Images
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {kit.assets.images.map((image, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="h-40 overflow-hidden">
                              <img src={image.preview} alt={image.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                              <h5 className="font-medium text-japa-slate">{image.name}</h5>
                              <AnimatedButton 
                                variant="outline" 
                                size="sm"
                                className="mt-2"
                                icon={<Download className="w-4 h-4" />}
                                onClick={() => handleDownload(image.download)}
                              >
                                Download Image Pack
                              </AnimatedButton>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Documents */}
                  {kit.assets.documents && kit.assets.documents.length > 0 && (
                    <div>
                      <h4 className="font-bold text-japa-slate mb-4 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-japa-blue" /> Documents
                      </h4>
                      <div className="space-y-3">
                        {kit.assets.documents.map((doc, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center">
                            <div className="w-10 h-12 bg-white rounded border border-gray-200 flex items-center justify-center mr-4 relative">
                              <FileText className="w-6 h-6 text-japa-blue/70" />
                              <div className="absolute bottom-0 right-0 left-0 h-2 bg-japa-blue"></div>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-japa-slate">{doc.name}</h5>
                              <p className="text-sm text-japa-slate/70 mb-2">{doc.description}</p>
                              <AnimatedButton 
                                variant="outline" 
                                size="sm"
                                icon={<Download className="w-4 h-4" />}
                                onClick={() => handleDownload(doc.download)}
                              >
                                Download PDF
                              </AnimatedButton>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default PressKitSection; 