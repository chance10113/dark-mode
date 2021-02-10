import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage("modeStatus", false);

  return [isDark, setIsDark];
};
export default useDarkMode;
