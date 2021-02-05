export const state = () => ({
  //без этого дополнения к url фото не грузится
  urlFromPhoto: "https://frontend-test.idaproject.com",
});

export const getters = {
  getUrlFromPhoto: s => s.urlFromPhoto,
}