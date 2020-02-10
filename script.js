
function searchPhotos() {
  let clientId = "api";
  let query = document.getElementById("search").value;
  let url = "https://api.unsplash.com/search/photos/?client_id="+clientId+"&query="+query;

  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(data) {
      console.log(data);

      data.results.forEach(photo => {
        let result = `
          <img src="${photo.urls.regular}">
          <a href="{photo.links.download}">
        `;
        $("#result").html(result);
    });
})};
