import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootpage from "./pages/rootPage";
import Listpage from "./pages/listPage";
import Addpage from "./pages/addPage";

export default function App(props) {
  const state = [
    {
      items: "Kaljaa",
      checked: "Sipsiä",
    },
  ];

  const countObjects = () => {
    const counted = state.items.length + state.checked.length;
    return counted;
  };

  const itemsLeft = () => {
    const counted = state.items.length + state.checked.length;
    if (state.items.length === 0 && state.checked.length > 0)
      return "Kaikki ostokset hoidettu, on aika suunnata kassalle";
    else if (state.items.length === 1)
      return "Vielä " + state.items.length + " \ntuote jäljellä";
    else if (state.items.length > 1)
      return "Vielä " + state.items.length + " \ntuotetta jäljellä";
    else if (state.items.length + state.checked.length === 0)
      return "Siirry muokkaamaan listaa";
    else if (state.items.length < 0) return "Nyt on jotain pahasti pielessä";
    return counted;
  };

  const liftUp = (item) => {
    const items = state.items;
    const checked = state.checked;
    item = checked.splice(checked.indexOf(item));
    items.push(item);
    const newState = [...items, ...checked];
    return newState;
  };

  const dropDown = (item) => {
    const items = state.items;
    const checked = state.checked;
    item = items.splice(items.indexOf(item));
    checked.push(item);
    const newState = [...items, ...checked];
    return newState;
  };

  const addItem = (newItem) => {
    const items = state.items;
    const checked = state.checked;
    newItem =
      state.inputElement.value.trim().charAt(0).toUpperCase() +
      state.inputElement.value.trim().slice(1);
    items.push(newItem);
    newItem.preventDefault();
    props.inputElement.value = "";
    const newState = [...items, ...checked];
    return newState;
  };

  const deleteItem = (item) => {
    const allItems = [...state.items, ...state.checked];
    const newState = allItems.filter((i) => i !== item);
    return newState;
  };

  const clearAll = () => {
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    const newState = [...state.items, state.checked];
    if (areYouSure === "kyllä") {
      while (newState.length > 0) {
        newState.pop();
      }
      if (newState.length === 0) {
        return alert("Lista tyhjennetty");
      } else {
        return newState;
      }
    }
    return newState;
  };

  const clearChecked = () => {
    const checked = state.checked;
    const newState = [...state.items, ...checked];
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (checked.length > 0) {
        checked.pop();
      }
      if (checked.length === 0) {
        return alert("Ostetut poistettu");
      } else {
        return newState;
      }
    }
    return newState;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Rootpage
                items={state.items}
                checked={state.checked}
                countObjects={countObjects}
              />
            }
          />
          <Route
            path="/list"
            element={
              <Listpage
                items={state.items}
                checked={state.checked}
                itemsLeft={itemsLeft}
                dropDown={dropDown}
                liftUp={liftUp}
              />
            }
          />

          <Route
            path="/add"
            element={
              <Addpage
                items={state.items}
                checked={state.checked}
                countObjects={countObjects}
                addItem={addItem}
                deleteItem={deleteItem}
                clearAll={clearAll}
                clearChecked={clearChecked}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
