import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { fetchNotionPressItems } from '@/services/notionPressService';
import { PressItem } from '@/types/press';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import PressReleaseModal from '@/components/press/PressReleaseModal';
import { Calendar, ExternalLink, Tag } from 'lucide-react';

const Press: React.FC = () => {
  const [pressItems, setPressItems] = useState<PressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPressItem, setSelectedPressItem] = useState<PressItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const loadPressItems = async () => {
      try {
        setLoading(true);
        console.log('📢 Press page: Loading Notion data...');
        const items = await fetchNotionPressItems();
        console.log('📢 Press page: Loaded', items.length, 'items');
        console.log('📊 First item data structure:', items[0]);
        
        // Sort items by date (newest first)
        const sortedItems = items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPressItems(sortedItems);
      } catch (err) {
        console.error('❌ Error loading press items:', err);
        setError('Failed to load press items');
      } finally {
        setLoading(false);
      }
    };

    loadPressItems();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePressItemClick = (item: PressItem) => {
    // If item has a valid external link, open it directly
    if (item.links?.externalArticle && item.links.externalArticle !== '#') {
      window.open(item.links.externalArticle, '_blank', 'noopener,noreferrer');
    } else {
      // Otherwise, open the modal
      setSelectedPressItem(item);
    }
  };

  const handleCloseModal = () => {
    setSelectedPressItem(null);
  };

  // Pagination logic
  const totalPages = Math.ceil(pressItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = pressItems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageLayout>
      <div className="container-wide py-12">
        {/* Header */}
        <AnimationWrapper animation="fade-up">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-japa-slate">Recent</span>{' '}
              <span className="text-japa-orange">Press</span>
            </h1>
            <p className="text-lg text-japa-slate/80 max-w-2xl">
              Stay up to date with the latest news, announcements, and media coverage about JAPA's smart parking solutions.
            </p>

          </div>
        </AnimationWrapper>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-t-2 border-japa-orange rounded-full animate-spin"></div>
            <p className="mt-4 text-japa-slate/70">Loading press items...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-japa-orange text-white rounded-lg hover:bg-japa-orange/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* No Items State */}
        {!loading && !error && pressItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-japa-slate/70 text-lg">No press items available at this time.</p>
          </div>
        )}

        {/* Press Items Grid */}
        {!loading && !error && pressItems.length > 0 && (
          <>
            {/* Pagination Info */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-japa-slate/70">
                Showing {startIndex + 1}-{Math.min(endIndex, pressItems.length)} of {pressItems.length} articles
              </p>
              <p className="text-japa-slate/70">
                Page {currentPage} of {totalPages}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
              {currentItems.map((item) => (
                <AnimationWrapper key={item.id} animation="fade-up">
                <div 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-japa-orange/50 cursor-pointer group flex flex-col h-full"
                  onClick={() => handlePressItemClick(item)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="max-w-[120px] max-h-[80px] object-contain transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = '/japa-logo.png';
                      }}
                    />
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-japa-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-japa-slate flex items-center gap-1">
                      {item.category}
                      {item.links?.externalArticle && item.links.externalArticle !== '#' && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-japa-slate/60 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(item.date)}</span>
                    </div>

                    <h3 className="text-xl font-bold text-japa-slate mb-3 line-clamp-2 group-hover:text-japa-orange transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-japa-slate/80 mb-4 line-clamp-3 flex-grow">
                      {item.summary}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="inline-flex items-center gap-1 bg-japa-orange/10 text-japa-orange px-2 py-1 rounded-full text-xs font-medium"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-japa-slate/60 text-xs">
                            +{item.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="flex justify-end">
                      <button 
                        className="text-sm text-japa-orange hover:text-japa-orange/80 font-medium transition-colors flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePressItemClick(item);
                        }}
                      >
                        {item.links?.externalArticle && item.links.externalArticle !== '#' ? (
                          <>
                            View Article <ExternalLink className="w-3 h-3" />
                          </>
                        ) : (
                          'Read Full Article →'
                        )}
                      </button>
                    </div>

                    {/* Source */}
                    {item.source && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          {item.source.logo && (
                            <img 
                              src={item.source.logo} 
                              alt={item.source.name}
                              className="w-5 h-5 object-contain"
                            />
                          )}
                          <span className="text-sm text-japa-slate/60">
                            {item.source.name}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimationWrapper>
            ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-japa-slate disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                
                <div className="hidden sm:flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        page === currentPage
                          ? 'bg-japa-orange text-white'
                          : 'border border-gray-300 text-japa-slate hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <div className="sm:hidden text-japa-slate px-4 py-2">
                  {currentPage} / {totalPages}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-japa-slate disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Press Release Modal */}
      {selectedPressItem && (
        <PressReleaseModal 
          pressRelease={selectedPressItem} 
          onClose={handleCloseModal}
        />
      )}
    </PageLayout>
  );
};

export default Press; 