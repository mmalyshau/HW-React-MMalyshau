import { Header } from "@widgets/header/Header";
import { Footer } from "@widgets/footer/footer";

export const Layout = ({ children, cart }) => {
  return (
    <div className="layout">
      <Header cart={cart} />
      {children}
      <Footer />
    </div>
  );
}
