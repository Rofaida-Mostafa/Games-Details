import { displayHomeMethod, handler } from "./game.module.js";
import { ViewData } from "./game.module.js";


let showData = new ViewData();
let navbar = document.querySelector("nav").querySelectorAll("a");
let cache = {};
let homeSec = document.querySelector("#home");
const loader = document.getElementById("loader-section");


export class getting {
  constructor() {
    handler(homeSec, loader);

    this.getdata("mmorpg").then((games) => {
      handler(loader, homeSec)

      cache["mmorpg"] = games;
      console.log(cache["mmorpg"]);
      displayHomeMethod(games);
    });
    this.getGamesByNavLinks();

  }

  getGamesByNavLinks() {
    for (let i = 0; i < navbar.length; i++) {
      navbar[i].addEventListener("click", (e) => {
        const category = e.target.dataset.name; // mmorpg
        handler(homeSec, loader);
        if (cache[category]) {
          handler( loader,homeSec);
          displayHomeMethod(cache[category]);
        } else {
       

          this.getdata(category).then((games) => {
            handler( loader,homeSec);
            cache[category] = games;
            console.log(cache[category]);
            displayHomeMethod(games);
          });
        }
      });
    }
  }

  async getdata(category) {
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    const response = await api.json();
    displayHomeMethod(response);
    return response;
  }
}

