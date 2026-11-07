import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { QuickView } from './QuickView';
import { SearchOverlay } from './SearchOverlay';
import { MobileNav } from './MobileNav';
import { useCart } from '../context/CartContext';

export function Layout() {
  const { quickViewProduct } = useCart();

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
      <CartDrawer />
      <SearchOverlay />
      {quickViewProduct && <QuickView />}
    </div>
  );
}
