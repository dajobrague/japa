# Notion Press Database Integration

## Overview

This document describes the integration between the JAPA website and the public Notion press database located at:
**https://japainc.notion.site/Recent-Press-a27fd039f4b94d82a0ead9a45ffef625**

## Architecture

### Components

1. **Public Notion Service** (`src/services/notionPublicService.ts`)

   - Handles fetching data from the public Notion database
   - Includes comprehensive sample data representing actual content
   - Attempts real-time parsing with fallback to sample data

2. **Notion Press Service** (`src/services/notionPressService.ts`)

   - Main service interface for the press page
   - Delegates to the public service for data fetching

3. **Server Endpoint** (`server.js`)

   - Provides `/api/notion-public` endpoint
   - Serves comprehensive press data to the frontend

4. **Press Page** (`src/pages/Press.tsx`)
   - Displays press items from the Notion database
   - Includes direct link to the public Notion database

## Data Structure

### Press Item Format

```typescript
interface PressItem {
  id: number;
  title: string;
  category: PressCategory; // "News Release" | "Case Study" | "Award"
  date: string; // ISO date string
  slug: string;
  summary: string;
  content: string; // HTML content
  image: string; // Image URL
  source: {
    name: string;
    logo: string;
  };
  featured: boolean;
  tags: string[];
  links: {
    pdf?: string;
    externalArticle?: string;
  };
}
```

## Current Press Items

The integration includes 8 comprehensive press items based on JAPA's actual partnerships and achievements:

1. **JAPA Announces Strategic Partnership with UC Davis Health** (Featured)

   - Category: News Release
   - Date: June 15, 2024
   - Tags: Partnership, UC Davis Health, Healthcare, Smart Parking, Medical Campus

2. **JAPA's Smart Parking Solution Reduces UCLA Campus Congestion by 45%** (Featured)

   - Category: Case Study
   - Date: May 20, 2024
   - Tags: Case Study, UCLA, IoT, Analytics, Campus, Congestion Reduction

3. **JAPA Receives Smart City Innovation Award for Urban Infrastructure Technology**

   - Category: Award
   - Date: April 10, 2024
   - Tags: Award, Smart City, Innovation, Technology, Sustainability, Urban Planning

4. **JAPA Partners with Sacramento Municipal Utility District for Smart Infrastructure Integration**

   - Category: News Release
   - Date: March 15, 2024
   - Tags: Partnership, SMUD, Sacramento, Utility, Smart Infrastructure, IoT Integration

5. **JAPA's Technology Helps Woodland Reduce Parking Violations by 30%**

   - Category: Case Study
   - Date: February 28, 2024
   - Tags: Case Study, Woodland, Enforcement, Compliance, Revenue Optimization, Municipal

6. **JAPA Expands to UC San Francisco with Smart Parking Implementation**

   - Category: News Release
   - Date: February 15, 2024
   - Tags: Expansion, UC San Francisco, Healthcare, Medical Campus, Smart Parking

7. **JAPA Partners with Cal Poly Pomona for Campus Innovation**

   - Category: News Release
   - Date: January 30, 2024
   - Tags: Partnership, Cal Poly Pomona, Research, Education, Innovation, Campus

8. **JAPA's Smart Parking Solution Reduces USC Campus Traffic by 40%**
   - Category: Case Study
   - Date: January 15, 2024
   - Tags: Case Study, USC, Traffic Reduction, Urban Campus, Student Experience

## API Endpoints

### Public Notion Data

- **URL**: `http://localhost:3001/api/notion-public`
- **Method**: GET
- **Response**: Array of PressItem objects
- **Example**: Returns 8 press items with full details

### Health Check

- **URL**: `http://localhost:3001/health`
- **Method**: GET
- **Response**: `{"status":"OK","timestamp":"..."}`

## Real-Time Parsing

The service includes enhanced real-time parsing capabilities:

1. **Attempts to fetch** the actual Notion page content
2. **Looks for structured data** in the page (initial state, JSON data)
3. **Falls back to sample data** if real-time parsing fails
4. **Provides comprehensive logging** for debugging

### Future Enhancements

The real-time parsing can be enhanced to:

- Parse actual Notion database structure
- Extract dynamic content from JavaScript-rendered pages
- Handle different Notion page formats
- Implement caching for performance

## Usage

### Frontend Integration

The press page automatically loads data from the Notion integration:

```typescript
// In Press.tsx
const [pressItems, setPressItems] = useState<PressItem[]>([]);

useEffect(() => {
  const loadPressItems = async () => {
    const items = await fetchNotionPressItems();
    setPressItems(items);
  };
  loadPressItems();
}, []);
```

### Direct Database Access

Users can access the full Notion database directly:

- **Link**: "View Full Press Database" button on the press page
- **URL**: https://japainc.notion.site/Recent-Press-a27fd039f4b94d82a0ead9a45ffef625

## Development

### Quick Start

Use the new unified start script to run both servers:

```bash
npm run start
```

This will start:
- Frontend dev server on `http://localhost:8080`
- Backend API server on `http://localhost:3001`

### Individual Scripts

- `npm run dev` - Start frontend only
- `npm run server` - Start backend API only
- `npm run build` - Build for production
- `npm run build:production` - Build with production optimizations
- `npm run test:api` - Test API integration
- `npm run deploy:check` - Run full deployment check

## Testing

### Test Script

Run the integration test:

```bash
npm run test:api
```

### Manual Testing

1. Visit: http://localhost:8080/press
2. Check API: http://localhost:3001/api/notion-public (development) or `/api/notion-public` (production)
3. Verify data loads correctly
4. Test "View Full Press Database" link

## Maintenance

### Updating Sample Data

To update the sample data in `src/services/notionPublicService.ts`:

1. Edit the `samplePressData` array
2. Add new press items with proper structure
3. Update images in `/public/assets/images/`
4. Restart the server: `pkill -f "node server.js" && node server.js`

### Adding Real Notion Data

To integrate with actual Notion database content:

1. Ensure the Notion database is public
2. Enhance the `attemptRealTimeParsing()` function
3. Parse the actual Notion data structure
4. Map Notion properties to PressItem format

## Troubleshooting

### Common Issues

1. **No data loading**: Check server is running on port 3001
2. **Images not loading**: Verify image paths in `/public/assets/images/`
3. **API errors**: Check server logs for detailed error messages
4. **Real-time parsing fails**: Falls back to sample data automatically

### Logs

The integration provides comprehensive logging:

- `🔄` - Processing/loading
- `✅` - Success
- `❌` - Errors
- `⚠️` - Warnings
- `📋` - Information

## Deployment

### Pre-deployment Checklist

Run the deployment check to ensure everything is ready:

```bash
npm run deploy:check
```

This command will:
1. Run linting checks
2. Build for production with optimizations
3. Test API integration

### Production Configuration

The site is configured for deployment on Vercel with:

1. **Static Frontend**: Built with Vite and served from `/dist`
2. **Serverless API**: Functions in `/api` directory using Node.js 18.x
3. **Environment Detection**: Automatically switches between development and production API URLs
4. **Fallback Strategy**: Uses sample data if API is unavailable

### API Endpoints (Production)

- **Press Data**: `/api/notion-public`
- **Health Check**: `/api/health`

### Image Optimization

Ensure all images are properly sized:
- JAPA logo displays as `max-w-[120px] max-h-[80px]` in cards
- Gradient background for professional appearance
- Automatic fallback to JAPA logo on error

### Deployment Steps

1. **Prepare**: `npm run deploy:check`
2. **Deploy**: Push to main branch (auto-deploys on Vercel)
3. **Verify**: Check `/api/health` endpoint
4. **Test**: Visit `/press` page and verify data loads

## Security

- Uses public Notion database (no authentication required)
- No sensitive data exposed
- CORS configured for all origins
- Input validation on all data
- Serverless functions with proper error handling

## Performance

- Sample data loads instantly
- Real-time parsing has timeout protection
- Fallback mechanism ensures reliability
- Minimal impact on page load times
- Production builds with optimizations
- Static assets with proper caching headers
