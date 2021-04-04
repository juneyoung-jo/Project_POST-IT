import { instance } from './index';

function allBlog() {
  return instance.get('blog');
}

function cartegorySearch(params: object, success: any, fail: any) {
  return instance.post('/blog', params).then(success).catch(fail);
}

function allYoutube() {
  return instance.get('youtube');
}

export { allBlog, cartegorySearch, allYoutube };
