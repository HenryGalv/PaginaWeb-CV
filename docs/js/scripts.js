/*Menu*/
((d) => {
  const $btnMenu = d.getElementById("btnMenu"),
    $menu = d.getElementById("menu");
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
})
  (document);