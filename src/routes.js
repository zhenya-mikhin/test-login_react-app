import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'


export const routes = [
  {
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
];
