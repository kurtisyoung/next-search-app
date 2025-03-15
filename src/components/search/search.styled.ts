import styled from "styled-components";

export const Search = styled.div`
  position: relative;
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 2rem;
  border: 1px solid grey;
  padding: 1rem;
`;

export const Autocomplete = styled.select`
  position: absolute;
  background: white;
  width: 100%;
  padding: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow: auto;
  border-radius: 5px;
  top: 33px;
  option {
    padding: 0.5rem;
    list-style: none;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      background: #c6c6c6;
    }
  }
`;
