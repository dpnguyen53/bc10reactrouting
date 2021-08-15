import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${(props) => (props.second ? "red" : "#3498db")};
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export default function StyledCmpPage() {
  return (
    <div>
      <h3>StyledCmpPage</h3>
      <Loader></Loader>
    </div>
  );
}
