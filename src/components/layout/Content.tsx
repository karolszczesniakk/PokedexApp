import './Content.css'

type Props = {
  children: React.ReactNode;
};

const Content: React.FC<Props> = ({children}) => {
  return <section className="content">{children}</section>;
};

export default Content;
