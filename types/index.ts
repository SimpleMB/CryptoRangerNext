import { SessionBase } from 'next-auth/_utils';

// *****************************   Interfaces   ************************************

/**
 * Session object extended with `id` property with user id
 */
export interface SessionWithId extends SessionBase {
  id: number;
}

/**
 * Inerface for `JWT` object
 */
export interface Token {
  email: string;
  uid: number;
  iat: number;
  exp: number;
}

/**
 * Interface for `User` object returned by authentication
 */
export interface User {
  id: number;
  email: string;
  pin?: string;
  uid?: number;
}

export interface Input {
  id?: number;
  fieldId: string;
  fieldName: string;
  label: string;
  value: string;
  type: InputTypes;
  rows?: number;
  required?: boolean;
  formId?: number;
}

export interface Project {
  id: number;
  formFields: Input[];
  ownerId: number;
}

export interface Review {
  id: number;
  type: ReviewTypes;
  priceCents: number;
  saleCents: number;
  language: LanguageTypes;
  flagUri: string;
}

// *****************************   Functions   ************************************

/**
 * Type for functions fetching user from DB
 */
export type FetchUser = (email: string, pin: string) => Promise<User>;

// *****************************   Enums   ************************************

export enum InputType {
  big = 'big',
  small = 'small',
  date = 'date',
  links = 'links',
}

export enum Languages {
  polish = 'polish',
  english = 'english',
  german = 'german',
  russian = 'russian',
}

export enum ReviewType {
  free = 'free',
  paid = 'paid',
}

// *****************************   Unions   ************************************

export type InputTypes = keyof typeof InputType;

export type LanguageTypes = keyof typeof Languages;

export type ReviewTypes = keyof typeof ReviewType;
