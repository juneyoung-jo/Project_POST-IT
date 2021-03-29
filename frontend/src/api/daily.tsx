import { createInstance } from './index';

const instance = createInstance();

function allBlog() {
  instance.get('blog/').then((e) => console.log(e));
}

function cartegorySearch(category: Array<number>) {
  instance.post('/blog', { category }).then((e) => console.log(e));
}

export { allBlog , cartegorySearch } 