import React from "react";
import { Download } from "lucide-react";
import Button from "./Button";

export default function Resume() {
  const resumeUrl = "/Resume/SandeepBeheraResume.pdf";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="w-full max-w-4xl shadow-xl rounded-2xl  p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-white font-serif">My Resume</h1>

        <div className="w-full h-[75vh] mb-4">
          <iframe
            src={resumeUrl}
            title="Resume Viewer"
            className="w-full h-full rounded-xl border shadow-lg shadow-black"
          />
        </div>

        <div className="flex justify-center">
          <Button>
            <a
              href={resumeUrl}
              download="SandeepBeheraResume.pdf"
              className="flex items-center gap-2 rounded-2xl font-semibold transition-transform hover:scale-105"
            >
              <Download size={18} /> Download Resume

            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
