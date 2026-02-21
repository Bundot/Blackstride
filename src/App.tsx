import { useEffect, useMemo, useState } from 'react';
import { CommunityDriven } from './components/styles/CommunityDriven';
import DashboardPage from './components/pages/DashboardPage';
import ExplorersPage from './components/pages/ExplorersPage';
import ProcessPage from './components/pages/ProcessPage';
import QualityPage from './components/pages/QualityPage';

type Route = 'home' | 'dashboard' | 'explorers' | 'process' | 'quality';

function getRouteFromHash(hash: string): Route {
  const path = hash.replace(/^#\/?/, '').split('?')[0].toLowerCase();

  switch (path) {
    case 'dashboard':
      return 'dashboard';
    case 'explorers':
      return 'explorers';
    case 'process':
      return 'process';
    case 'quality':
      return 'quality';
    case '':
    default:
      return 'home';
  }
}

export function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const route = useMemo(() => getRouteFromHash(hash), [hash]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [route]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      {route === 'home' && <CommunityDriven />}
      {route === 'dashboard' && <DashboardPage />}
      {route === 'explorers' && <ExplorersPage />}
      {route === 'process' && <ProcessPage />}
      {route === 'quality' && <QualityPage />}
    </div>
  );
}