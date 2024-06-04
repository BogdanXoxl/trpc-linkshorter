import { PropsWithChildren } from "react";

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col gap-9 h-full w-full items-center justify-center">
    {children}
  </div>
);
