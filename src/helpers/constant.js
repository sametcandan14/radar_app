export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.8",
    bl_lng: "27.6",
    tr_lat: "41.6",
    tr_lng: "44.8",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "38c2faf6d5msh8acbbbbaa3c3185p141434jsnc392c7df38f1",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOpt = {
  headers: {
    "X-RapidAPI-Key": "38c2faf6d5msh8acbbbbaa3c3185p141434jsnc392c7df38f1",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
