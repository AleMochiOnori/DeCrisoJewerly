declare module '*.css';
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.JPG' {
  const content: { src: string };
  export default content;
}

declare module '*.JPEG' {
  const content: { src: string };
  export default content;
}
