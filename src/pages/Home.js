// src/pages/Home.js
import React from "react";
// import { useState } from "react";

import styled from "styled-components";
import "../styles/Home.css";

const Home = () => {
  return (
    <HomeContainer>
      <MyLogo>EAY</MyLogo>

      <Hero>
        <h1>
          <sup>
            I<StyledImC>'</StyledImC>m
          </sup>{" "}
          <MyName>ERNEST AYITEY</MyName>
        </h1>
        <p>I EMBRACE THE DIGITAL WORLD</p>
        <p>
          I can help you build a product, feature, or website. Look through my
          work and experience! If you're interested, I am available for hire.
        </p>
        <ButtonContainer>
          <ActionButton>Check out my work</ActionButton>
          <ActionButton
            style={{
              background: "darkgreen",
            }}
          >
            Download Résumé
          </ActionButton>
        </ButtonContainer>
      </Hero>
    </HomeContainer>
  );
};


export default Home;

// Styled components
const HomeContainer = styled.div`
  // display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
`;

const MyLogo = styled.div`
  font-size: 40px;
  margin-top: -60px;
  // text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: -50px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-top: -15px;
  }
`;

const Hero = styled.section`
  margin-top: 10rem;
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  sup {
    font-size: 2.5rem;
    vertical-align: top;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-family: "Sen";
    text-align: center;
    color: #999;
    max-width: 80%;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1rem;
      max-width: 90%;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const MyName = styled.span`
  font-size: 4.2rem;
  font-weight: 600;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const StyledImC = styled.span`
  color: #0056b3;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;
