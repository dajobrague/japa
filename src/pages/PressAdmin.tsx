import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { pressReleases as initialPressReleases } from '@/data/pressData';
import { PressItem, PressCategory } from '@/types/press';
import { Calendar, Edit, Trash2, Eye, Plus, Search, ArrowUp, ArrowDown } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import PressReleaseForm from '@/components/press/PressReleaseForm';
import PressReleaseModal from '@/components/press/PressReleaseModal';
import PressAdminLogin from '@/components/press/PressAdminLogin';

const PressAdmin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pressItems, setPressItems] = useState<PressItem[]>([...initialPressReleases]);
  const [filteredItems, setFilteredItems] = useState<PressItem[]>([...initialPressReleases]);
  const [selectedItem, setSelectedItem] = useState<PressItem | null>(null);
  const [isViewingItem, setIsViewingItem] = useState(false);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<PressCategory | 'All'>('All');
  const [yearFilter, setYearFilter] = useState<string>('All');
  const [sortField, setSortField] = useState<keyof PressItem>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  // Check if user is already authenticated on component mount
  useEffect(() => {
    const authenticated = localStorage.getItem('pressAdminAuthenticated') === 'true';
    setIsAuthenticated(authenticated);
  }, []);
  
  // Handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('pressAdminAuthenticated');
    setIsAuthenticated(false);
  };
  
  // Extract available years from press releases
  const years = Array.from(
    new Set(pressItems.map(item => new Date(item.date).getFullYear().toString()))
  ).sort((a, b) => parseInt(b) - parseInt(a)); // Sort descending
  
  // Extract unique categories from press releases
  const categories = Array.from(
    new Set(pressItems.map(item => item.category))
  ) as PressCategory[];
  
  useEffect(() => {
    filterItems();
  }, [searchTerm, categoryFilter, yearFilter, pressItems, sortField, sortDirection]);
  
  const filterItems = () => {
    let filtered = [...pressItems];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.summary.toLowerCase().includes(term) ||
        item.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Apply category filter
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }
    
    // Apply year filter
    if (yearFilter !== 'All') {
      filtered = filtered.filter(item => 
        new Date(item.date).getFullYear().toString() === yearFilter
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      
      // Handle date sorting
      if (sortField === 'date') {
        aVal = new Date(a.date).getTime();
        bVal = new Date(b.date).getTime();
      }
      
      if (sortDirection === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
    
    setFilteredItems(filtered);
  };
  
  const handleSortClick = (field: keyof PressItem) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };
  
  const handleAddItem = () => {
    setIsAddingItem(true);
    setIsEditingItem(false);
    setIsViewingItem(false);
    setSelectedItem(null);
  };
  
  const handleEditItem = (item: PressItem) => {
    setSelectedItem(item);
    setIsEditingItem(true);
    setIsAddingItem(false);
    setIsViewingItem(false);
  };
  
  const handleViewItem = (item: PressItem) => {
    setSelectedItem(item);
    setIsViewingItem(true);
    setIsEditingItem(false);
    setIsAddingItem(false);
  };
  
  const handleDeleteItem = (id: number) => {
    if (window.confirm('Are you sure you want to delete this press release?')) {
      setPressItems(prevItems => prevItems.filter(item => item.id !== id));
    }
  };
  
  const handleFormCancel = () => {
    setIsAddingItem(false);
    setIsEditingItem(false);
    setSelectedItem(null);
  };
  
  const handleFormSubmit = (data: PressItem) => {
    if (isAddingItem) {
      // For the demo, generate a new ID (normally this would be done on the server)
      const newId = Math.max(...pressItems.map(item => item.id), 0) + 1;
      const newItem = { ...data, id: newId };
      
      setPressItems(prevItems => [newItem, ...prevItems]);
      setIsAddingItem(false);
    } else if (isEditingItem && selectedItem) {
      setPressItems(prevItems => 
        prevItems.map(item => item.id === selectedItem.id ? { ...data, id: item.id } : item)
      );
      setIsEditingItem(false);
      setSelectedItem(null);
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return <PressAdminLogin onLogin={handleLogin} />;
  }

  return (
    <PageLayout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-japa-slate">Press Release Management</h1>
            <div className="flex gap-3">
              <AnimatedButton 
                variant="primary" 
                size="lg"
                icon={<Plus className="w-5 h-5" />}
                onClick={handleAddItem}
              >
                Add Press Release
              </AnimatedButton>
              
              <AnimatedButton 
                variant="outline" 
                size="lg"
                onClick={handleLogout}
              >
                Logout
              </AnimatedButton>
            </div>
          </div>
          
          {(isAddingItem || isEditingItem) && (
            <div className="mb-8">
              <PressReleaseForm 
                initialData={isEditingItem ? selectedItem : undefined}
                onSubmit={handleFormSubmit}
                onCancel={handleFormCancel}
              />
            </div>
          )}
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-5 h-5 text-japa-slate/40 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search press releases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-japa-blue/20"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {/* Category filter */}
                  <div className="flex items-center">
                    <span className="text-sm text-japa-slate/70 mr-2">Category:</span>
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value as PressCategory | 'All')}
                      className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-japa-blue/20"
                    >
                      <option value="All">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Year filter */}
                  <div className="flex items-center">
                    <span className="text-sm text-japa-slate/70 mr-2">Year:</span>
                    <select
                      value={yearFilter}
                      onChange={(e) => setYearFilter(e.target.value)}
                      className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-japa-blue/20"
                    >
                      <option value="All">All Years</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-xs font-medium text-japa-slate/70 uppercase tracking-wider">
                      <button 
                        className="flex items-center space-x-1"
                        onClick={() => handleSortClick('title')}
                      >
                        <span>Title</span>
                        {sortField === 'title' && (
                          sortDirection === 'asc' ? 
                            <ArrowUp className="w-4 h-4" /> : 
                            <ArrowDown className="w-4 h-4" />
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-japa-slate/70 uppercase tracking-wider">
                      <button 
                        className="flex items-center space-x-1"
                        onClick={() => handleSortClick('category')}
                      >
                        <span>Category</span>
                        {sortField === 'category' && (
                          sortDirection === 'asc' ? 
                            <ArrowUp className="w-4 h-4" /> : 
                            <ArrowDown className="w-4 h-4" />
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-japa-slate/70 uppercase tracking-wider">
                      <button 
                        className="flex items-center space-x-1"
                        onClick={() => handleSortClick('date')}
                      >
                        <span>Date</span>
                        {sortField === 'date' && (
                          sortDirection === 'asc' ? 
                            <ArrowUp className="w-4 h-4" /> : 
                            <ArrowDown className="w-4 h-4" />
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-japa-slate/70 uppercase tracking-wider">
                      Featured
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-japa-slate/70 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredItems.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-japa-slate/70">
                        No press releases found matching your filters.
                      </td>
                    </tr>
                  ) : (
                    filteredItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://placehold.co/100?text=Error';
                                }}
                              />
                            </div>
                            <div>
                              <div className="font-medium text-japa-slate">{item.title}</div>
                              <div className="text-sm text-japa-slate/70 line-clamp-1">{item.summary}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-japa-slate">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-japa-slate/70 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(item.date)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {item.featured ? (
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Featured
                            </span>
                          ) : (
                            <span className="text-japa-slate/50">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleViewItem(item)}
                              className="p-1 text-japa-blue hover:bg-japa-blue/10 rounded"
                              title="View"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleEditItem(item)}
                              className="p-1 text-amber-600 hover:bg-amber-50 rounded"
                              title="Edit"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDeleteItem(item.id)}
                              className="p-1 text-red-600 hover:bg-red-50 rounded"
                              title="Delete"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-gray-200 text-sm text-japa-slate/70">
              Showing {filteredItems.length} of {pressItems.length} press releases
            </div>
          </div>
        </div>
      </div>
      
      {/* Preview Modal */}
      {isViewingItem && selectedItem && (
        <PressReleaseModal 
          pressRelease={selectedItem} 
          onClose={() => setIsViewingItem(false)} 
        />
      )}
    </PageLayout>
  );
};

export default PressAdmin; 