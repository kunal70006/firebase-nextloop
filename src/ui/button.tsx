interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 rounded-lg text-xl drop-shadow-lg bg-slate-200 px-8 py-2 transition-colors hover:bg-red-600 hover:text-white"
    >
      {children}
    </button>
  );
};

export default Button;
