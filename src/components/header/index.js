import React, { useState } from "react";
import breakingBadLogo from "../../assets/Breaking_Bad_logo.svg";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/ducks/character";
import { Link } from "react-router-dom";
import { Container, Row } from "react-grid-system";

import "./style.css";
const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm && searchTerm.length >= 3)
      dispatch(Actions.requestSearch(searchTerm));
  };
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      handleSearch();
    }
  };

  const [searchTerm, setSearch] = useState("");

  return (
    <header className="header">
      <Container>
        <Row className="containerHeader">
          <Link to="/">
            <img src={breakingBadLogo} alt="Breaking Bad Logo" height="60" />
          </Link>

          <div className="searchContainer">
            <input
              type="text"
              placeholder="Pesquise os personagens"
              className="inputSearch"
              onChange={e => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="buttonSearch" onClick={handleSearch}>
              <FiSearch />
            </button>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
