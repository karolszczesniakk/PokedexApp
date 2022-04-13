import { useRef } from "react";
import Button from "../UI/Button";
import "./FilterOptions.css"

type Props = {
  onSubmit: (newNameFilter: string, newTypeFilter: string) => void;
};

const FilterOptions: React.FC<Props> = ({ onSubmit }) => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const typeInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newNameFilter = "";
    let newTypeFilter = "";

    if (nameInputRef.current) {
      newNameFilter = nameInputRef.current.value.toLowerCase();
    }

    if (typeInputRef.current) {
      newTypeFilter = typeInputRef.current.value.toLowerCase();
    }

    onSubmit(newNameFilter, newTypeFilter);
  };

  return (
    <div>
      <form className="filter-options" onSubmit={handleSubmit}>
        <h2>Filter by:</h2>
        <div className="filter-options__inputs">
          <span>Name: </span>
          <input ref={nameInputRef} placeholder="Pokemon's name"></input>
          <span>Type: </span>
          <input ref={typeInputRef} placeholder="Pokemon's type"></input>
        </div>

        <Button type="submit">Filter</Button>
      </form>
    </div>
  );
};

export default FilterOptions;
