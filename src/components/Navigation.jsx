import { Clapperboard, Film, Info, ListVideo, ShoppingBag } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const links = [
  { to: '/', label: 'StreamList', Icon: ListVideo },
  { to: '/movies', label: 'Movies', Icon: Film },
  { to: '/cart', label: 'Cart', Icon: ShoppingBag },
  { to: '/about', label: 'About', Icon: Info },
];

export default function Navigation() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" to="/" aria-label="StreamList home">
          <span className="brand-mark"><Clapperboard aria-hidden="true" size={24} /></span>
          <span>StreamList</span>
        </Link>
        <nav aria-label="Main navigation">
          {links.map(({ to, label, Icon }) => (
            <NavLink key={to} to={to} end className={({ isActive }) => isActive ? 'nav-link current' : 'nav-link'}>
              <Icon aria-hidden="true" size={17} /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
