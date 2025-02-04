function Image (picSrc, imgSrc, altText) {
    const imageContainer = document.createElement("figure");
    imageContainer.classList.add("image-container");

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

    return imageContainer
}
export default Image;