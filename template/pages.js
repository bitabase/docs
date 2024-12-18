import path from 'path';
import { promises as fs } from 'fs';
import { format } from 'date-fns';
import { globby as glob } from 'globby';
import { marked } from 'marked';
import sidebar from '../content/sidebar.js';

function getPosition (string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

export default async function generateBlog (h, createPage, pathname) {
  const pagesEventual = (await glob(path.join('./content', pathname, '**/*.md')))
    .map(async file => {
      const stated = await fs.stat(file);

      return {
        file: '.' + file.slice('content'.length, -3),
        fullfile: file,
        lastModified: stated.mtime,
        content: await fs.readFile(file, 'utf8')
      };
    });

  const pages = await Promise.all(pagesEventual);

  pages.forEach(page => {
    const contentBody = page.content.slice(getPosition(page.content, '---', 2) + 4);
    const metadata = page.content.slice(4, getPosition(page.content, '---', 2))
      .trim()
      .split('\n')
      .reduce((previous, current) => {
        const split = current.split(':');
        previous[split[0]] = current.slice(current.indexOf(':') + 1).trim();
        return previous;
      }, {});

    metadata.lastModified = metadata.lastModified && new Date(metadata.lastModified);

    const content = marked(contentBody);

    const pageTree = h('',
      h('h1',
        metadata.title,
        h('small', page.name)
      ),
      h('div', { class: 'content-info' },
        h('a', { target: '_blank', class: 'edit-page', href: `https://github.com/bitabase/docs/blob/master/${page.fullfile}` },
          'Edit this page'
        ),
        h('em', 'Last updated: ', format(metadata.lastModified || page.lastModified, 'yyyy-MM-dd'))
      ),
      h('div', { dangerouslySetInnerHTML: { __html: content } }, 'placeholder'),
      h('hr')
    );

    createPage(page.file, metadata.title,
      h('div', { class: 'with-sidebar' },
        h('div', { class: 'content thin' },
          sidebar(h),
          h('section', pageTree)
        )
      )
    );
  });
};
