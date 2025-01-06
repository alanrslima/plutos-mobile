import React, {createContext, useState} from 'react';
import {Session} from '../types/session';
import {useServiceDependencies} from '../hooks/use-service-dependencies';

type AuthContextType = {
  signInWithEmailAndPassword(email: string, password: string): Promise<void>;
  session?: Session;
  logout: () => Promise<void>;
  signUp(name: string, email: string, password: string): Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [session, setSession] = useState<Session | undefined>({
    id: '1',
    user: {id: '1', name: 'John Doe'},
  });
  const {authService} = useServiceDependencies();

  async function signInWithEmailAndPassword(email: string, password: string) {
    const response = await authService.signInWithEmailAndPassword(
      email,
      password,
    );
    setSession(response);
  }

  async function signUp(name: string, email: string, password: string) {
    await authService.signUp(name, email, password);
  }

  async function logout() {
    setSession(undefined);
  }

  return (
    <AuthContext.Provider
      value={{signInWithEmailAndPassword, session, logout, signUp}}>
      {children}
    </AuthContext.Provider>
  );
};
