import { LocaleMessage } from 'vue-i18n';

export interface AppMenuItem {
  name: LocaleMessage,
  key?: string | LocaleMessage
}
