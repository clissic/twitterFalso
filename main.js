const url = "https://my-json-server.typicode.com/clissic/ahoraSi/posts";
async function fetchData(web) {
  try {
    const response = await fetch(web);
    if (!response.ok) {
      throw new Error("La solicitud no se pudo completar correctamente.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

const tweetCont = document.getElementById("feed");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const result = await fetchData(url);
    for (let i = 0; i < result.length; i++) {
      tweetCont.innerHTML += `
        <div class="tweets" id="tweetContainer">
            <div class="profile-pic"><img src="https://xsgames.co/randomusers/assets/avatars/pixel/${i}.jpg" /></div>
          <div class="content">
            <div class="names">
              <p class="full-name">${result[i].name}</p>
              <p class="user-name">@${result[i].name.replace(" ", "_")}</p>
              <p class="time"> ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div class="tweet-content">
            <p>${result[i].text}</p>
          </div>
          <div class="tweet-icons">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div>
        </div>
            `;
    }
  } catch (error) {
    console.error("Ocurrió un error al cargar los datos:", error);
  }
});
