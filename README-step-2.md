# Salt Gallery - Step 2 - Creating the CI/CD Pipeline

## A. Scenario

In a professional development environment a CI/CD pipeline can be used to automate the delivery process. The pipeline builds code, runs tests (CI), and safely deploys a new version of the application (CD).

Today is going to be less coding and more configuring. Getting used to integrating different services and navigating the kind of services that we're going to look at today is very important in a modern software development role.

## B. CI/CD specifications

Our CI/CD will be set up the following way (there are many CI/CD tools and setups. This is just one way of structuring a CI/CD pipeline).

- Github Actions for testing our code on push and pull requests (this is our continuous integration part).
- Github Actions for deploying the app to GitHub pages (this is our continous delivery)

### Github Actions for Continuous Integration

You should already have set up you with two branches - `main` and `development`. Now, we want you to set up _at least_ the following workflows:

- Whenever you push to the `development` branch, Github actions should start a _workflow_ which runs all _tests_ and _linting_.
- Whenever you make a pull-request from `development` to the `main` branch, Github actions should start a workflow which runs all _npm audit_ and any _e2e tests_ (if you have any).

Feel free to add additional workflows if you can - for example, maybe you can send some kind of email/slack/github notification to your team members on a pull request to master.

Here are some resources on Github Actions to help you get started:

- [This one setting up by using workflow templates](https://docs.github.com/en/free-pro-team@latest/actions/guides/setting-up-continuous-integration-using-workflow-templates) - we suggest using the 'set up a workflow yourself' option and try to figure out what your workflow file actually needs.
- [This one on the components of Github Actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#understanding-the-workflow-file)

### GitHub Actions for Continuous Delivery

---

Now it's time to delivering your code to the open internet. We'll add to our CI/CD structure by using the [Deploy to Github Pages](https://github.com/marketplace/actions/deploy-to-github-pages) action. This is an opensource action available on the GitHub marketplace and can be used in our work flow. See its documentation to understand how to integrate it.

- Starts whenever code is pushed/merged to the `main` branch.
- Runs your production `build` command.
- Deploys to GitHub Pages.
- Makes you website available on the internet.

---dsdsadas

Good luck and have fun!
