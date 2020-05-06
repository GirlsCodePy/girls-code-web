import { useTranslation } from "react-i18next"
import React from "react"


export const useTranslatedData = data => {
  const { i18n } = useTranslation()
  if (!data) return null
  return translate(data, i18n.language)
}

const translate = (data, lang) => {
  const translated = {}
  //console.log('data', data);
  console.log('Lang', lang);

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const retKey = key.includes("_") ? key.split("_")[0] : key

      /**
       * if 'key' is a property with language, we need to extract just the value of
       * the property that correspond with the current language
       * */
      if (key.includes("_") && `${retKey}_${lang}` !== key) {
        continue
      }

      if (Array.isArray(data[key])) {
        translated[retKey] = data[key].map(item => translate(item, lang))
      } else if (data[key] instanceof Object) {
        translated[retKey] = translate(data[key], lang)
      } else {
        translated[retKey] = data[key]
      }
    }
  }
  console.log('Translated is: ', translated)
  return translated
}
