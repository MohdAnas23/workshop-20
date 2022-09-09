import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";

const PatientsDetails = [
  {
    name: "Sara Smith",
    date: "Jan 9, 2020",
    image: "/images/Patient1.jpg",
    color: "#3acf61",
  },
  {
    name: "James Johnson",
    date: "No Clearance",
    image: "/images/Patient2.jpg",
    color: "#ff0000",
  },
  {
    name: "Patrice Page",
    date: "Aug 10, 2019",
    image: "/images/Patient3.jpg",
    color: "#3acf61",
  },
  {
    name: "Derek Diamon",
    date: "Nov 18, 2020",
    image: "/images/Patient4.jpg",
    color: "#3acf61",
  },
  {
    name: "John Adams",
    date: "No Clearance",
    image: "/images/Patient5.jpg",
    color: "#ff0000",
  },
  {
    name: "Sonia Johnson",
    date: "Dec 18, 2020",
    image: "/images/Patient6.jpg",
    color: "#3acf61",
  },
];

const InputBox = styled.input`
  width: 95%;
  padding: 10px;
  margin: 15px 0;
  border-radius: 5px;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
const profiles = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#e8f5fe",
          backgroundSize: "cover",
          height: "100%",
          padding: "5px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{ color: "#736f6f", fontSize: "15px", fontWeight: "600" }}
            >
              Patients
            </Typography>
          </Box>
          <Box>
            <ArrowBackIosIcon
              sx={{
                backgroundColor: "white",
                color: "#03a9f4",
                width: "15px",
                padding: "3px",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <InputBox placeholder="Search Patient" />
          <SearchIcon
            sx={{
              position: "absolute",
              top: "22px",
              right: "22px",
              zIndex: "100",
              color: "#706f6f",
            }}
          />
        </Box>
        {PatientsDetails.map((item) => (
          <Box
            key={Math.random()}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              justifyContent: "space-around",
              backgroundColor: "white",
              margin: "10px",
            }}
          >
            <Box>
              <img
                src={item.image}
                alt="fbhrb"
                style={{ width: "50px", borderRadius: "40px" }}
              />
            </Box>
            <Box sx={{ width: "150px" }}>
              <h1 style={{ fontSize: "16px", fontFamily: "Arial" }}>
                {item.name}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "#706f6f",
                  fontWeight: "500",
                }}
              >
                {item.date}
              </p>
            </Box>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: `${item.color}`,
                borderRadius: "6px",
              }}
            ></Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default profiles;
