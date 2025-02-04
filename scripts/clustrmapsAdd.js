// scripts/injector.js
hexo.extend.injector.register(
  'body_end',
  `
  <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=ZRFN7bPPATGp14eKt5z41AVpORi1Kia-_0fc0bpsOWk&cl=ffffff&w=a"></script>
`,
  'home'
);
hexo.extend.injector.register(
  'head_begin',
  `
  <style>
    body > a {
      display: none !important;
    }
  </style>
`,
  'home'
);
