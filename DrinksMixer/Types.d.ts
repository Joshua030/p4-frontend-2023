export interface State {
  user: string;
  logged: boolean;
}

export interface Action {
  type: string;
  payload: string
}