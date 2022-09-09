import styled from "@emotion/styled";
import React from "react";

const Main = styled.div`
  position: relative;
  margin-top: 30px;
  @media (min-width: 1820px) {
    width: 1400px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, auto);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1550px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: right;
  @media (max-width: 1550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.Infowid};
  font-size: 15px;
  color: darkslategrey;
  line-height: 25px;
  font-weight: 500;
`;

const Commandata = styled.div`
  line-height: 25px;
  font-size: 15px;
  padding-top: 8px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-left: 20px;
  font-weight: 700;
`;
const Name = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  top: -30px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;
const ClearWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Isclear = styled.div`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  background-color: #3fc930;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Clear = styled.div`
  color: darkslategrey;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 14px;
`;

const data = ["Phone:", "Email:", "Gender:", "Age:"];
const info = ["456-159-789", "sara@mail.com", "Female", "45"];
const surg = [
  "Surgery Type: ",
  "Surgery Name:",
  "Height(cm)",
  "Weight(lbs)",
  "BMI",
];
const surgInfo = [
  "Rotator cutOff repair",
  "15 Augest 2020",
  "163",
  "110",
  "19",
];
const anesth = [
  "Anesthesiologist:",
  "Anesthesiologist Email:",
  "Anesthesiologist Phone:",
];
const anesthInfo = [
  "Dr.Christina Hardaway",
  "Christina@mail.com",
  "456-184-1549",
];
const patientInfo = () => {
  return (
    <Main>
      <Name>Sara Smith</Name>
      <GridContainer>
        <GridItem>
          <Menu Infowid="80px">
            {data.map((item) => (
              <Commandata>{item}</Commandata>
            ))}
          </Menu>
          <Item>
            {info.map((item) => (
              <Commandata>{item}</Commandata>
            ))}
          </Item>
        </GridItem>
        <GridItem>
          <Menu Infowid="150px">
            {surg.map((item) => (
              <Commandata>{item}</Commandata>
            ))}
          </Menu>
          <Item>
            {surgInfo.map((item) => (
              <Commandata>{item}</Commandata>
            ))}
          </Item>
        </GridItem>
        <GridItem>
          <Menu Infowid="200px">
            {anesth.map((item) => (
              <Commandata>{item}</Commandata>
            ))}
          </Menu>
          <Item>
            {anesthInfo.map((item) => (
              <Commandata>{item}</Commandata>
            ))}
          </Item>
        </GridItem>

        <Wrap>
          <ClearWraper>
            <Clear>Surgery Clearance</Clear>
            <Isclear>Yes</Isclear>
          </ClearWraper>
        </Wrap>
      </GridContainer>
    </Main>
  );
};

export default patientInfo;
