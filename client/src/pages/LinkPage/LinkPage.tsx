import { useEffect, useState } from "react";
import { Background } from "@components/Background";
import { Loader } from "@components/Loader";
import { trpc } from "@utils/trpc";
import { showModal } from "@utils/showModal";
import { ErrorTitle } from "./components";

interface IProps {
  pathname: string;
}

export const LinkPage: React.FC<IProps> = (props) => {
  const { pathname } = props;
  const { data, error } = trpc.links.get.useQuery(pathname, {
    retry: false,
  });
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
      const timeout = setTimeout(() => window.location.replace(data.link), 500);
      return () => clearTimeout(timeout);
    }
  }, [data, counter]);

  useEffect(() => {
    if (error) {
      showModal({
        title: "Error",
        html: (
          <ErrorTitle message={error.message} description="redirecting..." />
        ),
        icon: "error",
        timer: 3_000,
        error: true,
        didClose: () => window.location.replace("/"),
      });
    }
  }, [error]);

  return (
    <Background>
      <Loader text={counter} />
    </Background>
  );
};
