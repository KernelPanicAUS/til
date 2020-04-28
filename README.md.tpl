
# TIL

> Today I Learned

A collection of concise write-ups on small things I learn day to day across a
variety of languages and technologies. These are things that don't really
warrant a full blog post.

---

### Categories
{% for category in categories %}
- [{{category.name}}](#{{category.name}})
{%- endfor %}
---
{% for category in categories %}
### {{category.name}}
{%- for article in category.articles %}
- [{{article.name}}]({{category.name}}/{{article.file}})
{%- endfor %}
{% endfor %}
