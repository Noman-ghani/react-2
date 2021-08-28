import React, {useState, useEffect} from 'react'
import Resturant from "./Basics/Resturant";
import UseState from "./Hooks/useState";
import UseEffect from "./Hooks/useEffect";
import UseReducer from "./Hooks/useReducer";

const ComponentButton = ({button}) => {

  const [component, setComponent] = useState(null);

  // useEffect(() => {
  //   if(component){
  //     setComponent(null);
  //   }
  // }, [component]);

  const renderComponent = () => {

      switch (button) {
        case "Resturant":
          return component ? setComponent(null) : setComponent(<Resturant />);

        case "UseState":
          return component ? setComponent(null) :setComponent(<UseState />);

        case "UseEffect":
          return component ? setComponent(null) :setComponent(<UseEffect />);

        case "UseReducer":
          return component ? setComponent(null) :setComponent(<UseReducer />);

        default:
          return setComponent(null);
      }

  }



  return (
    <>
      <button onClick={() => renderComponent(button)}>
        {button}
      </button>

      {component}

    </>
  );
}


export default ComponentButton;
