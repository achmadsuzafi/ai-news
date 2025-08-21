import axios from 'axios';

const API_KEYS = {
  GNEWS: 'gnews-api-key',
  NEWSAPI: 'newsapi-key', 
  BING: 'bing-api-key'   
};

export const fetchNews = async (keyword = 'AI') => {
  try {
    const sources = [
      axios.get(`https://gnews.io/api/v4/search?q=${keyword}&lang=en&max=10&apikey=${API_KEYS.GNEWS}`),
      axios.get(`https://newsapi.org/v2/everything?q=${keyword}&language=en&apiKey=${API_KEYS.NEWSAPI}`),
      axios.get(`https://api.bing.microsoft.com/v7.0/news/search?q=${keyword}`, {
        headers: { 'Ocp-Apim-Subscription-Key': API_KEYS.BING }
      })
    ];

    const responses = await Promise.allSettled(sources);
    
    return responses.map(res => {
      if (res.status === 'fulfilled') {
        const data = res.value.data;
        // Format respons sesuai API
        if(data.articles) return data.articles;      // GNews & NewsAPI
        if(data.value) return data.value;            // Bing
      }
      return [];
    }).flat();
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};