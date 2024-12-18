import hyperx from 'hyperx';
import sidebar from './sidebar.js';

function homePage (h, createPage) {
  const html = hyperx(h);

  createPage('/', 'Developer Docs - Bitabase',
    html`
      <div class="with-sidebar">
        <div class="content thin">
          ${sidebar(h)}

          <section>
            <div><h2 id="general-information">General information</h2>

<p>Interfacing with the Bitabase server is done via an HTTP API.</p>
<p>Before you can play with the API's you will need an account, so
if you don't have one already, <a href="https://app.bitabase.com">sign up for free</a>.</p>
<h2 id="help-bitabase">Help Bitabase</h2>
<p>If you come across any bugs please help us by filing a Pull Request in github
on our <a href="https://www.github.com/bitabase/docs">documentation repo</a>.</p>
</div>
          </section>
        </div>
      </div>
    `
  );
}

function extraPages (h, createPage) {
  homePage(h, createPage);
}

export default extraPages;
