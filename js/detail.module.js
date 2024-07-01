// import { ViewData } from "./game.module.js";
// import { Details } from "./details.module.js";
// import { Ui } from "./ui.module.js";
class ShowDetails {
  // ui = new ViewData();
  constructor() {
   
   
  }


  displayDetailes(data) {
    let save = document.querySelector("#details2");
    let dataBox = "";

    dataBox += ` <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2">
  <div onclick="startEvent()" id="card" data-id="${data.id}" class="card my-5">
    <img src="${data.thumbnail}" class="card-img-top img-fluid" alt="..." >

    <div class="card-body">
      <div class="row">

        <div class="text-footer col-9">
          <h5 class="card-title">${data.title}</h5>
        </div>
        <div class="text-footer col-3 d-flex justify-content-end">
        <button><a href="${
          data.freetogame_profile_url
        }" class=""> free</a></button>  
        </div>

      </div>

      <p class="card-text text-center my-3 p-0">
    ${data.short_description.split(" ").slice(0, 8)}
      </p>
    </div>

    <div class="card-footer">
      <div class="row">

        <div class="text-footer col-6">
          <p class="rounded-3"> ${data.genre}</p>
        </div>
        <div class="text-footer col-6 d-flex justify-content-end">
          <p class="rounded-3"> ${data.platform}</p>
        </div>

      </div>
    </div>

  </div>
</div>`;

    save.innerHTML = dataBox;
  }

  async getDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "cfbc000b36mshfee5a6d677b1b5bp1946dfjsn3351b74c9cd2",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // show.displayCard(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

// let show = new ShowDetails();

export default ShowDetails;

