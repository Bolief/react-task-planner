type HeaderProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header>
      <h1>React Task Planner</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;