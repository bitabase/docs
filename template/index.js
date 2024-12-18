import extra from '../content/extra.js';
import blog from './blog.js';
import pages from './pages.js';

function app (h, createPage) {
  extra(h, createPage);
  blog(h, createPage);
  pages(h, createPage, 'api');
  pages(h, createPage, 'guides');
}

export default app;
