export namespace RouterHelper {
  'use strict';

  let pageId = ':pageId';
  let token = ':token';
  let itemId = ':itemId';
  let itemType = ':itemType';

  // LOGIN MODULE
  export const LOGIN = 'login';
  export const PASSWORD = 'password';
  export const PASSWORD_RESET = LOGIN + '/' + PASSWORD + '/reset';
  export const PASSWORD_CHANGE = LOGIN + '/' + PASSWORD + '/change/' + token;

  // ADMIN MODULE
  export const ADMIN = 'admin';
  export const SITES = 'sites';

  // APP MODULE
  export const APP = 'app';
  export const EDITOR = 'editor';
  export const EDITOR_LIVE = 'editor-live';
  export const PUBLISH = 'publish';
  export const PRICING = 'pricing';
  export const SUBSCRIPTION = 'subscription';
  export const ACCOUNT = 'account';
  export const PAGES = 'pages';
  export const CHOOSE_INDUSTRY = 'choose/industry';

  export const ITEM = 'i';
  export const ITEM_TYPE = itemType;
  export const ITEM_TYPE_ITEM_ID = ITEM_TYPE + '/' + itemId;

  export const PAGE = 'p';
  export const PAGE_ID = pageId;
  export const ITEM_ITEM_ID = ITEM + '/' + itemId;

  export function getUrl(path: string, ...args: string[]): string {
    switch (path) {
      case LOGIN:
      case PASSWORD:
      case PASSWORD_RESET:
      case PASSWORD_CHANGE:
      case ADMIN:
      case APP:
        return  '/' + path;
      case SITES:
        return '/' + ADMIN + '/' + path;
      case EDITOR:
      case EDITOR_LIVE:
      case PUBLISH:
      case PRICING:
      case SUBSCRIPTION:
      case ACCOUNT:
      case CHOOSE_INDUSTRY:
      case PAGES:
      case PAGE:
      case ITEM:
        return '/' + APP + '/' + path;
      case ITEM_TYPE:
        return '/' + APP + '/' + ITEM + (args[0] ? '/' + args[0] : '');
      case ITEM_TYPE_ITEM_ID:
        return '/' + APP + '/' + ITEM + (args[0] ? '/' + args[0] + (args[1] ? '/' + args[1] : '') : '');
      case PAGE_ID:
        return '/' + APP + '/' + PAGE + (args[0] ? '/' + args[0] : '');
      case ITEM_ITEM_ID:
        return '/' + APP + '/' + PAGE + '/' + ITEM + (args[0] ? '/' + args[0] : '');
      default:
        return '/' + APP + '/' + EDITOR;
    }
  }

  export function slugifyForRoute(str: string): string {
    str = str.replace(/^\s+|\s+$/g, '').toLowerCase();

    let from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    let to   = 'aaaaeeeeiiiioooouuuunc------';

    for (let i = 0; i < from.length ; i++) { // Remove accents
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    return str
    .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
    .replace(/\s+/g, '-') // Whitespaces to -
    .replace(/-+/g, '-');
  }
}
