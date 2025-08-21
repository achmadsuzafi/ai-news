import axios from 'axios';

const API_KEYS = {
  GNEWS: 'baba23dfb55b47ae9fec19e3b0b6710d',
  NEWSAPI: 'd974626a04a0430d867a42bb023fe46f', 
  NEWSDATA: 'pub_d6f135298b894351bee4776b11dbb847'  
};

export const fetchNews = async (keyword = 'AI') => {
  try {
    const sources = [
      axios.get(`https://gnews.io/api/v4/search?q=${keyword}&lang=en&max=10&apikey=${API_KEYS.GNEWS}`),
      axios.get(`https://newsapi.org/v2/everything?q=${keyword}&language=en&apiKey=${API_KEYS.NEWSAPI}`),
      axios.get(`https://newsdata.io/api/1/news?apikey=${keyword}`, {
        headers: { 'Ocp-Apim-Subscription-Key': API_KEYS.NEWSTADA }
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