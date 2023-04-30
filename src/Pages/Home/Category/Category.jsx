import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../News/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {
              id &&   <h3>Category : {categoryNews.length}</h3>}
            {
                categoryNews.map( news => <NewsCard key={news._id} 
                    news={news}
                ></NewsCard> )
            }
        </div>
    );
};

export default Category;