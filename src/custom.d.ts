declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '*.webp' {
  const content: any;
  export default content;
}

declare module '@env' {
  export const REACT_APP_ENV: 'development' | 'staging' | 'production';
  export const REACT_APP_ONE_SIGNAL_ID: string;
}
