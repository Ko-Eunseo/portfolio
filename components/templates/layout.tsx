import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header>
        <h1>Eunseo Portfolio_FE Developer</h1>
      </Header>
      <div>{children}</div>
      <Footer>footer children</Footer>
    </div>
  );
};

export default Layout;
