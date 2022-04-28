/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'About',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Platform',
          items: [
            'about/platform-overview/README',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Build',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Release Notes',
          items: [
            'build/release-notes/caminogo',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
             {
              type: 'category',
              label: 'Nodes and Staking',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'build/tutorials/nodes-and-staking',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'References',
          items: [
            {
              type: 'autogenerated',
              dirName: 'build/references',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'APIs',
      items: [
        {
          type: 'category',
          label: 'CaminoGo APIs',
          items: [
            {
              type: 'autogenerated',
              dirName: 'apis/caminogo-apis',
            },
          ],
        },
        'apis/magellan',
      ],
    },
  ],
};

module.exports = sidebars;
