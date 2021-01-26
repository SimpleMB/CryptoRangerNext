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
  id?: number | string;
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
 * Interface for `Input` field returned from DB
 */
export interface FormValues {
  projectName: string;
  projectLang: string;
  aboutOwner: string;
  advantageCompetitor: string;
  benefits: string;
  closestCompetitor: string;
  coreConcept: string;
  diffCompetitor: string;
  futurePromotions: string;
  importandToKnow: string;
  manyPeople: string;
  products: string;
  projectIdea: string;
  simpleAbout: string;
  useExample: string;
  whenPublished: string;
}

/**
 * Interface for `Project` object returned from DB
 */
export interface Project {
  id: number;
  formFields: Input[];
  createdAt: Date | string;
  updatedAt: Date | string;
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
  language = 'language',
  payment = 'payment',
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

/**
 * API routes strings. Use with fetch
 *
 * @example ApiRoutes.projects // 'http://localhost:3000/api/projects'
 */
export enum ApiRoutes {
  projects = 'http://localhost:3000/api/projects',
  auth = 'http://localhost:3000/api/auth',
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
