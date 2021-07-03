const getDatafromJSON = (url, questions) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => questions.push(...data));
};
export default getDatafromJSON;
