export const locale = (lang) => {
  if (lang) {
    localStorage.setItem('lang', lang);
  } else if (lang === null) {
    localStorage.removeItem('lang');
  } else {
    lang = localStorage.getItem('lang');
  }
  return lang;
}