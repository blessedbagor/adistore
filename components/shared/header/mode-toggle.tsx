"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          aria-label="Toggle theme"
          className="focus-visible:ring-0 focus-visible-ring-offset-0"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        align="end"
        className="w-[160px] shadow-md"
      >
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme ?? "system"}
          onValueChange={(val) => setTheme(val)}
        >
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
