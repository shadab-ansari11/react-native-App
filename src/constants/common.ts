/**
 * @format
 */

import {Platform} from 'react-native';

export const NAME_REGEX = /^[a-zA-Z' -]*$/;
export const NAME_REGEX_2 = /^[a-zA-Z]{2}[a-zA-Z' -]*$/;
export const PHONE_REGEX =
  /^((\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4})|([0-9]{10})$/;
export const PASS_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,128})/;
export const ZIPCODE_REGEX = /^\d{5}(-\d{4})?$/;
export const URL_REGEX =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const USER_NAME_REGEX = /^[a-zA-Z0-9_\\-]+$/;
export const ONLY_ALPHABETS_SPACES = /[^a-zA-Z\s]/gi;

export const KEYBOARD_EXTRA_HEIGHT = 350;
export const isAndroid = Platform.OS === 'android';

export const NAME_COMMON_ERROR =
  'Name must be between 1-35 characters, contain 1 letter, and may contain no special characters except hyphen (-) or apostrophe.';

export const PASSWORD_COMMON_ERROR =
  '8-128 characters, it must contain 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.';
export const USERNAME_COMMON_ERROR =
  'Username must be between 4-75 characters, contain 1 letter, and may contain no special characters except hyphen (-) or apostrophe.';
