import ShowDetails from "./detail.module.js";
let card = document.querySelector("#gameData");

export class ViewData {
  // =>=>=>=>=>=>=>=>  Function to (display games category).  <=<=<=<=<=<=<=<=<//

  DisplayData(data) {
    let dataBox = "";

    for (let i = 0; i < data.length; i++) {
      // console.log(data[i]);
      let save = data[i];
      dataBox += ` <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2">
                <div onclick="ui.getDetails(${data[i].id})" class="card my-5">
                  <img src="${
                    data[i].thumbnail
                  }" class="card-img-top" alt="...">
      
                  <div class="card-body">
                    <div class="row">
      
                      <div class="text-footer col-9">
                        <h5 class="card-title">${data[i].title}</h5>
                      </div>
                      <div class="text-footer col-3 d-flex justify-content-end">
                      <button><a href="${
                        data[i].freetogame_profile_url
                      }" class=""> free</a></button>  
                      </div>
      
                    </div>
      
                    <p class="card-text text-center my-3">
                  ${save.short_description.split(" ").slice(0, 4)}
                    </p>
                  </div>
      
                  <div class="card-footer">
                    <div class="row">
      
                      <div class="text-footer col-6">
                        <p class="rounded-3"> ${save.genre}</p>
                      </div>
                      <div class="text-footer col-6 d-flex justify-content-end">
                        <p class="rounded-3"> ${save.platform}</p>
                      </div>
      
                    </div>
                  </div>
      
                </div>
              </div>`;

      card.innerHTML = dataBox;
    }
  }

  // =>=>=>=>=>=>=>=>  Function to (display game details).  <=<=<=<=<=<=<=<=<//

  displayDetailes(data) {
    let save = document.querySelector("#details2");
    let detailsSec = document.querySelector(".details");
    let homeSec = document.querySelector("#home");
    const loader = document.getElementById("loader-section");
    this.loaderHandler(loader, detailsSec);

    homeSec.classList.add("d-none");

    let dataBox = "";

    dataBox += ` <div class="col-md-4 ">
                <div class="detaile-title gap-5 images d-flex flex-column  ">
                    <h2> Details Game </h2>
                    <img src="${data.thumbnail}" class="img-fluid" alt="...">
                </div>
            </div>


            <div class=" col-md-8 ">
                <div class="text gap-4 d-flex flex-column  ">
                   
                    <h4>Title: ${data.title} </h4>
                    <p>
                        Category:
                        <span>
                        ${data.genre}
                        </span>
                    </p>
                    <p>
                        Platform:
                        <span>
                         ${data.platform}
                        </span>
                    </p>
                    <p>
                        Status:
                        <span>
                        ${data.status}
                        </span>
                    </p>
                    <p class="long">${data.description}</p>

                  <a class="show btn" target="_blank" href="${data.game_url}">Show Game</a>
                </div>
            </div>`;

    save.innerHTML = dataBox;

    this.close()
  }

  // =>=>=>=>=>=>=>=>  Function for (add & remove) loader.  <=<=<=<=<=<=<=<=<//

  loaderHandler(addDisplay, removeDisplay) {
    addDisplay.classList.add("d-none");
    removeDisplay.classList.remove("d-none");
  }

  // =>=>=>=>=>=>=>=>  Function to (pass id for fetch detail function).  <=<=<=<=<=<=<=<=<//

  getDetails(id) {
    const homeSec = document.getElementById("home");
    const loader = document.getElementById("loader-section");

    this.loaderHandler(homeSec, loader);
    console.log(id);

    const show = new ShowDetails();
    show.getDetails(id).then((data) => {
      console.log(data);
      this.displayDetailes(data);
    });
  }

  close() {
    let closeBtn = document.querySelector("#close");
    closeBtn.addEventListener("click", () => {
      let detailsSec = document.querySelector(".details");
      let homeSec = document.querySelector("#home");

      this.loaderHandler(detailsSec, homeSec);
    });
  }
}

const ui = new ViewData();
// ui.close()
window.ui = ui;
export const displayHomeMethod = ui.DisplayData;
export const handler= ui.loaderHandler