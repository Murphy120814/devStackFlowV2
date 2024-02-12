# Getting started

1. First lecture I have set up the Next js project using npx create-next-app@latest;
2. set up the EsLint and Prettier for consistent code formatting and standard practices;
3. File structure of the Project
   1. Below the app we have Component Folder and that component folder will contain all the components which are smaller reusable and shared piece of UI
   2. Then we will have Constant folder --> they will store some values that we are going to reuse in our application.
   3. Then we will have the folder called context ---> for theme
   4. We will have lib folder and withing lib folder we will have "actions" folder which is bridge between frontend and backed
   5. We will also have database folder too
   6. We will have another folder called as Types where we have our typescript files
   7. we will also have .env.local file
4. Now routing has started
   1. making group routes for proper file structure there will be two group routes:
      (auth)
         sign-up
         sign-in
         layout --> this layout will made for just sign-up and sign in because we do not want footer and navbar at sign in and sign up page
      (root)
