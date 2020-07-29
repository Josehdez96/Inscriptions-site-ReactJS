import Badges from '../pages/badges.js';
import BadgeNew from '../pages/BadgeNew.js';
import BadgeDetails from '../pages/BadgeDetailsContainer.js';
import BadgeEdit from '../pages/BadgeEdit.js';
import Home from '../pages/Home.js';
import NotFound from '../pages/NotFound.js';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/badges',
    component: Badges,
  },
  {
    exact: true,
    path: '/badges/new',
    component: BadgeNew,
  },
  {
    exact: true,
    path: '/badges/:badgeId',
    component: BadgeDetails,
  },
  {
    exact: true,
    path: '/badges/:badgeId/edit',
    component: BadgeEdit,
  },
  {
    name: 'NotFound'
    component: NotFound,
  },
];

export default routes;
