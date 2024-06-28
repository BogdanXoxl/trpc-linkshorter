import { useEffect } from "react";

import { type LinkCreateInput, trpc } from "@utils/trpc";
import { TShowModalProps, showModal } from "@utils/showModal";
import { Background } from "@components/Background";
import { ErrorTitle } from "@components/ErrorTitle";

import { Title, MainForm, Wrapper, CopyLinkModal } from "./components";

export const MainPage: React.FC = () => {
  const {
    mutate: addLink,
    data,
    isError,
    isLoading,
  } = trpc.links.add.useMutation();

  const handleSubmit = (data: LinkCreateInput) => {
    addLink(data);
  };

  useEffect(() => {
    let modalOptions: TShowModalProps | undefined = undefined;

    if (data) {
      const shortLink = `${location.origin}/${data.shortLink}`;

      modalOptions = {
        title: "Your Link!",
        html: <CopyLinkModal link={shortLink} />,
      };
    } else if (isError) {
      modalOptions = {
        title: "Error",
        html: <ErrorTitle message="Something went wrong..." />,
        icon: "error",
        timer: 3_000,
        error: true,
      };
    } else if (isLoading) {
      modalOptions = {
        title: "Please wait a moment...",
        icon: "info",
        timer: 0,
      };
    }

    if (modalOptions) showModal(modalOptions);
  }, [data, isError, isLoading]);

  return (
    <Background>
      <Wrapper>
        <Title
          title='Welcome to the "Short URL".'
          subtitle="Paste the link you want to be shorten"
        />
        <MainForm onSubmit={handleSubmit} />
      </Wrapper>
    </Background>
  );
};
