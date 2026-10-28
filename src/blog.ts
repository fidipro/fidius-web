// Blog posts, newest first. Each post's page lives at src/pages/blog/<slug>.astro.
export const posts = [
  {
    slug: 'early-insights-model-routing',
    title: 'Early insights on model routing for coding agents',
    description:
      'We replayed real Claude Code sessions on a grid of models and effort levels. Running each task on the cheapest setting that completed it would cost 48 % of what users’ own choices cost.',
    date: '2026-10-27',
    readTime: '10 min read',
  },
];

export type Post = (typeof posts)[number];

export const postPath = (post: Post) => `/blog/${post.slug}/`;

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
