# angular-ssr-test
This repo contains code for a basic Angular app built with server-side rendering (SSR).

I wanted to see how to:
- create a Static Website in Angular 
- deploy it to Render as a Static Site 

## Creating a static website with angular
Kudos to ***Antoine Bernard*** for the [guide](https://www.antoinebernard.com/create-a-static-website-with-angular/)! 🙏🔥

## Deploying to Render
1. Make sure your ```dist``` directory is ***not*** *git ignored*
2. Create a new **Static Site** on Render and connect it to your repository
3. Use the following values during creation:

   **Build Command** ```npm run-script build:ssr```

   **Publish directory** ```dist/your-app-name/browser```
