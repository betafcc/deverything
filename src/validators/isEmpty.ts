import { Maybe } from "../types";
import { isArray } from "./isArray";
import { isObject } from "./isObject";
import { isString } from "./isString";

export const isEmpty = (arg?: Maybe<any>) => {
  if (isEmptyObject(arg)) return true;
  if (isEmptyArray(arg)) return true;
  if (isEmptyString(arg)) return true;

  return arg === undefined || arg === null;
};

export const isEmptyString = (arg: string) => {
  return isString(arg) && arg.trim().length === 0;
};

export const isEmptyArray = (arg: any[]) => {
  return isArray(arg) && arg.length === 0;
};

export const isEmptyObject = (arg: Object) => {
  return isObject(arg) && Object.keys(arg).length === 0;
};
