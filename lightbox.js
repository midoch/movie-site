// const mask = document.querySelector("#lightbox_mask");
// const lightbox = document.querySelector("#lightbox");
// const img = document.querySelector("#lightbox img");
// const caption = document.querySelector("#caption");
// const photos = document.querySelectorAll("img");

// for (let i = 0; i < photos.length; i++) {
//   photos[i].addEventListener("click", showHideLightbox);
// }

// function showHideLightbox() {
//   let src = this.getAttribute("src");
//   let alt = this.getAttribute("alt");

//   if (mask.style.display !== "block") {
//     mask.style.display = "block";
//     lightbox.style.display = "block";
//     img.setAttribute("src", src);
//     caption.innerHTML = alt;
//     console.log(src, alt);
//   } else {
//     mask.style.display = "none";
//     lightbox.style.display = "none";
//   }
// }
if (innerWidth > 390) {
  let index;
  const thumbnails = Array.from(document.querySelectorAll(".gallery img"));
  const mask = document.querySelector("#mask");
  const bigImg = document.querySelector("#bigImg");
  const caption = document.querySelector("#caption");
  const xmark = document.querySelector("#close");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", showLightbox);
  }

  // åben lightbox ved tryk på et billede
  function showLightbox() {
    index = thumbnails.indexOf(this);
    let thisSrc = this.getAttribute("src");
    let thisAlt = this.getAttribute("alt");
    let bigSrc = thisSrc.replace("small-img", "lightbox-img");
    bigImg.setAttribute("src", bigSrc);
    bigImg.setAttribute("alt", thisAlt);
    caption.textContent = thisAlt;
    mask.style.display = "grid";
  }

  // luk lightbox ved tryk på krydset
  xmark.addEventListener("click", hideLightbox);

  function hideLightbox() {
    mask.style.display = "none";
  }

  // skift foto ud fra tryk på pile
  prev.addEventListener("click", changePhoto);
  next.addEventListener("click", changePhoto);

  function changePhoto() {
    if (this.getAttribute("id") === "next") {
      if (index < thumbnails.length - 1) {
        index++;
      } else {
        index = 0;
      }
    } else {
      if (index > 0) {
        index--;
      } else {
        index = thumbnails.length - 1;
      }
    }

    let smallSrc = thumbnails[index].getAttribute("src");
    let smallAlt = thumbnails[index].getAttribute("alt");
    let bigSrc = smallSrc.replace("small-img", "lightbox-img");
    bigImg.setAttribute("src", bigSrc);
    bigImg.setAttribute("alt", smallAlt);
    caption.textContent = smallAlt;
  }
}
