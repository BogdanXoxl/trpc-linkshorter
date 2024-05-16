import { useEffect, useState } from "react";
import { Background } from "@components/Background";
import { Loader } from "@components/Loader";
import { trpc } from "@utils/trpc";

export const LinkPage: React.FC = () => {
  const { data } = trpc.links.test.useQuery();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCounter((c) => {
          if (c) return c - 1;

          clearInterval(interval);
          return 0;
        }),
      1200,
    );

    return () => clearInterval(interval);
  }, [setCounter]);

  useEffect(() => {
    if (data && !counter) {
      const timeout = setTimeout(() => window.location.replace(data), 500);
      return () => clearTimeout(timeout);
    }
  }, [data, counter]);

  return (
    <Background>
      <Loader text={counter} />
    </Background>
  );
};
