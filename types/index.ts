import { SessionBase } from 'next-auth/_utils';
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

/**
 * Type for functions fetching user from DB
 */
export type FetchUser = (email: string, pin: string) => Promise<User>;
