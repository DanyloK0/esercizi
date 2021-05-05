import React, { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { fetchApi } from "./API/starWars";
import { List, Typography } from "antd";
const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchApi("films/", setFilms);
  }, []);
  console.log(films);

  return (
    <>
      <Counter>ciao</Counter>
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

export default App;
