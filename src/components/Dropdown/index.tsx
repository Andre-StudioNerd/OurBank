import styled from "styled-components";

export const Dropdown = styled.select`
  width: 100%;
  padding: 10px 40px 10px 16px;
  font-size: 16px;
  border-radius: 16px;
  border: 2px solid #000;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;

  option[value=""] {
    color: #888;
  }

  &:invalid {
    color: #888;
  }

  option:not(:first-child) {
    color: #000;
  }
`;
