"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { autocompleteWords, searchCards } from "@/src/data/search";
import SearchCard from "./search-card";
import type { SearchResult } from "@/src/types";
import * as Styled from "./search.styled";

export default function Search() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams?.get("q") || "");
  const [autocomplete, setAutocomplete] = useState(autocompleteWords);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const filterSearchResults = (query: string) => {
    console.log(query);
    return searchCards.filter(
      ({ title, description, tags, url }) =>
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        tags.some((tag) => tag.includes(query)) ||
        url.toLowerCase().includes(query)
    );
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setAutocomplete(
      autocompleteWords.filter(({ value }) => value.includes(query))
    );
    console.log(filterSearchResults(query));
    setSearchQuery(query);
    setSearchResults(filterSearchResults(query));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setSearchResults(filterSearchResults(query));
    setShowAutocomplete(false);
  };

  return (
    <Styled.Search>
      <Styled.Input
        placeholder="Search"
        value={searchQuery}
        onChange={handleOnChange}
        onFocus={() => {
          setShowAutocomplete(true);
          setHasSearched(true);
        }}
      />
      {showAutocomplete && autocomplete.length ? (
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
      {hasSearched && searchResults.length ? (
        <Styled.SearchResults>
          <h3>Search Results: {searchResults.length}</h3>
          <Styled.SearchCardsList>
            {searchResults.map((searchResult) => (
              <SearchCard key={searchResult.title} {...searchResult} />
            ))}
          </Styled.SearchCardsList>
        </Styled.SearchResults>
      ) : (
        <Styled.SearchCardsList>
          {hasSearched
            ? "No Search Results"
            : "This search database is focused on coding"}
        </Styled.SearchCardsList>
      )}
    </Styled.Search>
  );
}
