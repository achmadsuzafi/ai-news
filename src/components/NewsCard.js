import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const NewsCard = ({ title, url, date, source }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className="news-card">
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        
        <div className="meta-data">
          <AccessTimeIcon fontSize="small" />
          <Typography variant="caption">
            {formatDate(date)} | {source}
          </Typography>
        </div>
        
        <Button 
          href={url} 
          target="_blank" 
          rel="noopener"
          variant="outlined"
          size="small"
          fullWidth
        >
          Read Full Article
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;