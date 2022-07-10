

export default function makeHome() {
    const element = document.createElement('div');
    element.classList.add("rendered");
    element.innerHTML = `
    <div class="homebox">
    <div class="homelogo">
      <h1>KK's.</h1>
    </div>
    <div class="hometitle">
      <h3>King of the Kravings.</h3>
    </div>
    <h2>Let the people Speak for us.</h2>
    <div class="rating">
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star_half</span>
    </div>
    <span>4.5 Stars out of 4,387 reviews</span>
    <div class="quote-box">
      <p>"A must when you're in town. I make sure to always take my family here.
        A place that will keep you talking about that meal all night."</p>
      <div class="signature"><span>-Marilyn Monroe</span></div>
    </div>
    <div class="quote-box">
      <p>"I can only say so much - take that first bite and then you'll understand
        the craze. A weekly stop for us"</p>
      <div class="signature"><span>-Kim Kardashian</span></div>
    </div>
    <div class="quote-box">
      <p>"No place has ever impressed me before. That day changed when I stepped foot
        into this restaurant. Keep this a secret, but I use this place for inspiration. "</p>
      <div class="signature"><span>-Gordan Ramsay</span></div>
    </div>
    <div class="quote-box">
      <p>"A must when you're in town. I make sure to always take my family here.
        A place that will keep you talking about that meal all night."</p>
      <div class="signature"><span>-John Pardy</span></div>
    </div>
    </div>
  `;
    return element;
}

