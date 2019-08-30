# **Welcome to “Prepper”!**

#### ABOUT PREPPER
Preppery is an app that includes all your meal prep needs! Create and save your favorite recipes, make different meal plans to vary your diet, and add saved meals to your plans at the click of a button! But wait, there's more! Ever tired of calculating all the things you need to buy? Fret no more because you can add ingredients from planned meals to your shopping list and Prepper will compile everything you need to buy for you!

#### HOW PREPPER WORKS
Once you create an account, you have access to meal prepping, recipe making and easy shopping list-ing! Create your favorite recipes in the recipes tab and add the necessary ingredients. From there, create a meal plan and add those saved recipes to which ever day of the week you want! For each planned recipe, click to reveal the ingredients, and add what you don't have at home to your shopping cart. Once you tick those things off your shopping list they are removed for you.

### Setup Steps
1. Fork and clone this repository
2. Run `npm install` to install all dependencies
3. Use `npm start` to run the live server

#### Links:
[Deployed Site](https://britneyart80.github.io/capstone-client/#/)

[Front End Github Repo](https://github.com/britneyart80/capstone-client)

[Back End Deployed Site](https://secure-oasis-68275.herokuapp.com/)

#### TECHNOLOGIES USED:
- HTML
- CSS
- JAVASCRIPT
- REACT
- AXIOS
- HEROKU
- SCSS
- EXPRESS
- MONGOOSE
- MONGO DB

#### WIREFRAMES:
![ERD](https://i.imgur.com/pUP9F91.png)

#### Catalog of Routes:
| HTTP Verb  | Path |
|---|---|
| POST  | /sign-up  |
|  POST | /sign-in |
| PATCH   | /change-password |
|  DELETE | /sign-out  |   |   |
| GET | /carts  |
|  GET | /carts/:id |
| POST   | /carts |
|  PATCH | /carts/:id  |
| GET  |  /ingredients |
| GET | /ingredients/:id  |
| POST  | /ingredients |
| DELETE  | /ingredients/:id  |
| GET  | /recipes/:id/  |
| GET | /recipes  |
| POST  | /recipes  |
| PATCH  | /recipes/:id  |
| DELETE  | /recipes/:id  |
| GET | /weeks  |
| GET  | /weeks/:id  |
| POST  | /weeks  |
| PATCH  | /weeks  |
| DELETE  | /weeks  |

#### PLANNING, PROCESS & PROBLEM SOLVING:
I planned out the project first by coming up with an idea I was excited about. From there, wireframes and user stories took place which made it much easier to implement the next step, backend. Once back-end was set up, I moved to implementing front-end functionality. The final step was styling.

Along the way, there were both front-end and back-end bugs and I utilized the terminal/browser console.logs() a lot in the process of debugging. This helped me easily trace back to the source of the problem. To reduce the amount of bug encounters, I always planned out in my head how I wanted to implement the structure of models and routes before I began coding.

For future iterations, I would love to add functionality so that you can delete a certain number of ingredients off the shopping cart instead of having to delete all of them once ticked.
