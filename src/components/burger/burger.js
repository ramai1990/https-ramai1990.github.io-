class Burger {
  constructor() {
    this.toggle = this.toggle.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.render();
  }

  render() {
    this.button = document.querySelector(".burger");
    this.close = document.querySelector(".burger span");
    this.navList = document.querySelector(".nav__list");
    this.headerButtons = document.querySelector(".header__buttons");
    this.addEventListeners();
  }

  toggle(e) {
    e.stopPropagation();
    this.close.classList.toggle("active");
    this.navList.classList.toggle("active");
    this.headerButtons.classList.toggle("active");
  }

  removeClass() {
    this.close.classList.remove("active");
    this.navList.classList.remove("active");
    this.headerButtons.classList.remove("active");
  }

  addEventListeners() {
    this.navList.addEventListener("click", (e) => e.stopPropagation());
    if (this.button) {
      this.button.addEventListener("click", this.toggle);
      document.addEventListener("click", this.removeClass);
    }
  }
}

const burger = new Burger();
