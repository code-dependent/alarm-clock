import React, { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";
import { Button } from "reactstrap";

function App() {
  const [a, setA] = useState(moment().format("LT"));
  const [formval, setFormval] = useState(moment().format("LT"));

  useEffect(() => {
    console.log("change");
    if (moment().format("HH:mm") === formval) {
      console.log("made it");
    }
  }, [a]);
  const t = () => {
    setInterval(() => setA(moment().format("LT")), 1000);
  };
  // let a = moment().format("LT");
  // useEffect(() => {}, [a]);
  // console.log(timezone.name());
  t();
  const changeHandle = (e) => {
    // const name = e.target.name;
    const val = e.target.value;
    console.log(typeof val);
    setFormval(val);
  };
  return (
    <div className="App">
      <div className="clock">
        {a}
        <div className="settings">
          <input
            style={{ fontSize: "15px", margin: "0px" }}
            name="setter"
            type="time"
            value={formval}
            onChange={(e) => changeHandle(e)}
          />
          <Button color="danger">Set</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
