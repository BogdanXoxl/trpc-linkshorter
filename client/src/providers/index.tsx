import { TrpcProvider } from "./TrpcProvider";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <TrpcProvider>{children}</TrpcProvider>;
};
