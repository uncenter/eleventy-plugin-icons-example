# eleventy-plugin-icons-example

This is an example 11ty site showcasing [eleventy-plugin-icons](https://github.com/uncenter/eleventy-plugin-icons), generated using [create-eleventy-app](https://github.com/uncenter/create-eleventy-app).

## Usage

**Start the development server**:

```sh
pnpm start
```

**Build the site for production**:

```sh
pnpm build
```

**Clean the output directory**:

```sh
pnpm clean
```

## Customizing

### Adding a new page

To add a new page, create a new file in the `src` directory. For example, to create a new page at the URL `/about`, create a file at `src/about.md`.

### Adding a new layout

To add a new layout, create a new file in the `src/_includes` directory. For example, to create a new layout for posts, create a file at `src/_includes/post.njk`.

### Modifying site metadata

To modify the site metadata, edit the `src/_data/site.json` file. Feel free to add, change, and remove any properties.
To use a property in a template, use `{{ site.<property> }}`. For example, to use the site description in a template, use `{{ site.description }}`.
