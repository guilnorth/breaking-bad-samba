import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/ducks/character';
import './style.css';
const namesCharacters = require('../../utils/namesCharacters.json');

const Pagination = () => {

    const dispatch = useDispatch();
    const [pageActive, setPage] = useState(0);

    const handleSetPage = (e, indx) => {
        e.preventDefault();
        setPage(indx);
        dispatch(Actions.requestListCharacter(indx))
    };

    /**
     * Por hora, definido de forma fixa.
     */
    const limitListPerPage = 8;
    const pagesNum = [];

    for (let i = 0; i <= Math.ceil((namesCharacters.length - 1) / limitListPerPage); i++) {
        pagesNum.push(i);
    }



    return (

        <div className='pagination'>
            {pagesNum.map((indx) =>

                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a key={indx} href='#' onClick={e => handleSetPage(e, indx)} className={(pageActive === indx) ? "active" : ''}>{indx + 1}</a>

            )}
        </div>

    )
}

export default Pagination
