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
      console.log('imagen' + i);
    });    
  }
  console.log($imgPortfolio);
})
  (document);