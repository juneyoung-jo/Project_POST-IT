import { instance } from './index';

function allBlog() {
  return instance.get('blog');
}

function cartegorySearch(params: object, success: any, fail: any) {
  instance.post('/blog', params).then(success).catch(fail);
}

export { allBlog, cartegorySearch };
