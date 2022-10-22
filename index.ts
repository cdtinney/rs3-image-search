const Tesseract = require("tesseract.js");

const imageDirectory = __dirname + "/images";
const imagesFileNames = ["legacy1.png", "transparent1.jpg", "transparent2.png"];

const broadcasts = ["has received a seismic wand drop!"];
const keyword = "nilas";

imagesFileNames.forEach(async (fileName) => {
  try {
    const result = await Tesseract.recognize(
      imageDirectory + "/" + fileName,
      "eng",
      {
        logger: (_m) => {
          // ignore
        },
      }
    );

    const { lines } = result.data;
    lines
      .map((line) => line.text.toLowerCase())
      .forEach((text) => {
        console.error(text);
        if (text.includes(keyword)) {
          const username = text.split(":")[0];
          console.error(username);
        }
      });
  } catch (err) {
    console.error(err);
  }
});
