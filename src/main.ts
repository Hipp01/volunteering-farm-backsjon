import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue3 from 'bootstrap-vue-3';
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import FlagIcon from 'vue-flag-icon';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

import frText from './locales/fr.json';
import enText from './locales/en.json';
import nlText from './locales/nl.json';
import svText from './locales/sv.json';
import deText from './locales/de.json';

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  messages: {
    fr: frText,
    en: enText,
    nl: nlText,
    sv: svText,
    de: deText
  }
});

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);
app.use(BootstrapIconsPlugin);
app.use(FlagIcon);
app.use(i18n);
app.use(VCalendar, {})

app.mount('#app');
