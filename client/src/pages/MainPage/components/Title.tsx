interface IProps {
  title: string;
  subtitle?: string;
}

export const Title: React.FC<IProps> = ({ title, subtitle }) => (
  <div className="flex flex-col gap-3 select-none">
    <h1 className="text-5xl font-bold text-center gradient-text">{title}</h1>
    <p className="text-center text-textColor-secondary">{subtitle}</p>
  </div>
);
