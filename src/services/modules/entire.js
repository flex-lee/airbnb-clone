import Lfrequest from "..";

export function getEntireAllList(offset = 0, size = 20) {
  return Lfrequest.get({
    url: `/entire/list`,
    params: {
      offset,
      size,
    },
  });
}
