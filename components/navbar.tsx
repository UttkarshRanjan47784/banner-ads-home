import { ModeToggle } from "./theme/mode-toggle";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-5 py-3 dark:border-b dark:border-muted-foreground shadow-xl">
      <p className="text-xl">Grow Easy</p>
      <ModeToggle />
    </div>
  );
}
