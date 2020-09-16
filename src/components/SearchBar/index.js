import React, { useState } from "react";

import { Container, SearchInput, ButtonSearch } from "./styles";
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions";

const SearchBar = () => {
  const [searchText, setText] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async () => {
    await dispatch(search(searchText.toLowerCase()));
  };

  return (
    <Container>
      <SearchInput
        placeholder="Search a pokemon by his name"
        placeholderTextColor="#000"
        value={searchText}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => handleSearch()}
      />
      <ButtonSearch title="pesquisar" onPress={() => handleSearch()} />
    </Container>
  );
};

export default SearchBar;
