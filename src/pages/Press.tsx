import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { fetchNotionPressItems } from '@/services/notionPressService';
import { PressItem } from '@/types/press';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import { Calendar, ExternalLink, FileText, Tag } from 'lucide-react';

const Press: React.FC = () => {
  const [pressItems, setPressItems] = useState<PressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPressItems = async () => {
      try {
        setLoading(true);
        console.log('📢 Press page: Loading Notion data...');
        const items = await fetchNotionPressItems();
        console.log('📢 Press page: Loaded', items.length, 'items');
        setPressItems(items);
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
            <div className="mt-4">
              <a 
                href="https://japainc.notion.site/Recent-Press-a27fd039f4b94d82a0ead9a45ffef625" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-japa-orange hover:text-japa-orange/80 font-medium transition-colors"
              >
                <span>View Full Press Database</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressItems.map((item, index) => (
              <AnimationWrapper key={item.id} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-japa-orange/30">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/images/press/placeholder.png';
                      }}
                    />
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-japa-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-japa-slate">
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-japa-slate/60 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(item.date)}</span>
                    </div>

                    <h3 className="text-xl font-bold text-japa-slate mb-3 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-japa-slate/80 mb-4 line-clamp-3">
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

                    {/* Links */}
                    <div className="flex gap-3">
                      {item.links?.pdf && (
                        <a 
                          href={item.links.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-japa-orange hover:text-japa-orange/80 text-sm font-medium transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          PDF
                        </a>
                      )}
                      {item.links?.externalArticle && (
                        <a 
                          href={item.links.externalArticle}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-japa-orange hover:text-japa-orange/80 text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Read More
                        </a>
                      )}
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
        )}
      </div>
    </PageLayout>
  );
};

export default Press; 