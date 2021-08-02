import "./App.css";
//AXIOS
import axios from "axios";
//Hooks
import React, { useState, useEffect } from "react";
//COMPONENTS
import Card from "./components/card/card.compnent";

function App() {
  const [info, setInfo] = useState([]);
  const [toggleButton, setToggleButton] = useState(false);

  const baseUrl = "https://reqres.in/api/users?page=1";

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((resp) => {
        setInfo(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(info);

  const handlebutton = () => {
    setToggleButton(!toggleButton);
  };

  const deleteUser = (element) => {
    setInfo(info.filter((el) => el.id !== element.id));
  };

  return (
    <div className="App">
      <div>
        <button onClick={handlebutton}>
          {toggleButton ? "Hide Info" : "Show Info"}
        </button>
        {!toggleButton
          ? null
          : info.map((element) => {
              return (
                <Card
                  first_name={element.first_name}
                  last_name={element.last_name}
                  email={element.email}
                  deleteButton={deleteUser}
                  element={element}
                  key={element.id}
                />
              );
            })}
      </div>
    </div>
  );
}

export default App;
