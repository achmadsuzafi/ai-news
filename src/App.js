import React, { useState, useEffect } from 'react';
import { fetchNews } from './services/newsApi';
import NewsGrid from  './components/NewsGrid';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async (keyword = 'AI') => {
    setLoading(true);
    const data = await fetchNews(keyword);
    setNews(data.filter(item => item.title && item.url));
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>AI News Portal</h1>
        <SearchBar onSearch={loadNews} />
      </header>
      
      {loading ? (
        <div className="loading">Loading latest AI news...</div>
      ) : (
        <NewsGrid news={news} />
      )}
      
      <footer>
        <p>© 2025 AI News Portal | by Achmad Suzafi</p>
      </footer>
    </div>
  );
}

export default App;