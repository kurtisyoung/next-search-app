"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { autocompleteWords, searchCards } from "@/src/data/search";
import SearchCard from "./search-card";
import * as Styled from "./search.styled";

export default function Search() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams?.get("q") || "");
  const [autocomplete, setAutocomplete] = useState(autocompleteWords);
  const [searchResults, setSearchResults] = useState(searchCards);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filterSearchResults = (query: string) => {
    return searchCards.filter(
      ({ title, description, tags, url }) =>
        title.includes(query) ||
        description.includes(query) ||
        tags.includes(query) ||
        url.includes(query)
    );
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = e.target.value;
    setAutocomplete(
      autocompleteWords.filter(({ value }) => value.includes(currentSearch))
    );
    setSearchResults(filterSearchResults(currentSearch));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchQuery(e.target.value);
    setIsSearchFocused(false);
    console.log(e.target.value);
  };

  return (
    <Styled.Search>
      <Styled.Input
        placeholder="Search"
        defaultValue={searchQuery}
        onChange={handleOnChange}
        onFocus={() => setIsSearchFocused(true)}
        // onBlur={() => setIsSearchFocused(false)}
      />
      {isSearchFocused && autocomplete.length ? (
        <Styled.Autocomplete
          name="autocomplete"
          size={autocomplete.length < 5 ? autocomplete.length : 8}
          onChange={handleSelectChange}
        >
          {autocomplete.map(({ value, label }) => {
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </Styled.Autocomplete>
      ) : null}
      {searchResults.length ? (
        <div>
          {searchResults.map((searchResult) => (
            <SearchCard key={searchResult.title} {...searchResult} />
          ))}
        </div>
      ) : null}
    </Styled.Search>
  );
}
