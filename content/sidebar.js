import hyperx from 'hyperx';

export default function (h) {
  const html = hyperx(h);

  return html`
    <sidebar>
      <ul>
        <li>
          <span>Developers</span>
          <ul>
            <li><a href="/">Introduction</a></li>
            <li><a href="/guides/getting-started">Getting Started</a></li>
          </ul>
        </li>
        <li>
          <span>Global Logic</span>
          <ul>
            <li><a href="/api/global-logic/buckets">Buckets</a></li>
          </ul>
        </li>
      </ul>
    </sidebar>
  `;
};
