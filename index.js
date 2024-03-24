// Members data displaying
const members = await fetch("members.json").then((response) => response.json());

//const MemberCaroussel1 = document.querySelector("#CardGroup1");
//const MemberCaroussel2 = document.querySelector("#CardGroup2");
//const MemberCaroussel3 = document.querySelector("#CardGroup3");
//const MemberCaroussel4 = document.querySelector("#CardGroup4");

function displayMembers(members) {
  for (let i = 0; i < members.length; i++) {
    const Member = members[i];
    const cardImage = document.querySelectorAll(".card .card-img-top");
    cardImage.src = Member.image;
    const cardTitle = document.querySelectorAll(".card .card-title");
    cardTitle.innerText = Member.name;
    const cardSubTitle = document.querySelectorAll(".card h6");
    cardSubTitle.innerText = Member.title;
    const cardText = document.querySelectorAll(".card .card-text");
    cardText.innerText = Member.description;
    const socialMedia1 = document.querySelectorAll(".card #linkedin");
    socialMedia1.src = Member.social.linkedin;
    const socialMedia2 = document.querySelectorAll(".card #instagram");
    socialMedia2.src = Member.social.instagram;
    const socialMedia3 = document.querySelectorAll(".card #github");
    socialMedia3.src = Member.social.github;

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
    <img src="${cardImage}" class="card-img-top" alt="${cardTitle}" />
    <div class="card-body">
      <h5 class="card-title">${cardTitle}</h5>
      <h6> ${cardSubTitle} </h6>
      <p class="card-text">${cardText}</p>
      <div class="card-footer">
      <div class="Connect">
      <a href="${socialMedia1}" target="_blank" id="linkedin"><img
      src="ressources/images/LinkedIn_logo_initials.png" alt="Linkedin"/></a>
      <a href="${socialMedia2}" target="_blank" id="instagram"/><img
      src="ressources/images/Instagram_icon.png.webp" alt="Instagram"/></a>
      <a href="${socialMedia3}" target="_blank" id="github"><img src="ressources/images/Github.png"
      alt="Github"/></a>
      </div>
      </div>
    </div>  `;
    console.log(cardElement);
    const cardItem = null
    if (typeof cardItem === "object" && cardItem !== null && "appendChild" in cardItem) {
      const cardItem = document.querySelectorAll(".card-group");
      cardItem.appendChild(cardElement);
    }


    /*const cardItem = document.querySelectorAll(".card-group");

    if (typeof cardItem === "object" && cardItem !== null && "appendChild" in cardItem) {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
      <img src="${cardImage}" class="card-img-top" alt="${cardTitle}" />
      <div class="card-body">
        <h5 class="card-title">${cardTitle}</h5>
        <h6> ${cardSubTitle} </h6>
        <p class="card-text">${cardText}</p>
        <a href="${socialMedia1}" target="_blank" id="linkedin"><img
        src="ressources/images/LinkedIn_logo_initials.png" alt="Linkedin"/></a>
        <a href="${socialMedia2}" target="_blank" id="instagram"/><img
        src="ressources/images/Instagram_icon.png.webp" alt="Instagram"/></a>
        <a href="${socialMedia3}" target="_blank" id="github"><img src="ressources/images/Github.png"
        alt="Github"/></a>
      </div>  `;
      cardItem.appendChild(cardElement);
    }*/

    /*const cardElement = document.createElement("div");
    cardElement.classList.add("card");*/
    /*cardElement.innerHTML = `
    <img src="${cardImage}" class="card-img-top" alt="${cardTitle}" />
    <div class="card-body">
      <h5 class="card-title">${cardTitle}</h5>
      <h6> ${cardSubTitle} </h6>
      <p class="card-text">${cardText}</p>
      <a href="${socialMedia1}" target="_blank" id="linkedin"><img
      src="ressources/images/LinkedIn_logo_initials.png" alt="Linkedin"/></a>
      <a href="${socialMedia2}" target="_blank" id="instagram"/><img
      src="ressources/images/Instagram_icon.png.webp" alt="Instagram"/></a>
      <a href="${socialMedia3}" target="_blank" id="github"><img src="ressources/images/Github.png"
      alt="Github"/></a>
    </div>  `;*/

    //cardItem.appendChild("cardElement");

    // Ajouter le contenu de la card
  }
}

displayMembers(members);

//const memberImage = Member.image;
//const CardImage = document.querySelector(".card");
//CardImage.appendChild(memberImage);
/*

    cardItem.appendChild(cardImage);
    cardItem.appendChild(cardTitle);
    cardItem.appendChild(cardSubTitle);
    cardItem.appendChild(cardText);
    cardItem.appendChild(socialMedia1);
    cardItem.appendChild(socialMedia2);
    cardItem.appendChild(socialMedia3);


for (let i = 0; i < members.length; i++) {
  const Member = members[i];

  const cardItem = document.querySelector(".card-grp");
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  cardImage.src = Member.image;
  const cardTitle = document.createElement("h5");
  cardTitle.innerText = Member.name;
  const cardSubTitle = document.createElement("h6");
  cardSubTitle.innerText = Member.title;
  const cardText = document.createElement("p"); 
  cardText.innerText = Member.description;
  const socialMedia1 = document.createElement("a");
  socialMedia1.innerText = Member.social.linkedin;
  const socialMedia2 = document.createElement("a");
  socialMedia2.innerText = Member.social.instagram;
  const socialMedia3 = document.createElement("a");
  socialMedia3.innerText = Member.social.github;

  cardItem.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardSubTitle);
  card.appendChild(cardText);
  card.appendChild(socialMedia1);
  card.appendChild(socialMedia2);
  card.appendChild(socialMedia3);
}

// Form submission for sponsor page

const forms = document.querySelector("#DonateForm");
forms.event.preventDefault();

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();*/
