import fs from 'fs';
import path from 'path';
import vhtml from 'vhtml';
import copyDir from './utils/copyDir.js';
import app from './template/index.js';

const h = function (tagName, ...children) {
  let options = {};

  if (typeof children[0] === 'object') {
    options = children[0];
    children = children.slice(1);
  }

  return vhtml(tagName, options, ...children);
};

const mainWebsiteUrl = process.env.MAIN_WEBSITE_URL || 'http://127.0.0.1:9000';
const appWebsiteUrl = process.env.APP_WEBSITE_URL || 'http://127.0.0.1:8080';

const indexHtml = fs.readFileSync('template/index.html', 'utf8');

function createPage (pathname, title, tree) {
  const nav = `
    <nav>
      <a href="${mainWebsiteUrl}/">Home</a>
      <a href="/" ${!pathname.startsWith('/blog') && 'class="active"'}>Docs</a>
      <a href="/blog" ${pathname.startsWith('/blog') && 'class="active"'}>Blog</a>
      <a href="${mainWebsiteUrl}/support">Support</a>
    </nav>
  `;

  const page = indexHtml
    .replace('{{title}}', title)
    .replace('{{content}}', tree)
    .replace('{{nav}}', nav)
    .replace('{{mainWebsiteUrl}}', mainWebsiteUrl);

  const filepath = path.join('dist', pathname.substr(1));

  try {
    fs.mkdirSync(filepath, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }

  console.log('creating file:', filepath + '/index.html');

  fs.writeFile(filepath + '/index.html', page, function (error) {
    if (error) {
      throw error;
    }
  });
}

fs.rmdirSync('dist', { recursive: true });
fs.mkdirSync('dist');
copyDir('static', 'dist');

app(h, createPage);
