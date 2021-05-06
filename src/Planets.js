import React, { useEffect, useState } from "react";

import { fetchApi } from "./API/starWars";
import { List, Typography } from "antd";

const Planets = () => {
  const [films, setFilms] = useState();

  useEffect(() => {
    fetchApi("films/", setFilms);
  }, []);

  return (
    <>
      <List
        bordered
        dataSource={films}
        renderItem={(film) => (
          <List.Item>
            <Typography.Text>{film.title}</Typography.Text>
          </List.Item>
        )}
      />
    </>
  );
};

export default Planets;
