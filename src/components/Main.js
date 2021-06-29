// import { useEffect, useState } from "react";
import Data from "../data/data.json";
import Device from "./Device";

function Main() {
  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("../data/data.json")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);

  return (
    <div className="main">
      <div className="devices">
        {Data.devices.map((elem, index) => {
          return <Device data={Data} index={index} key={elem.id} />;
        })}
      </div>
    </div>
  );
}

export default Main;
