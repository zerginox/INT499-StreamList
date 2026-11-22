import { Navigate, Outlet, Route, Routes } from 'react-router';
import Navigation from './components/Navigation';
import StreamList from './pages/StreamList';
import { About, Cart, Movies } from './pages/ReservedPages';

function Layout() {
  return (
    <div className="site">
      <a className="skip-link" href="#main" onClick={(event) => {
        event.preventDefault();
        document.getElementById('main').focus();
      }}>Skip to content</a>
      <Navigation />
      <main id="main" tabIndex="-1"><Outlet /></main>
      <footer className="site-footer">
        <div className="wrap footer-inner"><span className="studio">EZTechMovie</span><span>StreamList</span></div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<StreamList />} />
        <Route path="movies" element={<Movies />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
