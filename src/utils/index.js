import batman from "../assets/images4/targets/target1.png";
import ironman from "../assets/images4/targets/target2.png";
import subziro from "../assets/images4/targets/target3.png";
import spiderman from "../assets/images4/targets/target4.png";
import superman from "../assets/images4/targets/target5.png";
import wolverine from "../assets/images4/targets/target1.png";

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

