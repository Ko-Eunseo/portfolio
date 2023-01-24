import Header from "./header";
import Footer from "./footer";
import Main from "./main";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
