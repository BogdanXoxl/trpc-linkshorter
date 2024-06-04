import Swal, { SweetAlertOptions } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

type Props = SweetAlertOptions & {
  error?: boolean;
};

export const showModal = ({
  html,
  title,
  icon = "success",
  timer = 10_000,
  error,
  ...props
}: Props) => {
  MySwal.fire({
    html,
    title,
    icon,
    timer,
    timerProgressBar: true,
    showConfirmButton: false,
    width: "300px",
    iconColor: !error ? "#6633ee" : "#ee5b33",
    background: "rgba(0, 0, 0, 0.5)",
    customClass: {
      title: "text-white",
      timerProgressBar: !error ? "bg-primary" : "bg-danger",
    },
    ...props,
  });
};
