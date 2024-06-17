import { useState } from "react";

import { Select } from "@components/Select";
import { toURL } from "@utils/toURL";
import type { LinkCreateInput } from "@utils/trpc";

import { DELAY_OPTIONS, DEFAULT_DELAY_VALUE } from "./consts";
import type { Delay } from "./models";

interface IProps {
  onSubmit: (props: LinkCreateInput) => void;
}

export const MainForm: React.FC<IProps> = (props) => {
  const { onSubmit } = props;

  const [value, setValue] = useState("");
  const [delay, setDelay] = useState<Delay>(DEFAULT_DELAY_VALUE);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const href = toURL(value);

    if (!href) return;

    onSubmit({ href, delay });
    setValue("");
    setDelay(DEFAULT_DELAY_VALUE);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSelectChange = (value: Delay) => {
    setDelay(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 justify-center items-center"
    >
      <div
        className="flex w-full max-w-[30rem] rounded-lg bg-gray-100 outline-none
             has-[:focus]:bg-white has-[:focus]:ring has-[:focus]:ring-primary-light
             "
      >
        <input
          name="link"
          autoFocus
          type="search"
          value={value}
          onChange={handleInputChange}
          className="w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none"
          placeholder="Your Link"
          autoComplete="off"
        />
        <button
          type="submit"
          className="m-2 rounded px-4 py-2 font-semibold text-gray-100 select-none
                    bg-gradient-to-r from-primary from-0% via-primary-dark via-88% to-secondary to-100% 
                    hover:via-70%
                    active:bg-none active:bg-secondary
                    focus:outline-none
                "
        >
          Short
        </button>
      </div>

      <Select
        value={delay}
        options={DELAY_OPTIONS}
        onChange={handleSelectChange}
      />
    </form>
  );
};
