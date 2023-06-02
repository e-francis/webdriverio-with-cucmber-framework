# WDIO Cucumber Framework Project

This is a WDIO Cucumber framework project developed in TypeScript using IntelliJ IDEA Ultimate edition. The purpose of this project is to test the landing screen, signup screen, and login screen of an application. Please note that the project is not functional as it was created based on screenshots of the app to be tested.

## Project Structure

The project has the following directory structure:

- `framework/components/UI`: Contains the assumed components of each screen to be tested.
- `stepdefinitions`: Contains the step definitions for each of the screen's feature files.
- `tests/framework-tests`: Contains the Cucumber feature files for each of the screens.

## Prerequisites

To set up and run the project, you will need the following:

- [IntelliJ IDEA Ultimate edition](https://www.jetbrains.com/idea/download/)
- [Node.js](https://nodejs.org/en/) (v14 or higher)

## Setting up IntelliJ IDEA

To enhance your development experience with IntelliJ IDEA, it is recommended to install the following plugins:

- Cucumber.js Plugin: Enables syntax highlighting and provides other useful features for working with Cucumber feature files for JavaScript and TypeScript

## Run Configuration

To execute the Cucumber tests on the feature files, you need to create a run configuration in IntelliJ IDEA. Follow the steps below:

1. Open IntelliJ IDEA and navigate to the Run/Debug Configurations dropdown menu.
2. Click on "Edit Configurations" to open the Run/Debug Configurations dialog.
3. Click the "+" button to add a new configuration and select "npm" as the configuration type.
4. Set the following configuration parameters:
   - **Name**: Choose a descriptive name for your configuration (e.g., "Cucumber Tests").
   - **Scripts**: Select "cucumber" from the drop-down list.
   - **Node interpreter**: Select the Node.js interpreter installed on your system.
   - **Working directory**: Set the project root directory as the working directory.
5. Click "OK" to save the configuration.

## tsconfig.json

The `tsconfig.json` file is a TypeScript configuration file that specifies the compiler options for your project. Here's a breakdown of the options used in the provided `tsconfig.json` file:

- `moduleResolution`: Specifies the module resolution strategy for TypeScript (in this case, "node" is used).
- `module`: Specifies the module system for TypeScript (set to "ESNext" for modern JavaScript modules).
- `types`: Specifies the TypeScript type definitions required for the project, including Node.js, WebDriverIO globals, expect-webdriverio, and @wdio/cucumber-framework.
- `target`: Specifies the ECMAScript version to compile to (set to "ES2022").
- `experimentalDecorators`: Enables support for experimental decorators in TypeScript.
- `emitDecoratorMetadata`: Enables emitting decorator metadata in TypeScript.

## Running the Tests

To run the tests, you can use the `npx wdio` command. Here's how you can execute it:

1. Open a terminal or command prompt.
2. Navigate to the project root directory.
3. Run the following command:
   ```
   npx wdio wdio.conf.ts
   ```
   This command executes the WDIO configuration file (`wdio.conf.ts`), which specifies the test runner settings, browsers, and other configurations.

Please note that you need to install the necessary dependencies using `npm install` before running the tests for the first time.

That's it! You should now be able to develop and run your WDIO Cucumber framework project in IntelliJ IDEA using the provided configuration and commands. Happy testing!
