import React from 'react'
import './style.css';
import { TiStarFullOutline } from 'react-icons/ti';



const CardCharacter = (props) => {
  const { item } = props;
  const image = item.img;

  /**
   * Status
   */
  let status = {}
  if (item.status === 'Presumed dead')
    status = { class: 'tag tag-status__rip', text: 'Morto*' }
  else if (item.status === 'Deceased')
    status = { class: 'tag tag-status__rip', text: 'Morto' }
  else if (item.status === 'Alive')
    status = { class: 'tag tag-status__alive', text: 'Vivo' }
  else
    status = { class: 'tag tag-status__unk', text: 'Desconhecido' }


  return (
    <div className="container">
      <span className={status.class}>{status.text}</span>
      <img src={image} alt={item.name} />
      <div className="content">
        <h2>{item.name}</h2>
        <div className="birth">
          <TiStarFullOutline className='iconBirth' />
          <span>{item.birthday}</span>
        </div>
        <p className="desc">{item.occupation.join(", ")}</p>
      </div>
    </div>


  )
}

export default CardCharacter
