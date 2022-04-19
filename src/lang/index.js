import { createI18n } from 'vue-i18n'
import cn from './zh.js'
import en from './en.js'
const messages = {
  en: {
    ...en,
  },
  cn: {
    ...cn,
  }
};
const i18n = createI18n({
  locale: localStorage.lang || 'cn',
  messages,
});
export default i18n;