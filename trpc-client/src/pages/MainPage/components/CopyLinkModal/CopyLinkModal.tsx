import React, { useEffect, useState } from "react";
import { trunk } from "@utils/trunk";

import { Icon } from "./Icon";

interface IProps {
  link: string;
  expirationDate?: Date;
}

export const CopyLinkModal: React.FC<IProps> = (props) => {
  const { link } = props;
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const trunkedLink = trunk(link, 25);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          className="col-span-6 border text-sm rounded-lg border-primary-light block w-full p-2.5 pr-9 bg-slate-600 text-textColor-primary"
          value={trunkedLink}
          disabled
          readOnly
        />
        <button
          onClick={handleCopyClick}
          className="absolute end-2 top-1/2 -translate-y-1/2 text-textColor-primary hover:bg-slate-500 rounded-lg p-2 inline-flex items-center justify-center"
        >
          <Icon isCopied={isCopied} />
        </button>
      </div>
    </div>
  );
};
