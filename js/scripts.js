/*Menu*/
((d) => {
  const $btnMenu = d.getElementById("btnMenu"),
    $menu = d.getElementById("menu"),
    $imgPortfolio = d.querySelectorAll(".img-portfolio"),
    $modal = d.querySelectorAll(".modal");
  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.classList.toggle("active");
    $menu.classList.toggle("is-active");
  });
  d.addEventListener("click", (e) => {
    if (e.target.id !== 'btnMenu' && e.target.id !== 'menu') {
      $btnMenu.classList.remove("active");
      $menu.classList.remove("is-active");
    }
  });
  for (let i = 0; i < $imgPortfolio.length; i++) {
    $imgPortfolio[i].addEventListener("click", (e) => {
      $modal[i].classList.toggle
        ('modal-active');
    });
  }
})
  (document);
((d) => {
  const $form = d.querySelector(".contact-form"),
    $response = d.querySelector("modal-form");
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/henry100w@hotmail.com", {
      method: "POST",
      body: new FormData(e.target)
    }).then(
      res => (res.ok ? res.json() : Promise.reject(res))
    ).then(json => {
      console.log(json);
      location.hash = "#gracias"
      $form.reset();
    }).catch(err => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
      $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
    }).finally(() => {
      setTimeout(() => {
        location.hash = "#cerrar";
      }, 2000);
    });
  })
})(document);