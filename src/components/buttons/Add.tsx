type AddButtonProps = {
  onClick: () => void;
};

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button className="btn btn-success text-white" onClick={onClick}>
      Add
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
}
