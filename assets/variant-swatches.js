class VariantSwatches extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("element added to DOM", this)
    this.querySelectorAll(".swatch-image").forEach(swatch => {
      swatch.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        const main_image = e.target.closest(".card-wrapper").querySelector(".card__media .media img")
        let newImage = e.target.src;
        newImage = newImage.replace("width=100", "width=600")
        main_image.setAttribute("src", newImage)
        main_image.removeAttribute("srcset")
        console.log(main_image)
        console.log(newImage)
      })
    })
  }
}

customElements.define("variant-swatches", VariantSwatches);
