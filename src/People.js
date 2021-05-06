import React, { useEffect, useState } from "react";

import { fetchApi } from "./API/starWars";
import { List, Typography } from "antd";
import { getAllByAltText } from "@testing-library/react";

const People = () => {
  const [People, setPeople] = useState();

  useEffect(() => {
    fetchApi("people/", setPeople);
  }, []);

  return (
    <>
      <List
        bordered
        dataSource={People}
        renderItem={(people) => (
          <List.Item>
            <Typography.Text>{people.name}</Typography.Text>
          </List.Item>
        )}
      />
    </>
  );
};

export default People;
