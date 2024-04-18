import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext"; 
const colors = ["#1E0342", "#F0EBE3", "#0E46A3"];

function ThemeContainer() {
  const { dispatch } = useContext(GlobalContext);
  const changeColor = (color) => {
    dispatch({
      type: "NAVBAR-BG",
      payload: color
    });
  };

  return (
    <div className="mb-10 py-3">
      <div className="align-el flex justify-between items-center">
        <div className="flex flex-row gap-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              className="h-8 w-8 rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <label className="swap swap-rotate" htmlFor="themeCheckbox">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" id="themeCheckbox" />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* SVG path for sun icon */}
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* SVG path for moon icon */}
          </svg>
        </label>
      </div>
    </div>
  );
}

export default ThemeContainer;