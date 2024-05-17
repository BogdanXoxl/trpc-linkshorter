interface IProps {
  message: string;
  description?: string;
}
export const ErrorTitle: React.FC<IProps> = ({ message, description }) => (
  <div>
    <h1 className="text-xl font-bold">{message}</h1>
    <p>{description}</p>
  </div>
);
