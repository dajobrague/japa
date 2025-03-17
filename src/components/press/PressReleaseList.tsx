import React, { useState } from 'react';
import { PressItem } from '@/types/press';
import { Calendar, ArrowUpRight, Tag } from 'lucide-react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import PressReleaseModal from './PressReleaseModal';

interface PressReleaseListProps {
  pressReleases: PressItem[];
}

const PressReleaseList: React.FC<PressReleaseListProps> = ({ pressReleases }) => {
  const [selectedRelease, setSelectedRelease] = useState<PressItem | null>(null);
  
  const featuredReleases = pressReleases.filter(item => item.featured);
  const regularReleases = pressReleases.filter(item => !item.featured);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const handleSelectRelease = (release: PressItem) => {
    setSelectedRelease(release);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  const handleCloseModal = () => {
    setSelectedRelease(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  return (
    <div>
      {/* Featured releases */}
      {featuredReleases.length > 0 && (
        <AnimationWrapper animation="fade-up">
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredReleases.slice(0, 2).map((release) => (
                <div 
                  key={release.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer"
                  onClick={() => handleSelectRelease(release)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={release.image} 
                      alt={release.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-japa-slate rounded-full text-xs font-medium">
                        {release.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-japa-slate/60 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(release.date)}
                    </div>
                    
                    <h3 className="text-xl font-bold text-japa-slate mb-2 group-hover:text-japa-orange transition-colors">
                      {release.title}
                    </h3>
                    
                    <p className="text-japa-slate/70 mb-4 line-clamp-2">
                      {release.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {release.tags.slice(0, 2).map((tag, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center text-xs bg-gray-100 text-japa-slate/80 px-2 py-1 rounded"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <span className="text-japa-orange inline-flex items-center text-sm font-medium">
                        Read more <ArrowUpRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimationWrapper>
      )}
      
      {/* Regular releases grid */}
      <AnimationWrapper animation="fade-up" delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pressReleases.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-japa-slate/70 text-lg">No press releases found matching your filters.</p>
            </div>
          ) : (
            regularReleases.map((release) => (
              <div 
                key={release.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
                onClick={() => handleSelectRelease(release)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={release.image} 
                    alt={release.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 text-japa-slate rounded-full text-xs font-medium">
                      {release.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-japa-slate/60 text-xs mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(release.date)}
                  </div>
                  
                  <h3 className="text-lg font-bold text-japa-slate mb-2 line-clamp-2">
                    {release.title}
                  </h3>
                  
                  <p className="text-japa-slate/70 text-sm mb-3 line-clamp-2">
                    {release.summary}
                  </p>
                  
                  <span className="text-japa-orange inline-flex items-center text-sm font-medium">
                    Read more <ArrowUpRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </AnimationWrapper>
      
      {/* Modal */}
      {selectedRelease && (
        <PressReleaseModal 
          pressRelease={selectedRelease} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default PressReleaseList; 