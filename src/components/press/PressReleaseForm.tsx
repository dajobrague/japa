import React, { useState, useEffect } from 'react';
import { PressItem, PressCategory } from '@/types/press';
import { Calendar, Tag, X, Plus, Upload } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface PressReleaseFormProps {
  initialData?: PressItem;
  onSubmit: (data: PressItem) => void;
  onCancel: () => void;
}

const PressReleaseForm: React.FC<PressReleaseFormProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const isEditing = !!initialData;
  
  const [formData, setFormData] = useState<Partial<PressItem>>(
    initialData || {
      title: '',
      category: 'News Release',
      date: new Date().toISOString().split('T')[0],
      slug: '',
      summary: '',
      content: '',
      image: '',
      featured: false,
      tags: [],
      links: {}
    }
  );
  
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleFeaturedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, featured: e.target.checked }));
  };
  
  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    
    setFormData(prev => ({
      ...prev,
      tags: [...(prev.tags || []), tagInput.trim()]
    }));
    
    setTagInput('');
  };
  
  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: (prev.tags || []).filter(t => t !== tag)
    }));
  };
  
  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      links: {
        ...(prev.links || {}),
        [name]: value
      }
    }));
  };
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.slug) newErrors.slug = 'Slug is required';
    if (!formData.summary) newErrors.summary = 'Summary is required';
    if (!formData.content) newErrors.content = 'Content is required';
    if (!formData.image) newErrors.image = 'Image URL is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // In a real implementation, this would be an API call
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit(formData as PressItem);
    } catch (error) {
      console.error('Error saving press release:', error);
      setErrors({ form: 'Failed to save the press release. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !isEditing) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, isEditing]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-japa-slate">
          {isEditing ? 'Edit Press Release' : 'Create New Press Release'}
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        {errors.form && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            {errors.form}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left column */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block font-medium text-japa-slate mb-1">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-japa-blue/20`}
                placeholder="Enter press release title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>
            
            {/* Category */}
            <div>
              <label htmlFor="category" className="block font-medium text-japa-slate mb-1">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.category ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-japa-blue/20`}
              >
                <option value="News Release">News Release</option>
                <option value="Media Coverage">Media Coverage</option>
                <option value="Award">Award</option>
                <option value="Industry Update">Industry Update</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category}</p>
              )}
            </div>
            
            {/* Date */}
            <div>
              <label htmlFor="date" className="block font-medium text-japa-slate mb-1 flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-japa-blue/20`}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">{errors.date}</p>
              )}
            </div>
            
            {/* Slug */}
            <div>
              <label htmlFor="slug" className="block font-medium text-japa-slate mb-1">
                Slug *
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.slug ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-japa-blue/20`}
                placeholder="url-friendly-slug"
              />
              {errors.slug && (
                <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
              )}
              <p className="mt-1 text-xs text-japa-slate/60">
                Used in the URL. Auto-generated from title, but can be edited.
              </p>
            </div>
            
            {/* Image */}
            <div>
              <label htmlFor="image" className="block font-medium text-japa-slate mb-1">
                Image URL *
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-l-lg border ${
                    errors.image ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-japa-blue/20`}
                  placeholder="https://example.com/image.jpg"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-100 rounded-r-lg border border-gray-300 hover:bg-gray-200"
                  title="Upload image (not implemented in demo)"
                >
                  <Upload className="w-5 h-5 text-japa-slate" />
                </button>
              </div>
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">{errors.image}</p>
              )}
              {formData.image && (
                <div className="mt-2 rounded-lg overflow-hidden h-32 w-full bg-gray-100">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=Invalid+Image+URL';
                    }}
                  />
                </div>
              )}
            </div>
            
            {/* Featured */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleFeaturedChange}
                className="w-4 h-4 rounded border-gray-300 text-japa-blue focus:ring-japa-blue/20"
              />
              <label htmlFor="featured" className="ml-2 font-medium text-japa-slate">
                Featured (highlighted at the top of the list)
              </label>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            {/* Summary */}
            <div>
              <label htmlFor="summary" className="block font-medium text-japa-slate mb-1">
                Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.summary ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-japa-blue/20`}
                placeholder="Brief summary of the press release (displayed in listings)"
              />
              {errors.summary && (
                <p className="mt-1 text-sm text-red-600">{errors.summary}</p>
              )}
            </div>
            
            {/* Content */}
            <div>
              <label htmlFor="content" className="block font-medium text-japa-slate mb-1">
                Content *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={10}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.content ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-japa-blue/20`}
                placeholder="Full HTML content of the press release"
              />
              {errors.content && (
                <p className="mt-1 text-sm text-red-600">{errors.content}</p>
              )}
              <p className="mt-1 text-xs text-japa-slate/60">
                HTML content is supported. In a real implementation, this would use a rich text editor.
              </p>
            </div>
            
            {/* Tags */}
            <div>
              <label className="block font-medium text-japa-slate mb-1 flex items-center">
                <Tag className="w-4 h-4 mr-1" /> Tags
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-japa-blue/20"
                  placeholder="Add a tag"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-japa-blue text-white rounded-r-lg hover:bg-japa-blue/90"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-japa-slate"
                  >
                    {tag}
                    <button
                      type="button"
                      className="ml-1 text-japa-slate/50 hover:text-japa-slate"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
                {formData.tags?.length === 0 && (
                  <span className="text-japa-slate/50 text-sm">No tags added yet</span>
                )}
              </div>
            </div>
            
            {/* External Links */}
            <div>
              <label className="block font-medium text-japa-slate mb-3">
                External Links
              </label>
              
              <div className="space-y-3">
                <div>
                  <label htmlFor="pdf" className="block text-sm text-japa-slate/70 mb-1">
                    PDF Download URL
                  </label>
                  <input
                    type="text"
                    id="pdf"
                    name="pdf"
                    value={formData.links?.pdf || ''}
                    onChange={handleLinkChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-japa-blue/20"
                    placeholder="https://example.com/press-release.pdf"
                  />
                </div>
                
                <div>
                  <label htmlFor="externalArticle" className="block text-sm text-japa-slate/70 mb-1">
                    External Article URL
                  </label>
                  <input
                    type="text"
                    id="externalArticle"
                    name="externalArticle"
                    value={formData.links?.externalArticle || ''}
                    onChange={handleLinkChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-japa-blue/20"
                    placeholder="https://example.com/article"
                  />
                </div>
                
                <div>
                  <label htmlFor="video" className="block text-sm text-japa-slate/70 mb-1">
                    Video URL
                  </label>
                  <input
                    type="text"
                    id="video"
                    name="video"
                    value={formData.links?.video || ''}
                    onChange={handleLinkChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-japa-blue/20"
                    placeholder="https://youtube.com/watch?v=example"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6 flex justify-end gap-3">
          <AnimatedButton
            variant="outline"
            size="lg"
            onClick={onCancel}
          >
            Cancel
          </AnimatedButton>
          
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-japa-blue text-white rounded-lg font-medium hover:bg-japa-blue/90 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading 
              ? (isEditing ? 'Saving...' : 'Creating...') 
              : (isEditing ? 'Save Changes' : 'Create Press Release')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PressReleaseForm; 