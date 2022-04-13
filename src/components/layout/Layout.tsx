import Content from "./Content";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
export default Layout