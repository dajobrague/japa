import React, { useRef, useEffect } from 'react';
import { PressItem } from '@/types/press';
import { X, Calendar, Download, ExternalLink, Share2, Tag } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface PressReleaseModalProps {
  pressRelease: PressItem;
  onClose: () => void;
}

const PressReleaseModal: React.FC<PressReleaseModalProps> = ({ pressRelease, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const handleSharePress = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pressRelease.title,
          text: pressRelease.summary,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-japa-slate" />
        </button>
        
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={pressRelease.image} 
            alt={pressRelease.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 text-japa-slate rounded-full text-xs font-medium">
              {pressRelease.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 text-japa-slate/60 text-sm mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(pressRelease.date)}
            </div>
            
            {pressRelease.source && (
              <div className="flex items-center ml-4">
                {pressRelease.source.logo ? (
                  <img 
                    src={pressRelease.source.logo} 
                    alt={pressRelease.source.name}
                    className="h-4 mr-1"
                  />
                ) : null}
                <span>{pressRelease.source.name}</span>
              </div>
            )}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-japa-slate mb-4">
            {pressRelease.title}
          </h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {pressRelease.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center text-xs bg-gray-100 text-japa-slate/80 px-2 py-1 rounded"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <div 
            className="prose prose-slate max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: pressRelease.content }}
          />
          
          <div className="flex flex-wrap gap-4 justify-between items-center pt-6 border-t border-gray-200">
            <div className="flex gap-2">
              {pressRelease.links?.pdf && (
                <AnimatedButton 
                  variant="outline" 
                  size="sm"
                  icon={<Download className="w-4 h-4" />}
                  onClick={() => handleExternalLink(pressRelease.links?.pdf || '')}
                >
                  Download PDF
                </AnimatedButton>
              )}
              
              {pressRelease.links?.externalArticle && (
                <AnimatedButton 
                  variant="outline" 
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                  onClick={() => handleExternalLink(pressRelease.links?.externalArticle || '')}
                >
                  View Original Article
                </AnimatedButton>
              )}
              
              {pressRelease.links?.video && (
                <AnimatedButton 
                  variant="outline" 
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                  onClick={() => handleExternalLink(pressRelease.links?.video || '')}
                >
                  Watch Video
                </AnimatedButton>
              )}
            </div>
            
            <AnimatedButton 
              variant="outline" 
              size="sm"
              icon={<Share2 className="w-4 h-4" />}
              onClick={handleSharePress}
            >
              Share
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressReleaseModal; 