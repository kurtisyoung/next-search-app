"use client";

import styled from "styled-components";

export const Page = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  main {
    margin: 2rem auto 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    height: 100vh;
    width: 100%;
    @media only screen and (min-width: 578px) {
      margin-top: 5rem;
    }
  }
`;
