declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      TIMEOUT: string;
      DATABASE_URL: string;
      CLIENT_HOST: string;
      [key: string]: string | undefined;
    }
  }
}

export {};
