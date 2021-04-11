import React, { useState, useReducer, useMemo, useRef, useCallback } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites : []
}

const favoriteReducer = (state, { type, payload }) => {
  switch (type) {

  case 'ADD_TO_FAVORITE':
    return { 
      ...state, 
      favorites: [...state.favorites, payload] }

  default:
    return state
  }
}

const API = 'https://rickandmortyapi.com/api/character/'

const Characters = () => {
  // const [characters, setCharacters] = useState([]);
  const [favoritesState, dispatch] = useReducer(favoriteReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)
  
  const characters = useCharacters(API)

  const addFavorite = (payload) => {
    if (favoritesState.favorites.map(x => x.id).indexOf(payload.id) === -1){
      dispatch({type: 'ADD_TO_FAVORITE', payload})
    }
    
  }

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value)
    
  // }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [searchInput])

  const filteredCharacters = useMemo(() => 
    characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase())
    }), [characters, search]
  )

  return (
    <Container>
      <Row>
        <Col md="12">
          <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
        </Col>
      </Row>
      <Row>
        <Col>        
          <h3>Characters list</h3>
          {filteredCharacters.map(character => (
            <div id={character.id} key={character.id}>
              <p>
                {character.name}
                {favoritesState.favorites.map(x => x.id).indexOf(character.id) === -1 &&
                  <Button 
                    className="float-right"
                    variant="outline-primary"
                    size="sm" 
                    onClick={() => addFavorite(character)}>
                      Agregar a favoritos
                  </Button>
                }
                </p>
            </div>
          ))}
          {!filteredCharacters.length &&
            <span>No characters found</span>
          }
        </Col>
        <Col>
          <h3>Characters favorites</h3>
          {favoritesState.favorites.map(character => (
            <div id={character.id} key={character.id}>
              <p>{character.name}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Characters;
