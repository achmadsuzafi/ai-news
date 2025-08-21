import React from 'react';
import NewsCard from './NewsCard';
import './NewsGrid.css'; // Assuming you have some styles for the grid

const NewsGrid = ({ news }) => {
  if (!news.length) return <p>No news found. Try another search term.</p>;

  return (
    <div className="news-grid">
      {news.map((article, index) => (
        <NewsCard 
          key={index} 
          title={article.title}
          url={article.url}
          date={article.publishedAt || article.datePublished}
          source={article.source?.name || article.provider?.[0]?.name}
        />
      ))}
    </div>
  );
};

export default NewsGrid;