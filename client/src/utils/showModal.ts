import { type ReactElement } from "react";

import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface IProps {
  html: ReactElement;
  title: string;
  timer?: number;
  icon?: SweetAlertIcon;
}

export const showModal = ({
  html,
  title,
  icon = "success",
  timer = 10_000,
}: IProps) => {
  MySwal.fire({
    html,
    title,
    icon,
    timer,
    timerProgressBar: true,
    showConfirmButton: false,
    width: "300px",
    iconColor: "rgba(102,51,238,1)",
    background: "rgba(0, 0, 0, 0.5)",
    customClass: {
      title: "text-white",
      timerProgressBar: "bg-primary",
    },
  });
};
