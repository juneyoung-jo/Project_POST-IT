export interface PropsTypes {
  authenticated: boolean;
  onLogout: any;
}

export interface MenuTypes {
  to: string;
  item: string;
  children?: string;
  onClick?: any;
}
