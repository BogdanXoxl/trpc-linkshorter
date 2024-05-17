declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      TIMEOUT: string;
      DATABASE_URL: string;
      [key: string]: string | undefined;
    }
  }
}

export {};
