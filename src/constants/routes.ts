import { Home, Test, Login } from '../components';

export const routes = [
  {
    key: 'index',
    path: '/',
    component: Login,
  },
  {
    key: 'home',
    path: '/home',
    component: Home,
  },
  {
    key: 'test',
    path: '/test',
    component: Test,
  },
  {
    key: 'login',
    path: '/login',
    component: Login,
  }
];

