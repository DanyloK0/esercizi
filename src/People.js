import React, { useEffect, useState } from "react";

import { fetchApi } from "./API/starWars";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./style.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "birth_year",
    dataIndex: "birth_year",
    key: "birth_year",
  },
  {
    title: "gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "height",
    key: "height",
    dataIndex: "height",
    sorter: {
      compare: (a, b) => a.height - b.height,
      multiple: 2,
    },
    showSorterTooltip: false,
  },

  {
    title: "mass",
    key: "mass",
    dataIndex: "mass",
    sorter: {
      compare: (a, b) => a.mass - b.mass,
      multiple: 2,
    },
    showSorterTooltip: false,
  },
];

const People = () => {
  const [People, setPeople] = useState();

  useEffect(() => {
    fetchApi("people/", setPeople);
  }, []);

  return (
    <Table style={{ padding: "24px" }} columns={columns} dataSource={People} />
  );
};

export default People;
