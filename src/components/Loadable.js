import Loadable from 'react-loadable';
import Loading from './Loading';

export const Container = Loadable({
  loader: () => import('../pages/Container'),
  loading: Loading,
});

export const About = Loadable({
  loader: () => import('../pages/About'),
  loading: Loading,
});

export const Opening = Loadable({
  loader: () => import('../pages/Home/Opening'),
  loading: Loading,
});

export const Menu = Loadable({
  loader: () => import('../pages/Home/Menu'),
  loading: Loading,
});

export const AboutSidebar = Loadable({
  loader: () => import('../pages/About/Sidebar'),
  loading: Loading,
});
