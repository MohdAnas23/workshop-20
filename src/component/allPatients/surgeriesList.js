import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 500px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export function SurgeriesList(props) {
  const { item } = props;
  return (
    <Wrap>
      <Box
        sx={{ backgroundColor: "#e8f5fe", fontWeight: "600", padding: "15px" }}
      >
        {item.title}
      </Box>
      <Box
        sx={{ backgroundColor: "#f7f7f7", padding: "15px", lineHeight: "25px" }}
      >
        {item.descreption}
      </Box>
    </Wrap>
  );
}

export default SurgeriesList;
