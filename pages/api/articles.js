import data from './article.json';

export const getArticles = () => {
  return data;
};

export default (req, res) => {
  const articles = getArticles();
  res.json(articles);
};
