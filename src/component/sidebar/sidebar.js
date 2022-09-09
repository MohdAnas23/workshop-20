import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  height: 100%;
  width: auto;
  background-color: white;
  display: flex;
  padding: 10px;
  flex-direction: column;
  @media (min-width: 786px) {
    display: none;
  }
`;

const Sidebar = () => {
  const data = ["Patients", "Calender", "Users", "Billing"];
  return (
    <Main>
      <ul>
        {data.map((item) => (
          <li className="side">{item}</li>
        ))}
      </ul>
    </Main>
  );
};

export default Sidebar;
