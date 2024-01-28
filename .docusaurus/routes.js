import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/manojkanisol.github.io/blog',
    component: ComponentCreator('/manojkanisol.github.io/blog', '06f'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/archive',
    component: ComponentCreator('/manojkanisol.github.io/blog/archive', 'cef'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/first-blog-post',
    component: ComponentCreator('/manojkanisol.github.io/blog/first-blog-post', '82c'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/long-blog-post',
    component: ComponentCreator('/manojkanisol.github.io/blog/long-blog-post', '532'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/mdx-blog-post',
    component: ComponentCreator('/manojkanisol.github.io/blog/mdx-blog-post', '538'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/tags',
    component: ComponentCreator('/manojkanisol.github.io/blog/tags', '97d'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/tags/docusaurus',
    component: ComponentCreator('/manojkanisol.github.io/blog/tags/docusaurus', 'f44'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/tags/facebook',
    component: ComponentCreator('/manojkanisol.github.io/blog/tags/facebook', '0f3'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/tags/hello',
    component: ComponentCreator('/manojkanisol.github.io/blog/tags/hello', 'f3b'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/tags/hola',
    component: ComponentCreator('/manojkanisol.github.io/blog/tags/hola', 'bb9'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/blog/welcome',
    component: ComponentCreator('/manojkanisol.github.io/blog/welcome', '33b'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/markdown-page',
    component: ComponentCreator('/manojkanisol.github.io/markdown-page', '9ce'),
    exact: true
  },
  {
    path: '/manojkanisol.github.io/docs',
    component: ComponentCreator('/manojkanisol.github.io/docs', '54c'),
    routes: [
      {
        path: '/manojkanisol.github.io/docs',
        component: ComponentCreator('/manojkanisol.github.io/docs', 'd4f'),
        routes: [
          {
            path: '/manojkanisol.github.io/docs',
            component: ComponentCreator('/manojkanisol.github.io/docs', 'f74'),
            routes: [
              {
                path: '/manojkanisol.github.io/docs/category/tutorial---basics',
                component: ComponentCreator('/manojkanisol.github.io/docs/category/tutorial---basics', 'ccb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/category/tutorial---extras',
                component: ComponentCreator('/manojkanisol.github.io/docs/category/tutorial---extras', '23c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/intro',
                component: ComponentCreator('/manojkanisol.github.io/docs/intro', '936'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/manojkanisol.github.io/docs/tutorial-basics/congratulations', 'd5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/manojkanisol.github.io/docs/tutorial-basics/create-a-blog-post', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/manojkanisol.github.io/docs/tutorial-basics/create-a-document', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/manojkanisol.github.io/docs/tutorial-basics/create-a-page', '62b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/manojkanisol.github.io/docs/tutorial-basics/deploy-your-site', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/manojkanisol.github.io/docs/tutorial-basics/markdown-features', '05e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/manojkanisol.github.io/docs/tutorial-extras/manage-docs-versions', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manojkanisol.github.io/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/manojkanisol.github.io/docs/tutorial-extras/translate-your-site', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/manojkanisol.github.io/',
    component: ComponentCreator('/manojkanisol.github.io/', '460'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
