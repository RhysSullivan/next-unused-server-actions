"use client"
import { getSignedInUser } from "./actions";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <button onClick={() => {
    getSignedInUser();
  }}>Click me</button>;
}
