import React, { useState } from "react";

import { Container, SearchInput, ButtonSearch } from "./styles";
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchText, setText] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async () => {
    await dispatch(search(searchText.toLowerCase()));
  };

  return (
    <Container>
      <FontAwesome
        name="search"
        color="#747476"
        size={14}
        style={{ marginLeft: 20 }}
      />
      <SearchInput
        placeholder="Search a pokemon by his name"
        placeholderTextColor="#747476"
        value={searchText}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => handleSearch()}
      />
    </Container>
  );
};

export default SearchBar;
