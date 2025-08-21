import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword || 'AI');
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <TextField
        label="Search AI News"
        variant="outlined"
        size="small"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="machine learning, neural networks..."
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;