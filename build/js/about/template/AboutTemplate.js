export default class AboutTemplate {
    getAboutHTML = (info) => {
        return `
      <div class="about-container">
        <div class="about-card">
          <div class="about-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </div>
          <h2 class="about-title">Acerca de</h2>
          <div class="about-info">
            <h3 class="about-name">${info.name}</h3>
            <p class="about-program">${info.program}</p>
          </div>
          <div class="about-footer">
            <p>Universidad Pontificia Bolivariana</p>
            <p class="about-year">2023 - Actual</p>
          </div>
        </div>
      </div>
    `;
    };
}
