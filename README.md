


#Configuration

1. Install Node.js (v6.9.1) using Node Version Manager (nvm) 

	a. Open new Terminal window Run nvm installer.

	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
	c.List what versions of Node are currently installed (probably none).
	

	b.Install latest Node.js release. We are using v6.9.1 here.

	nvm install v6.9.1 

2. Check the Node.js and  npm version
	- node -v
	- npm -v

3. Install Angular-Cli using the following command
	- npm install -g angular-cli

4. Go project directory where package.json is located. Install other package using the following command
         - npm install

5. Go project directory, Open new Terminal window and run the application using the command:
	- ng serve



# MyContactApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

# Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

