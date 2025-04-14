# JAPA

![JAPA Logo](public/assets/images/logo.png)

JAPA is a modern web application for managing and optimizing parking operations. It provides real-time parking data, analytics, and management tools for organizations of all sizes.

## 🌟 Features

- **Real-Time Parking Data**: Monitor parking occupancy with 99%+ accuracy
- **Analytics & Insights**: Gain valuable insights with historical data and occupancy trends
- **Violation Tracking**: Automatically detect parking violations with time-based monitoring
- **Seamless Integration**: Integrate with existing parking management systems
- **Web Management Console**: Access a powerful dashboard to manage your parking ecosystem
- **Commuter Mobile App**: Empower drivers with a feature-rich mobile app

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_NOTION_TOKEN=your_notion_token
VITE_NOTION_TABLE_BLOCK_ID=your_notion_table_block_id
```

### Running the Application

#### Development Mode

1. Start the proxy server (in a separate terminal):
   ```bash
   npm run server
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

#### Production Mode

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Notion API Integration

The application uses a proxy server to communicate with the Notion API to avoid CORS issues. The proxy server runs on port 3001 by default.

### Troubleshooting Notion API Issues

If you're experiencing issues with the Notion API:

1. Verify your Notion token is correct in the `.env` file
2. Check that the table block ID is correct
3. Ensure the proxy server is running when in development mode
4. Check the browser console for any error messages

## 🏗️ Project Structure

```
japa/
├── public/                 # Static assets
│   └── assets/             # Images, fonts, etc.
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Common components used across pages
│   │   ├── home/           # Components specific to the home page
│   │   └── ui/             # Basic UI components
│   ├── contexts/           # React contexts for state management
│   ├── data/               # Data files (case studies, features, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point
├── server/                 # Backend proxy server for Notion API
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── index.html              # HTML template
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment configuration
└── vite.config.ts          # Vite configuration
```

## 🧩 Key Components

### Features Section

The Features section showcases the main capabilities of JAPA. It includes:

- Feature cards with icons, titles, descriptions, and statistics
- Interactive modals with detailed information about each feature
- Responsive design that works on all device sizes

### Video Section

The Video section demonstrates the JAPA platform in action:

- Embedded video with custom controls
- Play functionality with no pause button overlay
- Responsive design that adapts to different screen sizes

### Partners Section

The Partners section highlights organizations that trust JAPA:

- Partner logos with hover effects
- "Why organizations choose JAPA" section with key benefits
- Responsive grid layout

## 🛠️ Technologies Used

- **React**: UI library for building the user interface
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Vite**: Next-generation frontend tooling for fast development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, consistent icons
- **React Router**: Client-side routing for single-page applications

## 📱 Responsive Design

JAPA is fully responsive and works on all device sizes:

- **Mobile**: Optimized for small screens with touch-friendly controls
- **Tablet**: Enhanced layout for medium-sized screens
- **Desktop**: Full-featured experience for large screens

## 🚀 Deployment

The project is configured for easy deployment to Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

```bash
# Deploy to Vercel
vercel --prod
```

### Recent Deployment Updates

- Updated image paths in the Partners section to use the correct `/assets/images/` directory
- Fixed the Test page to remove references to non-existent components
- Improved the Video section to have a play button overlay but no pause button
- Updated the FAQ page image carousel to use specific images from the Projects page

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or inquiries, please contact:

- Email: contact@japa.com
- Website: https://www.parkjapa.com

---

Made with ❤️ by the Airvues Team
