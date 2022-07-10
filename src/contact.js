
export default function makeContact() {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="card">
          <h1>Contact Us</h1>
          <div class="contacts">
            <span class="material-symbols-outlined">call</span>
            <span>+1 (123) 456-7890</span>
          </div>
          <div class="contacts">
            <span class="material-symbols-outlined">mail</span>
            <span>krazykat@kats.us</span>
          </div>
          <div class="contacts">
            <span class="material-symbols-outlined">tag</span>
            <span>#krazykats on socials.</span>
          </div>
        </div>
        `;
    return element;
}