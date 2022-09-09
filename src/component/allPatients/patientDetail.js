import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PatientInfo from "./patientInfo";

const Main = styled.div`
  background: #f7f7f7;
  padding: 5px 40px 60px 40px;
  @media (max-width: 800px) {
    padding: 5px 15px 60px 15px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 1380px) {
    flex-direction: column;
  }
`;

const PatientDetail = () => {
  return (
    <Main>
      <Heading>
        <Box>
          <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif" }}>
            Patients Information
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "500",
            gap: 1,
          }}
        >
          <p style={{ fontWeight: "100" }}>Last updated:</p>
          10:25 AM, today
          <IconButton>
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
        </Box>
      </Heading>
      <Wrap>
        <img
          alt=""
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
          src="/images/Patient1.jpg"
        />
        <PatientInfo />
      </Wrap>
    </Main>
  );
};

export default PatientDetail;
