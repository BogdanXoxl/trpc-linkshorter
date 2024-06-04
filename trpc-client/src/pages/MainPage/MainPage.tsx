import { useEffect } from "react";

import { type LinkCreateInput, trpc } from "@utils/trpc";
import { showModal } from "@utils/showModal";
import { Background } from "@components/Background";

import { Title, MainForm, Wrapper, CopyLinkModal } from "./components";

export const MainPage: React.FC = () => {
  const { mutate: addLink, data } = trpc.links.add.useMutation();

  const handleSubmit = (data: LinkCreateInput) => {
    addLink(data);
  };

  useEffect(() => {
    if (data) {
      showModal({
        title: "Your Link!",
        html: <CopyLinkModal link={data.link} />,
      });
    }
  }, [data]);

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
