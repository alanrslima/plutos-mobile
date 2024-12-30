import {Session} from '../../types/session';

export interface AuthService {
  signInWithEmailAndPassword(email: string, password: string): Promise<Session>;
  signUp(name: string, email: string, password: string): Promise<void>;
}
