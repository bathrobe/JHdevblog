import Link from "next/link";
import AtSign from "../components/AtSign";
import Github from "../components/Github";
import React from "react";

export default function Contact() {
  return (
    <div className="flex items-center justify-evenly p-4">
      <div className="space-x-2 flex items-center">
        <a
          href="https://github.com/bathrobe"
          className="hover:text-green-300 flex transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <span className="pl-4 text-lg">@bathrobe</span>
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <a
          className="hover:text-green-300 flex transition-colors duration-200"
          href="mailto:hello@joeholmes.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AtSign />
          <span className="text-lg">hello@joeholmes.dev</span>
        </a>
      </div>
    </div>
  );
}
