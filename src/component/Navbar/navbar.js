import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Badge, IconButton, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar/sidebar";

const Main = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Responsive = styled.div`
  @media (min-width: 270px) {
    display: none;
  }
  @media (min-width: 786px) {
    display: flex;
  }
`;
const Hamber = styled.div`
  @media (min-width: 270px) {
    display: flex;
  }
  @media (min-width: 786px) {
    display: none;
  }
`;

function Navbar() {
  const [showSideBar, setSidebar] = useState(false);
  function toggleSideBar() {
    setSidebar((prevState) => !prevState);
  }
  return (
    <>
      <Main>
        <Nav>
          <Hamber>
            <IconButton>
              <MenuIcon onClick={toggleSideBar}></MenuIcon>
            </IconButton>
          </Hamber>
          <Box>
            <img alt="" src="/images/Logo.png" style={{ width: "120px" }} />
          </Box>
          <Box sx={{ display: "flex", marginLeft: "30px" }}>
            <Responsive>
              <MenuItem
                disableRipple
                disableTouchRipple
                sx={{
                  paddingY: "30px",
                  color: "white",
                  backgroundColor: "rgb(66, 150, 246)",
                  width: "120px",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingX: "30px",
                  marginLeft: "30px",
                  fontWeight: "500",
                }}
              >
                Patients
              </MenuItem>
              <MenuItem
                sx={{
                  paddingY: "30px",
                  color: "black",
                  width: "120px",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingX: "30px",
                  fontWeight: "500",
                }}
              >
                Calender
              </MenuItem>
              <MenuItem
                sx={{
                  paddingY: "30px",
                  color: "black",
                  width: "120px",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingX: "30px",
                }}
              >
                User
              </MenuItem>
              <MenuItem
                sx={{
                  paddingY: "30px",
                  color: "black",
                  width: "120px",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingX: "30px",
                }}
              >
                Billing
              </MenuItem>
            </Responsive>
          </Box>
        </Nav>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <IconButton>
              <Badge variant="dot" color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box>
            <img
              src="/images/navBar-logo.jpg"
              alt=""
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "20px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            />
          </Box>
        </Box>
      </Main>
      {showSideBar ? <Sidebar /> : ""}
    </>
  );
}

export default Navbar;
