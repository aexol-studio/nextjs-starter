# Next.js Export Starter

This project is designed to help you quickly set up a Next.js application.
It is designed to be flexible when it comes to deployment. While it works seamlessly with Vercel's serverless functions, you can also deploy it to other hosting providers or your own server.
This starter will streamline your development process.


## Table of contents
* [Getting started](#getting-started)
* [Page naming convention](#page-naming-convention)
* [Internationalization with i18next](#internationalization-with-i18next)
* [Useful links](#useful-links)


## Getting started

1. Clone the repository.
2. Install dependencies: 

```sh
npm i
```

3. Run your develop environment:

```sh
npm run dev
```

```sh
localhost:3000/
```

## Page naming convention

In this starter, we follow a naming convention for pages that aligns with DDD (Domain-driven design) principles. Each page file is named using the format `page-name.page.tsx`, where `page-name` represents the name of the page or route. For example, the main page of your application could be named `index.page.tsx`.
Using this naming convention helps maintain a clean and organized folder structure that reflects the structure of your application's domains or features. By separating pages into their respective folders and adopting a consistent naming convention, you can easily locate and manage your application's routes.


## Internationalization with i18next

In this project, we have integrated i18next to make it easy for you to create multi-language websites. Here's how we use i18next:

1. **Translation Files**: We maintain separate JSON translation files for each supported language. These files contain translation keys and their corresponding localized text.
   For example, you might find the English translation file for home page at `public/locales/en/homePage.json`

2. **Locale Configuration**: We configure i18next to load the appropriate translation files based on the user's selected locale.

3. **Integration with React**: We use the `react-i18next` package to integrate i18next with React components, making it seamless to access translations in your React components.

## Useful Links

- [i18next Documentation](https://www.i18next.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)