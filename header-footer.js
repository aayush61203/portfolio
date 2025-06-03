document.addEventListener("DOMContentLoaded", () => {
  let headerHTML = `
  <header>
    <nav>
      <div class="logo">Aayush</div>
      <ul class="desktop-menu">
        <li><a href='index.html'>Home</a></li>
        <li><a href='about.html'>About</a></li>
        <li><a href='skills.html'>Skills</a></li>
        <li><a href='projects.html'>Projects</a></li>
        <li><a href='certifications.html'>Certifications</a></li>
        <li><a href='resume.html'>Resume</a></li>
        <li><a href='contact.html'>Contact</a></li>
      </ul>
      <div class="right-tools">
        <div class="theme-switcher">
          <div class="theme-toggle" title="Choose Theme">
            <span class="theme-icon">&#x1F3A8;</span>
          </div>
          <div class="theme-options">
            <button class="color-btn" data-color="#00ffff" data-accent="#00ffcc" style="background:#00ffff;"></button>
            <button class="color-btn" data-color="#ae00ff" data-accent="#ff00f7" style="background:#ae00ff;"></button>
            <button class="color-btn" data-color="#00ff00" data-accent="#33ff99" style="background:#00ff00;"></button>
            <button class="color-btn" data-color="#ff4c4c" data-accent="#ff9933" style="background:#ff4c4c;"></button>
            <button class="color-btn" data-color="#3399ff" data-accent="#33ccff" style="background:#3399ff;"></button>
            <button class="color-btn" data-color="#ffcc00" data-accent="#ff9900" style="background:#ffcc00;"></button>
            <button class="color-btn" data-color="#cc00ff" data-accent="#ff66ff" style="background:#cc00ff;"></button>
            <button class="color-btn" data-color="#ff6600" data-accent="#ff9966" style="background:#ff6600;"></button>
            <button class="color-btn" data-color="#66ff66" data-accent="#99ff99" style="background:#66ff66;"></button>
            <button class="color-btn" data-color="#00ccff" data-accent="#66ffff" style="background:#00ccff;"></button>
            <button class="color-btn" data-color="#ff33cc" data-accent="#ff99cc" style="background:#ff33cc;"></button>
            <button class="color-btn" data-color="#ff0033" data-accent="#ff6699" style="background:#ff0033;"></button>
            <button class="color-btn" data-color="#009933" data-accent="#66cc66" style="background:#009933;"></button>
            <button class="color-btn" data-color="#6600cc" data-accent="#9966cc" style="background:#6600cc;"></button>
            <button class="color-btn" data-color="#003366" data-accent="#6699cc" style="background:#003366;"></button>
            <button class="color-btn" data-color="#993333" data-accent="#cc6666" style="background:#993333;"></button>
            <button class="color-btn" data-color="#003300" data-accent="#339966" style="background:#003300;"></button>
            <button class="color-btn" data-color="#000099" data-accent="#3333ff" style="background:#000099;"></button>
            <button class="color-btn" data-color="#330066" data-accent="#660099" style="background:#330066;"></button>
            <button class="color-btn" data-color="#ff0066" data-accent="#ff3399" style="background:#ff0066;"></button>
            <button class="color-btn" data-color="#cccc00" data-accent="#ffff66" style="background:#cccc00;"></button>
            <button class="color-btn" data-color="#009999" data-accent="#00cccc" style="background:#009999;"></button>
            <button class="color-btn" data-color="#ff6666" data-accent="#ff9999" style="background:#ff6666;"></button>
            <button class="color-btn" data-color="#990000" data-accent="#cc3333" style="background:#990000;"></button>
          </div>
        </div>
        <div class="menu-icon" onclick="toggleSidebar()">☰</div>
        <div class="sidebar-overlay" onclick="closeSidebar()"></div>
      </div>
    </nav>
  </header>
  <div class="sidebar" id="sidebar">
  <ul>
        <li><a href='index.html'>Home</a></li>
        <li><a href='about.html'>About</a></li>
        <li><a href='skills.html'>Skills</a></li>
        <li><a href='projects.html'>Projects</a></li>
        <li><a href='certifications.html'>Certifications</a></li>
        <li><a href='resume.html'>Resume</a></li>
        <li><a href='contact.html'>Contact</a></li>
  </ul>
</div>
`;

  const footerHTML = `
    <footer>
      <div>Connect with me:</div>
      <div>
        <a href="mailto:contactaayushshah@gmail.com" target="_blank">📧 Email</a>
        <a href="tel:+919428747500" target="_blank">📞 Call</a>
        <a href="https://wa.me/+919428747500" target="_blank">
          <img src="assets/icons/whatsapp.png" alt="WhatsApp" width="20"> WhatsApp
        </a>&nbsp;
        <a href="https://www.linkedin.com/in/aayushshahprofile/" target="_blank">
          <img src="assets/icons/linkedin.png" alt="LinkedIn" width="25"> LinkedIn
        </a>
        <a href="https://github.com/aayush61203" target="_blank">
          <img src="assets/icons/github.png" alt="GitHub" width="20"> GitHub
        </a>
      </div>
      <div class="contact-info">
        <p>&copy; 2025 Aayush Shah. All Rights Reserved.</p>
      </div>
    </footer>
  `;
  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
});
