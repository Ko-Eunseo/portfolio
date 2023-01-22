type FooterProps = {
  children: React.ReactNode;
};
const Footer = ({ children }: FooterProps) => {
  return (
    <div>
      <footer>
        <h1>Footer 영역</h1>
        {children}
      </footer>
    </div>
  );
};

export default Footer;
