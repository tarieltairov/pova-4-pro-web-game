import batman from "../assets/images2/targets/batman.png";
import ironman from "../assets/images2/targets/ironman.png";
import subziro from "../assets/images2/targets/MC.png";
import spiderman from "../assets/images2/targets/spiderman.png";
import superman from "../assets/images2/targets/superman.png";
import wolverine from "../assets/images2/targets/wolverine.png";

export const targetImages = [
  {
    name: "batman",
    url: batman,
    image: null
  },
  {
    name: "ironman",
    url: ironman,
    image: null
  },
  {
    name: "subziro",
    url: subziro,
    image: null
  },
  {
    name: "spiderman",
    url: spiderman,
    image: null
  },
  {
    name: "superman",
    url: superman,
    image: null
  },
  {
    name: "wolverine",
    url: wolverine,
    image: null
  },
];

export const randomGlass = () => {
  return Math.floor(Math.random() * (11 - 6) + 6);
};


export const createTargets = (back) => {
  for (let i = 0; i < back?.length; i++) {
    let { url } = targetImages.find((e) => e.name === back[i].target);
    Object.assign(back[i], { url });
  }
  return back;
};

