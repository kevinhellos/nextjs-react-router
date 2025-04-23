// Catch all route

"use client"
import dynamic from "next/dynamic";

// Disable SSR for client app </App>
const App = dynamic(() => import("@/client/App"), { ssr: false });

export default function page() {
  return <App/>
}
