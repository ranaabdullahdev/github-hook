# Github-Hook-User

This library provides methods to interact with GitHub's API for the following functionalities:

Fetch User Repositories: Retrieves a list of all repositories for a specified GitHub user.
Fetch a Single Repository: Retrieves detailed information about a specific repository for a user.
Fetch Issues for a Repository: Retrieves a list of issues for a specified repository.
The library uses the requests library to make HTTP requests to GitHub's API, it can authenticate requests using a GitHub personal access token.
It has very easy hook functionality


# Steps to generate personel-token
- Log in with your GitHub username and password.
Navigate to Settings:

- Click on your profile picture in the top-right corner of the page.
Select Settings from the dropdown menu.
Access Developer Settings:

- In the left sidebar, scroll down and click on Developer settings.
Create a New Personal Access Token:

- Click on Personal access tokens in the left sidebar.

- Click on the Generate new token button on the right side of the page.

- Configure Token Settings:

Note: Give your token a descriptive name in the Note field.

Expiration: Choose an expiration period for your token or set it to No expiration.

- Scopes: Select the scopes or permissions you want the token to have. For general repository access, select:
repo: Full control of private repositories.
read:org: Read-only access to organization membership.
user: Read-only access to your profile information.
notifications: Read your notifications.
Note: Select additional scopes based on your specific needs.

- Generate Token:
Once you have selected the desired scopes, click the Generate token button at the bottom of the page.
Save Your Token:

Important: Copy the generated token immediately and store it securely. You will not be able to see it again once you leave the page.
Note: Treat this token like a password; do not share it or expose it in your code.

## Installation

Use the package manager  to install [github-hook-user](https://www.npmjs.com/package/github-hook-user).

```bash
npm install github-hook-user
```

## Usage

```
import { useGithubHook } from "github-hook-user";
import { useEffect } from "react";


function App() {
  const token = "";
  const username = "";

  const { fetchRepos } = useGithubHook(token);

  const fetchData = async () => {
    const data = await fetchRepos(username);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <>Github Hook User</>;
}
```
## Author
Muhammad Abdullah