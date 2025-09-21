import React from "react";
import { Download } from "lucide-react";
import Avatar from '../assets/avataaars.svg'

export default function About() {
  const resumeUrl = "/Resume/SandeepBeheraResume.pdf";

  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={Avatar}
            alt="Profile"
            className="w-64 h-64 rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold text-blue-600">Sandeep Behera</span>, 
            a passionate <span className="font-semibold">Frontend Developer</span> who loves building 
            modern, user-friendly, and responsive web applications.  
            I enjoy solving problems, learning new technologies, and contributing to projects that make a difference.
          </p>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <a
            href={resumeUrl}
            download="My_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
