import { useState } from "react";

export const AddCatecory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChanged = ({ target }) => {
    setInputValue(event.target.value);
  };

  const onSumnit = (event) => {
    event.preventDefault();
    // console.log(event);
    // llamar setcategorires 
    if (inputValue.trim().length <=1) return;
    //setCategories(categories =>[inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => onSumnit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChanged}
        // onChange={(event) =>onInputChanged(event)}
      />
    </form>
  );
};
