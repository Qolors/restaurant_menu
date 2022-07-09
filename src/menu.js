
export default function makeMenu() {
    const element = document.createElement('div');
    element.classList.add("rendered");
    element.innerHTML = `
        <h1>Kravings</h1>
        <div class="food">
          <img src="burger.jpg" />
          <div>
            <h2>Kobe Burger</h2>
            <p>A delicious burger so good wow what a beautiful burger it is so delicious just look at how delicious it is.</p>
          </div>
        </div>
        <div class="food">
          <img src="nacho.jpg" />
          <div>
            <h2>Krispy Nachos</h2>
            <p>A delicious burger so good wow what a beautiful burger it is so delicious just look at how delicious it is.</p>
          </div>
        </div>
        <div class="food">
          <img src="steak.jpg" />
          <div>
            <h2>Kingsman Steak</h2>
            <p>A delicious burger so good wow what a beautiful burger it is so delicious just look at how delicious it is.</p>
          </div>
        </div>
        <div class="food">
          <img src="fish.jpg" />
          <div>
            <h2>Kajun Chicken</h2>
            <p>A delicious burger so good wow what a beautiful burger it is so delicious just look at how delicious it is.</p>
          </div>
        </div>
        <div class="food">
          <img src="chicken.jpg" />
          <div>
            <h2>Kickin' Chicken</h2>
            <p>A delicious burger so good wow what a beautiful burger it is so delicious just look at how delicious it is.</p>
          </div>
        </div>
        `
    
    return element;
}