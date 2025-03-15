import type { SearchResult } from "@/src/types";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 5px;
  @media only screen and (min-width: 578px) {
    width: 30rem;
  }
  p {
    margin: 1rem 0;
  }
  ul {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    margin-bottom: 1rem;
    li {
      font-size: 0.65rem;
      font-weight: 600;
      background: black;
      color: white;
      border-radius: 10px;
      text-transform: capitalize;
      padding: 0.25rem 0.5rem;
    }
  }
  a {
    color: blue;
    transition: 100ms linear;
    &:hover {
      color: black;
      border-bottom: 1px solid grey;
    }
  }
`;

const SearchCard = ({ title, description, tags, url }: SearchResult) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{description}</p>
      {tags.length ? (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}
      <a href={url}>Read More</a>
    </Card>
  );
};

export default SearchCard;
