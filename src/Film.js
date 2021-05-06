import React, { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { fetchApi } from "./API/starWars";
import { List, Typography } from "antd";
const Film = () => {
  const [planets, setPlanets] = useState();

  useEffect(() => {
    fetchApi("planets/", setPlanets);
  }, []);

  return (
    <>
      <Counter></Counter>
      <List
        bordered
        dataSource={planets}
        renderItem={(planets) => (
          <List.Item>
            <Typography.Text>{planets.name}</Typography.Text>
          </List.Item>
        )}
      />
    </>
  );
};

export default Film;
