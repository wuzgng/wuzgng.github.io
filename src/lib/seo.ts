export const site = {
  name: "Ng",
  url: "https://wuzgng.github.io",
  defaultDescription:
    "Ng的个人博客：记录技术推演、生活碎片，以及尚未被归类的思考。",
  defaultImage: "/images/og-cover.png",
  defaultImageAlt: "Ng博客默认封面图",
} as const;

export function absoluteUrl(path: string, base = site.url) {
  return new URL(path, base).href;
}

export function pageTitle(title: string) {
  return title.includes(site.name) ? title : `${title} | ${site.name}`;
}
