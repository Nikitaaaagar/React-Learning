import React from 'react'
import { useParams } from "react-router-dom";

const ArticlePage = () => {
    const { name } = useParams()
    return (
    <>
    <p>This is {name} Article</p>
    </>
)};

export default ArticlePage;