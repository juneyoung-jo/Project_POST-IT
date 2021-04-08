import { instance } from './index';

function allBlog() {
  return instance.get('blog');
}

function cartegorySearch(category: number) {
  return instance.get(`blog/category?category=${category}`);
}
function allYoutube() {
  return instance.get('youtube');
}

export { allBlog, cartegorySearch, allYoutube };
