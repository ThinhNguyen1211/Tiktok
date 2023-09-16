import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/explore', component: Explore },
    { path: '/live', component: Live },
];

export const privateRoutes = [];
