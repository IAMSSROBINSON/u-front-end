function Image(picSrc, imgSrc, altText, captionText) {
  const imageContainer = document.createElement("figure");
  imageContainer.classList.add("image-container");

  const caption = document.createElement("caption");
  caption.classList.add("image-caption");
  caption.textContent = `(${captionText})`;

  const picture = document.createElement("picture");
  picture.classList.add("blogTemplate-image");

  const source = document.createElement("source");
  source.srcSet = picSrc;
  source.type = "image/webp";

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = altText;

  picture.appendChild(source);
  picture.appendChild(img);
  imageContainer.appendChild(picture);
  imageContainer.appendChild(caption);

  return imageContainer;
}
export default Image;
