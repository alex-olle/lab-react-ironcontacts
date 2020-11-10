import React from 'react';

const ContactCard = (props) => {
  return (
    <>
      <tr>
        <td>
          <img src={props.pictureUrl} alt={props.name} />
        </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td>
          <button onClick={props.clickToDelete}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default ContactCard;
