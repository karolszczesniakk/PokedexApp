import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { themeActions } from "../../store/theme-slice";
import Button from "../UI/Button";
import "./Header.css"

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const themeType = useSelector((state: RootState) => state.theme.themeType);
  const style = themeType === "light" ? "header header--light" : "header";
  return (
    <header className={style}>
        <h1>Pokedex App</h1>
      <Button
        onClick={() => {
          dispatch(themeActions.toggleTheme());
        }}
      >
        Change theme
      </Button>
    </header>
  );
}


export default Header;