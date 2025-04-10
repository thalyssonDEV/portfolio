document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70, // Offset for fixed header
            behavior: "smooth"
          });
        }
      });
    });
  
    // Smooth scroll for "See My Projects" button
    const btnProjects = document.querySelector('.btn-projects');
    btnProjects.addEventListener('click', function(e) {
      e.preventDefault();
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        window.scrollTo({
          top: projectsSection.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  
    // Scroll reveal animation for section content
    const animatedElements = document.querySelectorAll('.section .content');
    function animateOnScroll() {
      const windowTop = window.pageYOffset + (window.innerHeight * 0.8);
      animatedElements.forEach(item => {
        if (windowTop > item.offsetTop) {
          item.classList.add('appear');
        }
      });
    }
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  
    // // Modified contact form submission using "mailto:"
    // const form = document.getElementById('contactForm');
    // form.addEventListener('submit', function(e) {
    //   e.preventDefault();
    //   // Retrieve form field values
    //   const name = document.getElementById('name').value;
    //   const email = document.getElementById('email').value;
    //   const message = document.getElementById('message').value;
      
    //   // Construct email subject and body, with URL encoding for proper formatting
    //   const subject = encodeURIComponent("Message from My Portfolio");
    //   const body = encodeURIComponent(
    //     "Name: " + name + "\n" +
    //     "Email: " + email + "\n\n" +
    //     message
    //   );
      
    //   // Replace 'youremail@example.com' with your actual email address
    //   const mailtoLink = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
      
    //   // Open the user's default email client with the prepared email
    //   window.location.href = mailtoLink;
    // });

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent("Message From Portfolio");
    const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
    const email = "contato.thalyssondel@gmail.com";

    // URL do Gmail com rascunho de e-mail preenchido
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    // Abre o Gmail em nova aba (ou na mesma)
    window.open(gmailLink, '_blank');
    });
  
    // Logic for project detail modal remains unchanged
    const modal = document.getElementById('projectModal');
    const modalDetails = document.getElementById('modalDetails');
    const closeBtn = document.querySelector('.close-btn');
    const projectItems = document.querySelectorAll('.project-item');
  
    projectItems.forEach(item => {
      item.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        let content = '';
        switch(projectId) {
          case '1':
            content = `
              <h2>Project One</h2>
              <p>Full details about Project One: technologies used, challenges, solutions, and illustrative images.</p>
              <img src="https://via.placeholder.com/600x400" alt="Detailed Project One">
            `;
            break;
          case '2':
            content = `
              <h2>Project Two</h2>
              <p>Full details about Project Two: explanation of the implementation and results achieved.</p>
              <img src="https://via.placeholder.com/600x400" alt="Detailed Project Two">
            `;
            break;
          case '3':
            content = `
              <h2>Project Three</h2>
              <p>Full details about Project Three: description of the challenge, technologies, and testimonials.</p>
              <img src="https://via.placeholder.com/600x400" alt="Detailed Project Three">
            `;
            break;
          default:
            content = '<p>Details not available.</p>';
        }
        modalDetails.innerHTML = content;
        modal.style.display = 'flex';
      });
    });
  
    // Close modal when clicking the close button or outside modal content
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });  