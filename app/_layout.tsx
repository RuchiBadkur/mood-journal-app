//app/_layout.tsx ➝ defines how navigation works

//This helps create stack-based navigation (like pages stacked on top of each other).
import { Stack } from "expo-router";

import "../global.css"

//it as the main layout wrapper for all your screens.
export default function RootLayout() {
  // “use a stack navigator for all screens inside app/ folder”. So every screen (like index.tsx, home.tsx, etc.) gets stacked automatically, like a navigation controller.
  return <Stack />;
}
