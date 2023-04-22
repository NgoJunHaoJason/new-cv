import { createI18nContext } from '@solid-primitives/i18n'
import enHeader from 'src/assets/translations/en/header.json'
import zhHeader from 'src/assets/translations/zh/header.json'

export const enLocale = 'en'
export const zhLocale = 'zh'

const languagesDictionary = {
  [enLocale]: {
    header: enHeader
  },
  [zhLocale]: {
    header: zhHeader
  }
}

const i18nContext = createI18nContext(languagesDictionary, enLocale)

export default i18nContext
