const managerLinks = {

  "Matt Gilmore": "matt",

  "Andy Rohrbaugh": "andy",

  "Daryl Creager": "daryl",

  "Mike Ames": "ames",

  "Mike Caufield": "caufield",

  "Rob Robertson": "rob",

  "Tim Stough": "tim",

  "Jon Rohrbaugh": "jon",

  "Jeff Fishel": "jeff",

  "Tyler Gilmore": "tyler",

  "Dave Cox": "dave",

  "Dan Gilmore": "dan"

};

document.querySelectorAll(".manager-card").forEach((card) => {

  const managerName =

    card.querySelector("h4")?.textContent.trim();

  const managerId = managerLinks[managerName];

  if (!managerId) return;

  card.classList.add("clickable-manager-card");

  card.addEventListener("click", () => {

    window.location.href =

      `manager.html?id=${managerId}`;

  });

  card.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

      event.preventDefault();

      window.location.href =

        `manager.html?id=${managerId}`;

    }

  });

  card.setAttribute("role", "link");

  card.setAttribute("tabindex", "0");

});
