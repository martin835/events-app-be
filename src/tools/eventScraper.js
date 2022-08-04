import axios from "axios";
import * as cheerio from "cheerio";
import OrganizerModel from "../services/models/organizer-model.js";

// const getShows = async () => {
//   const url = "https://bdnr.sk/";
//   const organizer = await OrganizerModel.findById("62ea65b94aa5b228b3b93d2c");
//   const shows = [];
//   axios(url)
//     .then((response) => {
//       const html = response.data;
//       const $ = cheerio.load(html);

//       $(`.program-block`, html).each(function () {
//         const date = $(this).find(".datumX").text();
//         const time = $(this).find(".casX").text();
//         const title = $(this).find(".program-obsah").find("h2").text();

//         shows.push({
//           date,
//           time,
//           title,
//         });
//       });
//     })
//     .catch((err) => console.log(err))
// };

const scrapeShows = async () => {
  const shows = [];
  try {
    let response = await axios("https://bdnr.sk/");
    const organizer = await OrganizerModel.findById("62ea65b94aa5b228b3b93d2c");
    if (response.statusText === "OK") {
      let html = await response.data;
      const $ = cheerio.load(html);

      $(`.program-block`, html).each(function () {
        const date = $(this).find(".datumX").text();
        const time = $(this).find(".casX").text();
        const title = $(this).find(".program-obsah").find("h2").text();

        shows.push({
          date,
          time,
          title,
        });
      });
      console.log(organizer);
      console.log(shows);
    } else {
      console.log("ERROR - smth wrong with fetching data w/ axios");
    }
  } catch (error) {
    console.log(error);
  }
};

scrapeShows();

export default scrapeShows;
