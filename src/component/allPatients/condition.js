import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import SurgeriesList from "./surgeriesList.js";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";

const condition = () => {
  const items = [
    "List of prior Surgeries",
    "List of medical Diagnosis",
    "List of Mediatons",
    "Airway Evaluation",
    "Anesthesia Clearance and Recommendations",
  ];

  const surgList = [
    { title: "First Surgery", descreption: "Yes" },
    { title: "Family History of surgecal complications", descreption: "Yes" },
    {
      title: "If Yes, Please provide more details",
      descreption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facilis eius repellat, ex dignissimos pariatur, necessitatibus suscipit, distinctio facere tempora cumque voluptatibus! Sint aperiam, doloremque accusamus repellat pariatur excepturi consequatur?",
    },
  ];
  const Main = styled.div`
    background: #f7f7f7;
    width: 100%;
    border-bottom: 1px solid #c2c2c2;
  `;

  const LinkItems = styled.div`
    color: grey;
    background: white;
    border: 1px solid #f7f7f7;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 500;
  `;

  const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    width: 56%;
    @media (max-width: 900px) {
      display: none;
    }
  `;

  const Card = styled.div`
    margin: 45px;
    @media (max-width: 800px) {
      margin: 20px;
    }
  `;

  const ContainerGrid = styled.div`
    display: grid;
    margin-top: 10px;
    grid-template-columns: repeat(5, auto);
    @media (max-width: 1500px) {
      grid-template-columns: auto;
    }
    @media (max-width: 1300px) {
      grid-template-columns: repeat(2, auto);
    }
    @media (max-width: 1300px) {
      grid-template-columns: auto;
    }
  `;

  const GridLinks = styled.div``;

  const KeyItem = styled.div`
    background: rgb(232, 245, 254);
    font-weight: 600;
    padding: 15px;
  `;
  const ValueItem = styled.div`
    background: rgb(247, 247, 247);
    padding: 15px;
  `;

  const Value = styled.div`
    background: rgb(247, 247, 247);
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <>
      <Main>
        <Wrap>
          {items.map((item) => (
            <LinkItems>{item}</LinkItems>
          ))}
        </Wrap>
      </Main>
      <Card>
        {surgList.map((item, key) => (
          <SurgeriesList key={key} item={item} />
        ))}
        <Box style={{ marginTop: "30px", color: "#5e5e5e" }}>
          Previous Surgeries
        </Box>
        <ContainerGrid>
          <GridLinks>
            <KeyItem>Surgery Type </KeyItem>
            <ValueItem>Shoulder recontruction</ValueItem>
          </GridLinks>
          <GridLinks>
            <KeyItem>Date </KeyItem>
            <ValueItem>january 2008</ValueItem>
          </GridLinks>
          <GridLinks>
            <KeyItem>Anesthesia Type</KeyItem>
            <ValueItem>General "breathing tube"</ValueItem>
          </GridLinks>
          <GridLinks>
            <KeyItem>Surgical Complications</KeyItem>
            <ValueItem>No</ValueItem>
          </GridLinks>
          <GridLinks>
            <KeyItem>
              Anesthesia Complications(nausea, vomiting, difficult intubation)
            </KeyItem>
            <Value>
              <Box>No</Box>
              <Box>
                <DeleteIcon />
                <CreateIcon />
              </Box>
            </Value>
          </GridLinks>
        </ContainerGrid>
        <Box>
          <Button
            style={{ marginBlock: "20px" }}
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add Surgery
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default condition;
