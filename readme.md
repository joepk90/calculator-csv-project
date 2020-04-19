# How to use

**Build the Project:**
 1. Clone the repository to your server/PHP environment.
 2. Navigate to the *calculator-front-end* directory
 3. Install node_modules: *npm install*
 4. Build the project using *npm run build*
 5. Go to the following URL: *www.your-domain.com/dist/index.html*

**How to run the project locally**
*This assumes your are running the project using localhost and posting to your server*

 1. Clone the repository to your server/PHP environment.
 2. Navigate to the *calculator* directory
 3. Add an _.env_ file with the following variable declared: *ENV="develop"*
 4. Navigate to the *calculator-front-end* directory
 5. Add an _.env_ file with the following variable declared: *CALCULATOR_URL=http://www.your-domain.com/calculator/index.php*
 6. Install node_modules: *npm install*
 7. Run the project using *npm start*