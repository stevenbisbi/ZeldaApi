import React from "react";
import { useEffect, useState } from "react";
import { ZeldaApi } from "../Api/object.api";
("../Api/object.api");
import { ZeldaList } from "../components/ZeldaList";

export function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function api() {
      const res = await ZeldaApi();
      setData(res.data);
      console.log(data);
    }
    api();
  }, []);

  return <ZeldaList />;
}
