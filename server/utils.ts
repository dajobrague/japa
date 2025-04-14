import { NotionPage, FormattedPage } from './types';

export const formatNotionPage = (page: NotionPage): FormattedPage => {
  return {
    id: page.id,
    title: page.properties.Name.title[0]?.text.content || '',
    description: page.properties.Description.rich_text[0]?.text.content || '',
    imageUrl: page.properties.Image.files[0]?.file.url || '',
    category: page.properties.Category.select?.name || ''
  };
};

export const isValidCategory = (category: string): boolean => {
  const validCategories = ['Universities', 'Healthcare', 'City Centers', 'Corporate Campuses'];
  return validCategories.includes(category);
}; 