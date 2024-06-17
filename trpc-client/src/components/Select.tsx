export interface IOption<T> {
  value: T;
  label: string;
}

interface IProps<T> {
  value: T;
  options: IOption<T>[];
  onChange: (value: T) => void;
}

type ISelectComponent = <T extends string>(props: IProps<T>) => JSX.Element;

export const Select: ISelectComponent = (props) => {
  const { value, options, onChange } = props;

  return (
    <div className="flex gap-1 text-slate-500 select-none text-sm">
      <label htmlFor="select">Expiry period:</label>
      <div className="grid">
        <svg
          className="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <select
          id="select"
          value={value}
          onChange={(e) => onChange(e.target.value as typeof value)}
          className="w-20 appearance-none forced-colors:appearance-auto border row-start-1 col-start-1 rounded-lg bg-slate-800 hover:border-primary hover:bg-transparent border-slate-600 text-slate-200 px-2 outline-none"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
