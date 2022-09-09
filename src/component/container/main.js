import React from "react";
import Profiles from "../allPatients/profiles";
import PatientDetail from "../allPatients/patientDetail";
import Condition from "../allPatients/condition";
import styled from "@emotion/styled";

const ProfileContainer = styled.div`
  width: 400px;
  @media (min-width: 601) and (max-width: 1920px) {
    width: 320px;
  }
`;

const PatientDetailsContainer = styled.div`
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
  @media (min-width: 601) and (max-width: 1920px) {
    display: flex;
  }
`;

const Wrap = styled.div`
  display: flex;
  border-top: 30px solid rgb(244, 243, 243);
`;

const Container = () => {
  return (
    <>
      <Wrap>
        <ProfileContainer>
          <Profiles />
        </ProfileContainer>
        <PatientDetailsContainer>
          <PatientDetail />
          <Condition />
        </PatientDetailsContainer>
      </Wrap>
    </>
  );
};

export default Container;
