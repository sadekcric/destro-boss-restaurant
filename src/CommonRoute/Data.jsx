import { useEffect, useState } from "react";

const Data = () => {
  const [menu, setMenu] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/menu`)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoader(false);
      });
  }, []);

  return [menu, loader];
};

export default Data;
