# Role-Based Dashboard Application

A comprehensive React.js dashboard application with role-based access control, built with modern UI components and Tailwind CSS.

## Features

### Role-Based Access Control
- **Super Admin**: Full access to all features, can create admins and content creators
- **Admin**: Can create content creators and manage all content, cannot access super admin features
- **Content Creator**: Can create and manage their own content

### User Management
- Create, edit, and delete users based on role permissions
- Role-based visibility and access controls
- User profile management

### Content Management
- Create, edit, and delete content posts
- Rich content cards with images and descriptions
- Special offer system with expandable details
- Responsive grid layout for multiple posts
- Single content poster format when only one post exists

### Modern UI/UX
- Clean, modern design with Tailwind CSS
- Responsive design for all screen sizes
- Interactive modals and dialogs
- Smooth animations and transitions
- Professional color scheme and typography

## Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Beautiful icons
- **shadcn/ui** - Pre-built UI components

## Quick Start

### Prerequisites
- Node.js 16+ and npm installed
- Git (optional, for version control)

### Installation Steps

1. **Extract the project files** to your desired directory

2. **Navigate to the project directory**
   ```bash
   cd role-based-dashboard
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser** and go to `http://localhost:3000`

### Demo Accounts

Use these accounts to test different role functionalities:

**Super Admin:**
- Email: `superadmin@example.com`
- Password: `admin123`

**Admin:**
- Email: `admin@example.com`
- Password: `admin123`

**Content Creator:**
- Email: `creator@example.com`
- Password: `creator123`

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── tabs/               # Tab components (Home, Users, Content)
│   ├── modals/             # Modal components
│   ├── LoginForm.jsx       # Login form component
│   └── Dashboard.jsx       # Main dashboard component
├── contexts/
│   ├── AuthContext.js      # Authentication context
│   └── DataContext.js      # Data management context
├── lib/
│   └── utils.js           # Utility functions
├── App.js                 # Main application component
├── App.css               # Application styles
└── index.js              # Entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## Role Permissions

### Super Admin
- ✅ View all content on home tab
- ✅ Create and manage admin users
- ✅ Create and manage content creator users
- ✅ Create, edit, and delete all content
- ✅ Full system access

### Admin
- ✅ View all content on home tab
- ✅ Create and manage content creator users
- ✅ Create, edit, and delete all content
- ❌ Cannot manage super admin users

### Content Creator
- ✅ View all content on home tab
- ✅ Create new content
- ✅ Edit and delete own content only
- ❌ Cannot manage other users
- ❌ Cannot manage other users' content

## Features in Detail

### Content Display
- **Single Content**: Displayed as a large poster format with prominent "See Offer" button
- **Multiple Content**: Grid layout with scrollable container, each item has its own "See Offer" button
- **Offer Modal**: Expandable modal showing detailed offer information with attractive design

### User Interface
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Components**: Built with Radix UI primitives and styled with Tailwind CSS
- **Interactive Elements**: Hover effects, smooth transitions, and intuitive navigation
- **Professional Layout**: Clean header with user info and logout, tabbed navigation

### Data Management
- **Context-based State**: Uses React Context for global state management
- **Mock Database**: Simulated backend with in-memory data storage
- **Real-time Updates**: Immediate UI updates after data operations

## Customization

### Adding New Roles
1. Update the `mockUsers` array in `AuthContext.js`
2. Modify permission checks in components
3. Update role-based UI rendering logic

### Styling Changes
1. Modify Tailwind classes in components
2. Update the color scheme in `tailwind.config.js`
3. Customize component variants in UI components

### Adding Features
1. Create new components in the appropriate directory
2. Update the context providers for data management
3. Add new navigation tabs or modals as needed

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Or use a different port
PORT=3001 npm start
```

**Dependencies not installing:**
```bash
# Clear npm cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Ensure all dependencies are installed
npm install
# Try building again
npm run build
```

## Support

For issues or questions:
1. Check the console for error messages
2. Ensure all dependencies are properly installed
3. Verify Node.js version compatibility
4. Check browser developer tools for additional information

## License

This project is for demonstration purposes. Feel free to use and modify as needed.
