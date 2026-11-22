# StreamList

StreamList is a React prototype for EZTechMovie. The Week 1 homepage accepts a movie or series title and writes it to the browser console. Movies and Cart are reserved for Week 4. About is reserved for Week 5. Each has a working link and a page heading.

## Run locally

Use Node.js 22.12 or newer on the 22.x line, or Node.js 24 LTS. Open the project folder in Visual Studio Code. In its terminal, run the following commands from the folder containing `package.json`.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production build, run `npm run build`. Run `npm run preview` to serve that build locally.

## Try the Week 1 flow

1. Open the browser’s developer tools and choose **Console**. In Chrome on Windows, `Ctrl+Shift+J` opens it directly.
2. On StreamList, enter `Jurassic Park` and press **Enter**. The console displays `StreamList submission: Jurassic Park` once. The field clears and the page confirms where the title went.
3. Enter `The Last of Us` and click **Submit title**. Leading and trailing spaces are trimmed. A blank or spaces-only entry shows an inline prompt and produces no additional console entry.
4. Visit Movies, Cart, and About. Test Back, Forward, and refresh on a section such as `#/cart`. Narrow the window to see the form stack while the four menu choices remain visible.

## Source map

| File | Role |
| --- | --- |
| `src/main.jsx` | Mounts React with `HashRouter`. |
| `src/App.jsx` | Defines the shared layout, outlet, and routes. |
| `src/components/Navigation.jsx` | Builds the menu with `NavLink` and Lucide icons. |
| `src/components/TitleForm.jsx` | Controls and validates the field, then calls the `onTitleSubmit` prop. |
| `src/pages/StreamList.jsx` | Draws the homepage and logs each valid title. |
| `src/pages/ReservedPages.jsx` | Exports the Movies, Cart, and About page components. |
| `src/styles.css` | Defines the responsive layout and active, focus, error, and confirmation styles. |

The current prototype logs each submission. It does not store watchlists or customer data. The lockfile records the dependencies. The generated `node_modules` and `dist` directories are excluded from source control.

## Visual credits

The cinema photograph is [Red cinema chair by Felix Mooneeram](https://unsplash.com/photos/red-cinema-chair-evlkOfkQ5rE), used under the [Unsplash License](https://unsplash.com/license). Icons are from [Lucide](https://lucide.dev/license). DM Sans and Playfair Display are self-hosted through Fontsource and distributed under their included SIL Open Font Licenses.
