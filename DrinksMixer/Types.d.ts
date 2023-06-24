export interface State {
  user: string | undefined;
  logged: boolean;
}

export interface Action {
  type: string;
  payload?: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  logged: boolean;
  user: string | undefined;
  login: (name: string) => void;
  logout: () => void;
}
