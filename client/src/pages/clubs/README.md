# Club Authentication System

This directory contains a complete club authentication system with login functionality and protected routes.

## Components

### 1. ClubLogin.jsx
- **Purpose**: Handles club authentication with email and password
- **Features**:
  - Email validation
  - Password validation (minimum 6 characters)
  - Loading states
  - Error handling with SweetAlert2
  - Responsive design

### 2. ProtectedRoute.jsx
- **Purpose**: Wrapper component that checks authentication status
- **Features**:
  - Automatically checks if club is logged in
  - Shows login form if not authenticated
  - Shows dashboard if authenticated
  - Handles logout functionality

### 3. ClubDashboard.jsx (Updated)
- **Purpose**: Main dashboard for authenticated clubs
- **New Features**:
  - Displays club information
  - Logout button
  - Protected content

### 4. ClubApp.jsx
- **Purpose**: Main entry point that wraps everything in authentication
- **Usage**: Import this component to use the complete club system

## Services

### clubAuth.jsx
- **Purpose**: Handles all authentication-related API calls
- **Features**:
  - Login/logout
  - Token management
  - Password change
  - Forgot password
  - Token refresh
  - Automatic token injection in requests

## Usage

### Basic Implementation
```jsx
import ClubApp from './pages/clubs/ClubApp';

function App() {
  return (
    <div>
      <ClubApp />
    </div>
  );
}
```

### Custom Implementation
```jsx
import ClubLogin from './pages/clubs/ClubLogin';
import ClubDashboard from './pages/clubs/ClubDashboard';
import { clubAuthService } from './pages/clubs/services/clubAuth';

function CustomClubApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clubData, setClubData] = useState(null);

  const handleLogin = (club) => {
    setIsAuthenticated(true);
    setClubData(club);
  };

  const handleLogout = () => {
    clubAuthService.logout();
    setIsAuthenticated(false);
    setClubData(null);
  };

  if (!isAuthenticated) {
    return <ClubLogin onLoginSuccess={handleLogin} />;
  }

  return <ClubDashboard currentClub={clubData} onLogout={handleLogout} />;
}
```

## API Endpoints

The system expects these backend endpoints:

- `POST /api/club/login` - Club login
- `POST /api/club/logout` - Club logout (optional)
- `POST /api/club/refresh-token` - Token refresh (optional)
- `PUT /api/club/change-password` - Change password (optional)
- `POST /api/club/forgot-password` - Forgot password (optional)
- `POST /api/club/reset-password` - Reset password (optional)

## Authentication Flow

1. **Initial Load**: Checks localStorage for existing token
2. **Not Authenticated**: Shows login form
3. **Login Success**: Stores token and club data, shows dashboard
4. **Dashboard**: Protected content with logout option
5. **Logout**: Clears token and data, returns to login

## Security Features

- **Token Storage**: JWT tokens stored in localStorage
- **Automatic Headers**: Token automatically added to API requests
- **Token Validation**: Checks token existence before allowing access
- **Secure Logout**: Clears all authentication data

## Styling

All components use CSS Modules with the `ClubDashboard.module.css` file. The login form has a beautiful gradient background and modern card design.

## Dependencies

- React (with hooks)
- SweetAlert2 for notifications
- Axios for API calls
- CSS Modules for styling

## Customization

You can easily customize:
- Login form fields
- Validation rules
- API endpoints
- Styling and themes
- Error messages
- Success redirects
