import RNLanguages from 'react-native-languages'
import i18n from 'i18n-js'

import en from './en.json'
import es from './es.json'

i18n.locale = RNLanguages.language
i18n.fallbacks = true
i18n.translations = { en, es }

export default i18n
