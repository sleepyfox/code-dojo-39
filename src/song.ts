import {
  getStrophe1,
  getStrophe2,
  getStrophe3,
  getStrophe4,
  getStrophe5,
  getStrophe6,
  getStrophe7,
} from "./songService";

export const getSong = () =>
  [
    getStrophe1(),
    getStrophe2(),
    getStrophe3(),
    getStrophe4(),
    getStrophe5(),
    getStrophe6(),
    getStrophe7(),
  ].join("\n");
