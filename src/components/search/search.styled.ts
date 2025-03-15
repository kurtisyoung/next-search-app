import styled from "styled-components";

export const Search = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 30rem;
  border-radius: 5px;
  height: 2rem;
  border: 1px solid grey;
  padding: 1rem;
`;

export const Autocomplete = styled.select`
  position: absolute;
  background: white;
  width: 100%;
  max-width: 30rem;
  padding: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow: auto;
  border-radius: 5px;
  top: 2.5rem;
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

export const SearchResults = styled.div`
  margin-top: 2rem;
  h3 {
    font-size: 1rem;
  }
`;

export const SearchCardsList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
