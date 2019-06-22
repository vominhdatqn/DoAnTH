/* eslint-disable */

export const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
export const passwordRegex = new RegExp(/^(?=.*[A-Za-z\d]).{8,}$/);
export const nameRegex = new RegExp(/^((?![\^!@#$*~ <>? ]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>? ]).)$/);
export const summaryRegex = new RegExp(/^\S.{0,250}/);
export const zipRegex = new RegExp(/^\S[0-9]{0,11}/);
export const phoneFaxRegex = new RegExp(/^\S[0-9]{0,18}/);
export const yearRegex = new RegExp(/^\S[0-9]{0,2}((?! )[0-9])$/);
export const addresRegex = new RegExp(/^\S.{0,199}/);
export const urlRegex = new RegExp(/^((?![\^!@#$*~ <>? ]).)((?![\^!@#$*~<>? ]).){2,256}((?![\^!@#$*~ <>? ]).)$/);
export const verifyCodeRegex = new RegExp(/^[0-9]+$/);