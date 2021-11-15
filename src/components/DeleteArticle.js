import axios from 'axios';
import React from 'react';

const DeleteArticle = ({ id }) => {

    const handelDelete = () => {
        axios.delete('http://localhost:3003/articles/' + id);
        window.location.reload();
    }

    return (
        <button onClick={() => {
            if (window.confirm('Voulez-vous supprimer cet article ?')) {
                handelDelete();
            }
        }}>Delete</button>
    );
};

export default DeleteArticle;