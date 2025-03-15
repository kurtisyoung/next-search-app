interface SearchCardProps {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

const SearchCard = ({ title, description, tags, url }: SearchCardProps) => {
  return (
    <a href={url}>
      <h2>{title}</h2>
      <p>{description}</p>
      {tags.length ? (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}
    </a>
  );
};

export default SearchCard;
