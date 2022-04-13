import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Content.css'

type Props = {
  children: React.ReactNode;
};

const Content: React.FC<Props> = ({ children }) => {
  const themeType = useSelector((state: RootState) => state.theme.themeType)
  
  const style = themeType === "light" ? "content content--light" : "content"

  return <section className={style}>{children}</section>;
};

export default Content;
