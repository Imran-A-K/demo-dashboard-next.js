function Button({ children, icon, onClickFunction, tab, activeTab }) {
  return (
    <button
      onClick={onClickFunction ? onClickFunction : () => {}}
      className={`px-4 py-2 font-semibold rounded-lg text-white hover:bg-blue-500 transition-colors duration-200 ${
        tab && activeTab && activeTab === tab ? "bg-blue-500 " : "bg-slate-700"
      }`}
    >
      {children} {icon && icon}
    </button>
  );
}

export default Button;
