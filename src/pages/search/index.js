import React from 'react'
import { useSelector } from 'react-redux';
import CardCharacter from '../../components/cardCharacter';
import './style.css'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Search = () => {

  const searchList = useSelector(state => state.character.searchResults)
  const searchTerm = useSelector(state => state.character.searchTerm)

  return (
    <Grid fluid>
      <Row>
        <h1 className='titleSearch'>Você pesquisou por "{searchTerm}"</h1>
      </Row>
      <Row>
        {searchList && searchList.length && searchList.map((item, index) => (
          <Col xs={12} sm={6} md={6} lg={3} key={index} style={{ margin: '15px 0px' }}>
            <CardCharacter key={index} item={item} className='cardItem' />
          </Col>
        ))}
      </Row>
    </Grid>
  )
}

export default Search