# meubelherstel CMS Website Project

A custom made dynamic website for a woodwork company, meubelherstel

## Built with

The project uses [SvelteKit](https://kit.svelte.dev/) for the frontend and [Sanity](https://sanity.io/) to handle its content.

Original template can be found [here](https://github.com/sanity-io/sanity-template-sveltekit-clean).

## Project Structure

> **Note**
>
> The `/app` folder contains the frontend code, and the `/studio` folder contains the Sanity Studio code.
>
> This is **not** a monorepo setup. app and studio are deployed separately.

## References

- How to fetch content as data from [the Sanity Content Lake](https://www.sanity.io/docs/datastore)
- How to render block content with [Portable Text](https://www.sanity.io/docs/presenting-block-text)
- A [Sanity Studio](https://www.sanity.io/docs/sanity-studio) to create and edit content
- How to crop and render images with [Sanity Image URLs](https://www.sanity.io/docs/image-url)

## Getting started

The following commands are meant to be run in **both** the `/app` and `/studio` folders.

1. `npm install` to install dependencies
2. `npx -y sanity@latest init --env`, this will:

- ask you to select or create a Sanity project and dataset, use the same Sanity project and dataset in both folders.
- output a `.env` file with appropriate variables
- _(or use `sanity init --env` if you have the CLI installed)_

4. Prefix your environment variables in the SvelteKit `/app` folder with `PUBLIC_`, they should be `PUBLIC_SANITY_DATASET` and `PUBLIC_SANITY_PROJECT_ID`.
5. `npm run dev` to start the development server

Your SvelteKit app should now be running on [http://localhost:5173/](http://localhost:5173/) and Studio on [http://localhost:3333/](http://localhost:3333/).

## Contact

Please reach out here:
[Megumi's GitHub](https://github.com/MegumiKim)
