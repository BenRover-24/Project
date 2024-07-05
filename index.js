// Members data displaying
document.addEventListener('DOMContentLoaded', function() {
  fetch('members.json')
    .then(response => response.json())
    .then(data => {
      const teamContainer = document.getElementById('team-container');

      data.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;

        const name = document.createElement('h3');
        name.textContent = member.name;

        const title = document.createElement('h4');
        title.textContent = member.title;

        const description = document.createElement('p');
        description.textContent = member.description;

        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links';

        if (member.social.linkedin) {
          const linkedin = document.createElement('a');
          linkedin.href = member.social.linkedin;
          linkedin.target = '_blank';

          const linkedinImg = document.createElement('img');
          linkedinImg.src = 'ressources/images/LinkedIn_logo_initials.png';
          linkedinImg.alt = 'LinkedIn';

          linkedin.appendChild(linkedinImg);
          socialLinks.appendChild(linkedin);
        }

        if (member.social.instagram) {
          const instagram = document.createElement('a');
          instagram.href = member.social.instagram;
          instagram.target = '_blank';

          const instagramImg = document.createElement('img');
          instagramImg.src = 'ressources/images/Instagram_icon.png.webp';
          instagramImg.alt = 'Instagram';
          
          instagram.appendChild(instagramImg);
          socialLinks.appendChild(instagram);
        }

        if (member.social.github) {
          const github = document.createElement('a');
          github.href = member.social.github;
          github.target = '_blank';

          const githubImg = document.createElement('img');
          githubImg.src = 'ressources/images/Github.png';
          githubImg.alt = 'GitHub';
          
          github.appendChild(githubImg);
          socialLinks.appendChild(github);
        }

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(socialLinks);

        teamContainer.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching team data:', error));
});


// Form submission for sponsor page

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("YOUR_USER_ID"); // Remplacez "YOUR_USER_ID" par votre ID utilisateur EmailJS

  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
      firstName: contactForm.firstName.value,
      lastName: contactForm.lastName.value,
      subject: contactForm.subject.value,
      email: contactForm.email.value,
      message: contactForm.message.value
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
      .then(function(response) {
        document.getElementById('status').textContent = "Message envoyé avec succès!";
        contactForm.reset();
      }, function(error) {
        document.getElementById('status').textContent = "Erreur lors de l'envoi du message.";
        console.error("Error:", error);
      });
  });
});
