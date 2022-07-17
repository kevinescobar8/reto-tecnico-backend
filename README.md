# reto-tecnico-backend

# Node.js configuration

package.json: npm init -y

package-lock.json: npm install typescript -D

Add a script “tsc”:”tsc” in package.json and execute: npm run tsc — —init

Simulation: npm install express -E

npm install @types/express -D

execute npm run tsc to create the js files in order to run the app

Add a script “start”:”node build/index.js” in package.json and execute: “npm start” to run the app

Continuous simulation: npm install ts-node-dev -D

Add a script “dev”:”ts-node-dev src/index.ts” in package.json and execute: “npm run dev” to run the app 

npm install ts-standard -D for code correction

Add a script "lint":"ts-standard”
