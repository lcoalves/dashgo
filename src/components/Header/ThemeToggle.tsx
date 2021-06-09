
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
    ml='4'
      aria-label="theme toggle"
      icon={colorMode === "light" ? <RiMoonFill color='#1f2029' /> : <RiSunLine color='#fc0' />}
      onClick={toggleColorMode}
    />
  );
};