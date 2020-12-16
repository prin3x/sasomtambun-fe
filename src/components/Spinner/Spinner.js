import { Fragment } from 'react';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 4rem;
  position: relative;
  display: flex;
  justify-content: center;
  .spinner {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .spinner div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-top-color: #f78f1e;
    border-radius: 50%;
    animation: spinnerOne 1.2s linear infinite;
  }

  .spinner div:nth-child(2) {
    border: 8px solid transparent;
    border-bottom-color: #f78f1e;
    animation: spinnerTwo 1.2s linear infinite;
  }

  .spinnerTwo {
    width: 70px;
    height: 70px;
    position: relative;
    left: -4.2rem;
    top: 15%;
  }
  .spinnerTwo div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid transparent;
    border-right-color: #ffc808;
    animation: spinnerThree 1.2s linear infinite;
  }
  .spinnerTwo div:nth-child(2) {
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-left-color: #ffc808;
    animation: spinnerFour 1.2s linear infinite;
  }

  @keyframes spinnerOne {
    0% {
      transform: rotate(0deg);
      border-width: 10px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 1px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 10px;
    }
  }

  @keyframes spinnerTwo {
    0% {
      transform: rotate(0deg);
      border-width: 1px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 10px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 1px;
    }
  }
  @keyframes spinnerThree {
    0% {
      transform: rotate(0);
      border-width: 1px;
    }
    50% {
      transform: rotate(-180deg);
      border-width: 10px;
    }
    100% {
      transform: rotate(-360deg);
      border-width: 1px;
    }
  }
  @keyframes spinnerFour {
    0% {
      transform: rotate(0);
      border-width: 10px;
    }
    50% {
      transform: rotate(-180deg);
      border-width: 1px;
    }
    100% {
      transform: rotate(-360deg);
      border-width: 10px;
    }
  }
`;

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <div className='spinner'>
        <div></div>
        <div></div>
      </div>
      <div className='spinnerTwo'>
        <div></div>
        <div></div>
      </div>
    </SpinnerWrapper>
  );
}
