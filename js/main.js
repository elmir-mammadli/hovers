import {languages} from "./i18n";
import {defaultLocale} from "./i18n";
import {createI18n, useI18n} from "./i18n/vue-i18n"

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocalecale: 'en',
    messages
})

createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
}).use(i18n).mount('#app')