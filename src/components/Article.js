import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import DeleteArticle from './DeleteArticle';

const Article = ({ article }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editContent, setEditContent] = useState(article.content);

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-Fr', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return newDate;
    }

    const handelEdit = () => {
        setIsEdit(false);

        const data = {
            author: article.author,
            content: editContent,
            date: article.date
        }

        axios.put('http://localhost:3003/articles/' + article.id, data)
    }

    return (
        <div className="article" style={{ background: isEdit ? '#f3feff' : 'white' }}>
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateParser(article.date)}</em>
            </div>
            {isEdit ? (
                <textarea autoFocus defaultValue={article.content} onChange={(e) => setEditContent(e.target.value)}></textarea>
            ) : (
                <p>{article.content}</p>
            )}
            <div className="btn-container">
                {isEdit ? (
                    <button onClick={() => handelEdit()}>Valider</button>
                ) : (
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                )}
                <DeleteArticle id={article.id} />
            </div>
        </div>
    );
};

export default Article;