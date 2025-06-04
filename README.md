# Minimal Mistakes remote theme starter

Jekyll Doc: https://jekyllrb.com/docs/pages/

Click [**Use this template**](https://github.com/mmistakes/mm-github-pages-starter/generate) button above for the quickest method of getting started with the [Minimal Mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes).

Contains basic configuration to get you a site with:

- Sample posts.
- Sample top navigation.
- Sample author sidebar with social links.
- Sample footer links.
- Paginated home page.
- Archive pages for posts grouped by year, category, and tag.
- Sample about page.
- Sample 404 page.
- Site wide search.

Replace sample content with your own and [configure as necessary](https://mmistakes.github.io/minimal-mistakes/docs/configuration/).

## run

```
bundle exec jekyll serve
```

---

## Troubleshooting

If you have a question about using Jekyll, start a discussion on the [Jekyll Forum](https://talk.jekyllrb.com/) or [StackOverflow](https://stackoverflow.com/questions/tagged/jekyll). Other resources:

- [Ruby 101](https://jekyllrb.com/docs/ruby-101/)
- [Setting up a Jekyll site with GitHub Pages](https://jekyllrb.com/docs/github-pages/)
- [Configuring GitHub Metadata](https://github.com/jekyll/github-metadata/blob/master/docs/configuration.md#configuration) to work properly when developing locally and avoid `No GitHub API authentication could be found. Some fields may be missing or have incorrect data.` warnings.

## Multilingual Site with GitHub Pages

https://github.com/kurtsson/jekyll-multiple-languages-plugin/tree/master?tab=readme-ov-file


[Klaasnotfound: modifications of the plugin](https://www.klaasnotfound.com/2017/02/16/proper-multilingual-site-with-github-pages-and-jekyll/)

### Apply plugin recommandations

### Adapts Templates for archive and single pages

- for ex. the about.md page in the root has a `layout: single` and `title: pages.about`. So if its title start with "pages." we translate it.

  {% if page.title -%}
    {% capture title_prefix %}{{ page.title | slice: 0, 6 }}{% endcapture %}
    {% if title_prefix == 'pages.' %}
      {% capture pageTitle %}{% t page.title %}{% endcapture %}
    {% else %}
      {% assign pageTitle = page.title %}
    {% endif %}
    <h1 id="page-title" class="page__title"{% if site.lang %} lang="{{ site.lang }}"{% endif %}>{{ pageTitle }}</h1>
  {%- endif %}

### Set locale

- does not work
- use site.lang in all templates

### Change navigation depending on lang

- we load the navigation.yml depending on the current lang in masterhead and navi
- doc: https://mmistakes.github.io/minimal-mistakes/docs/navigation/
