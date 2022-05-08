import { Home } from "./Components/Home";
import { useEffect, useState } from "react";
import { Api } from "./Api/api";

export const App = () => {
  const [me, setMe] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    Api.getDescription().then((res) => {
      setMe(...res);
    });
    Api.getLinks().then((res) => {
      setLinks(res);
    });
  }, []);

  return <Home me={me} links={links} />;
};
