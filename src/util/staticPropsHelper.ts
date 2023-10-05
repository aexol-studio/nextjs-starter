export type StaticProps<
  T extends (...args: any[]) => { props: any } | Promise<{ props: any }>,
  X = ReturnType<T>,
> = StaticPropsType<X extends Promise<infer R> ? R : X>;

export type StaticPropsType<T> = T extends { props: any } ? T['props'] : never;
