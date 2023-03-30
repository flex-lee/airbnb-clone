import Lfrequest from "..";

export function getHomeGoodPriceData() {
  return Lfrequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScore() {
  return Lfrequest.get({
    url: "/home/highscore",
  });
}

export function getHomePopular() {
  return Lfrequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotCommendDest() {
  return Lfrequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongFor() {
  return Lfrequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlus() {
  return Lfrequest.get({
    url: "/home/plus",
  });
}
