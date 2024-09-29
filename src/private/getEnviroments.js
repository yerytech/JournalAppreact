export const getEnviroments = () => {
  // @ts-ignore
  import.meta.env;

  return {
    // @ts-ignore
    ...import.meta.env,
  };
};
