# Code Challenge

Your task is to create a 3-page application

### 📄 Sign-in & Sign-up page:

sign in page:

![signin](https://raw.githubusercontent.com/forexco/code-challenge-2/main/design/signin.png)

sign up page:

![signup](https://raw.githubusercontent.com/forexco/code-challenge-2/main/design/signup.png)

- a new user can sign up

- redirect to the currency convert page if the sign-in is successful

- only display the currency converter page to the logged-in user

- keep the component as close to design as possible (blue1:`#2F49D1`, blue2: `#5887FF`, grey:`#EFF0F6`)

### 📄 Currency converter page:

- display this component:

![converter](https://raw.githubusercontent.com/forexco/code-challenge-2/main/design/converter.png)

- automatically fetch rate when both sides of currency provided

- displaying a loading sign when the component is fetching data from API

- displaying the fetched rate in "Market Rate" on fetching rate success (error sign when fetching failed)

- if the amount changes on either side, automatically re-calculate another amount

- click the icon in the middle to switch 2 currencies and re-fetch the rate

- click the "Refresh" button to re-fetch the rate

## 🎯 Requirements:

- use TypeScript

- use React/Vue.js

- use any relational database

- use any Node.js framework to create API

- use the JWT token to authenticate the sign-in and API request

- find a symbol API or create one that returns fake rates (you can design how to query from that API)

- keep the component as close to design as possible (blue1:`#33428E`, blue2: `#012754`, button:`#002854`, background: `#F8F9FB`) (please find icons in assets folder)

### ⭐Bouns:

- clean structure

- use Material UI with Styled-components or Emotion

- use Nest.js to create your API

- write a couple of tests

## Handover

- create a Github repository to track your work

- commit your work frequently

- work on a separate branch and when you are ready, open a Pull Request to the main branch

- write a `README.md` with instructions on how to set up and start your solution

- when you finish the code challenge, send us the link to the repository

#### Email [j.dong@forexco.com.au](mailto:j.dong@forexco.com.au) for questions related to this code challenge
