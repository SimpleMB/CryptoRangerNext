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
  role?: UserRoleTypes;
  pin?: string;
  uid?: number;
}

/**
 * Interface for `Input` field returned from DB
 */
export interface Input {
  id?: number;
  fieldId: string;
  fieldName: string;
  label: string;
  value: string;
  type: InputTypes;
  rows?: number;
  required?: boolean;
  checked?: boolean;
  formId?: number;
}

/**
 * Interface for `Project` object returned from DB
 */
export interface Project {
  id: number;
  formFields: Input[];
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  paid: boolean;
  requested: boolean;
  ownerId: number;
}

/**
 * Interface for `Review` object used by UI in section Pricing
 */
export interface Review {
  id: number;
  type: ReviewTypes;
  priceCents: number;
  saleCents: number;
  language: LanguageTypes;
  flagUri: string;
}

/**
 * Interface for `Point` object used by UI in section How It Works
 */
export interface HowItWorksPointData {
  id: number;
  title: string;
  description: string;
}

// *****************************   Functions   ************************************

/**
 * Type for functions fetching user from DB
 */
export type FetchUser = (email: string, pin: string) => Promise<User>;

// *****************************   Enums   ************************************

/**
 * Possile types of `Input` object used by UI
 *
 * @example InputType.small // 'small'
 *
 */
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

/**
 * Possile types of `Input` object used by UI
 *
 * @example InputType.small // 'small'
 *
 */
export enum InputType {
  big = 'big',
  small = 'small',
  date = 'date',
  links = 'links',
}

/**
 * Possile languages of `Review` object used by UI
 *
 * @example Languages.english // 'english'
 *
 */
export enum Languages {
  polish = 'polish',
  english = 'english',
  german = 'german',
  russian = 'russian',
}

/**
 * Possile types of `Review` object used by UI
 *
 * @example ReviewType.free // 'free'
 */
export enum ReviewType {
  free = 'free',
  paid = 'paid',
}

// *****************************   Unions   ************************************

/**
 * Union type of `Input` object used by UI
 */
export type UserRoleTypes = keyof typeof UserRole;

/**
 * Union type of `Input` object used by UI
 */
export type InputTypes = keyof typeof InputType;

/**
 * Union type of `Review` object used by UI
 */
export type LanguageTypes = keyof typeof Languages;

/**
 * Union type of `Review` object used by UI
 */
export type ReviewTypes = keyof typeof ReviewType;
