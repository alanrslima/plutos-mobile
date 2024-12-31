import {Session} from '../types/session';
import {User} from '../types/user';
import {AuthService} from './contracts/auth-service';

export class AuthMemoryService implements AuthService {
  private users: User[];

  constructor(mock?: User[]) {
    this.users = mock || [];
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<Session> {
    console.log('this.users', this.users);
    const user = this.users.find(
      item => item.email === email && item.password === password,
    );
    if (!user) {
      throw new Error('Email or password is invalid');
    }
    return {id: String(new Date().getTime()), user};
  }

  async signUp(name: string, email: string, password: string): Promise<void> {
    this.users = [
      ...this.users,
      {id: String(new Date().getTime()), email, name, password},
    ];
  }
}
