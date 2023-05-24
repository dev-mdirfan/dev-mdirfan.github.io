---
title: Jekyll in One Shot
author: irfan
date: 2023-04-23 09:10:23 +0530
categories: [Tutorials, Jekyll]
tag: [jekyll]
---

Jekyll is a static site generator. It's super popular and it's really useful when you want to build a blog or static site.

Let's say you want to build blog but you don't want to get involve in some heavy potentially content management system or may be you don't know enough `HTML`, `CSS`. You can write your blog in markdown it's very easy and you can use themes.

## 01. Installation


### Mac Installation

- We required to run `ruby`. And it is programming language.
- Second we need to install `ruby gem` package.

```shell
# Check ruby version
ruby -v
```

```shell
# Check gem version
gem -v
```

```shell
# Install the Jekyll
gem install jekyll bundler
```

### Windows Installation

- Download and Install **Ruby Programming Language:** [Ruby Installer](https://rubyinstaller.org/downloads/) (must install above 2.4 version)
- Install **all 3 packages** one by one: (Ruby Installer 2)
  1. MSYS2 base installation
  2. MSYS2 system update
  3. MSYS2 and MINGW development toolchain

### Check Versions

```shell
# Check ruby version
ruby -v
```

```shell
# check gem version
gem -v
```

### Install Jekyll

```shell
gem install jekyll bundler
```

**Checking Installation:**

```shell
# Check jekyll version
jekyll -v
```

## 02. Creating a Site

**To Create your new fresh website blog:**
```shell
# take a website name "blogApp"
jekyll new blogApp
```

- Change your present directory to **blogApp**

**To see your site live preview:** (For first time)
```shell
# Serve up your website
bundle exec jekyll serve
```
**Otherwise:** Another attempts
```shell
jekyll serve
```
> Website Live on port: `http://127.0.0.1:4000/`
{: .prompt-info }

### Default files and folders

- **_posts :** Here, you most time you write your blog *post*.
- **_site :** In this folder all you finished final output of the site i.e. *static* website.
- **_config.yml :** (key value pair), It contains different *settings* about your site.
- **Gemfile :** It used to stores all of the gem dependency and `plugins` and `themes`.
- **`about.md` :** Default about page of the site.
- **`index.md` :** Default index file (Home page) of the site, written in markdown.

## 03. Front Matter

Front matter is the basically information that stores all the pages of the site.

### Front Matter in `_posts` directory:

- Front Matter write in either in `YAML` or `JASON` programming language. And both of these languages are define by key value pairs.

```yml
---
layout: post
title: Welcome to Jekyll!
date: 2023-04-23 15:58:59 +0800
catagories: [jekyll, update]

# Custom created by me
author: Mike
permalink: /about/
---
```

- __layout :__ It tells this file is used as blog post or it can be page that would be written in markdown/ HTML.
- __title :__ It is title of the blog post.
- __date :__ It contains date and time when the last time blog post was created.
- __catagories :__ If you want to create different catagories then it would be better.
- __author :__ It displays as the author of the blog post.

Where every posts markdown file follows the convention `YYYY-MM-DD-name-of-post.md` and also includes the necessary front matter.

### Links

By default, your link is like: `http://127.0.0.1:4000/jekyll/update/2023/04/17/welcome-to-jekyll.html`{: .filepath}

It's using **category** section then followed by **date** and then **title** of the posts.

## 04. Writing Posts

There are two ways of creating post file format first one is `markdown` file or `html` file.

### Naming Convention

Each blog posts have `YYYY-MM-DD-name-of-post.md` naming convention.

### Creating new post

**Create a new post file:** `2023-04-23-my-first-blog-post.md`

**Insert Front Matter and some content:**

```yml
---
layout: post
title: This is the new title
date: 2023-04-25 12:12:12 +0800
---

Some Content
```

You can Also create subdirectory inside `_post` directory in order to organize them effectively. Like: `_posts/project`

## 05. Drafts Post

- Create a directory with `_drafts` under root directory of the site.
- Create new posts inside `_drafts` folder. (`date-my-first-draft.md`)

```shell
# Run draft posts on local server
jekyll serve --draft
```

- If you are ready to publish then you can move into the `_posts` directory.

## 06. Creating Pages

- Two types of pages in jekyll first **blog posts** and second **general pages** (like about, contact me etc).
- You can also create a separate directory for the pages.
- `about.md` It is default page of the site given by jekyll.
- Create a page in root directory named as `donate.md` and insert these code.


```yml
---
layout: page
title: Donate
---

Donate to our site.
```

## 07. Permalinks

A permalink is permanent url/link for any posts or page to your website. You can create your own custom link for every posts.

```yml
---
permalink: "/my-new-url/"
---
```

Or you can write
```yml
---
permalink: "/my-new-url/test/test2"
---
```

Or you can access variable inside permalink:
```yml
---
permalink: /:categories
---
```
Or
```yml
---
title: "first-blog"
date: 2022-12-11
catagories: jekyll new-cat
permalink: /:categories/:year/:month/:day/:title.html
---
```

rendered as: `/jekyll/new-cat/2022/12/11/first-blog.html` or in last you can write any extension you want.

## 08. Default Front Matter

Default Front Matter is applied to all pages or some pages which defined in `_config.yml`.

```yml
---
layout: post
author: Joe
---
Content
```

To make it by default, do change in `_config.yml`:

```yml
default:
  - 
    scope:
      path: "" # applied to all file of the site.
    values:
      # values
```
Or
```yml
default:
  - 
    scope:
      path: "project" # applied to project directory
    values:
      layout: post
      author: Joe
```




