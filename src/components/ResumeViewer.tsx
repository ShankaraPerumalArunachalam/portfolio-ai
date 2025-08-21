import React from 'react';
import { Download } from 'lucide-react';
import resumePDF from "../assets/Shankar's_Resume.pdf"; // Make sure this path is correct

const DownloadResumeButton = () => {
  return (
    // The <a> tag is a link that points directly to your PDF file.
    // The 'download' attribute tells the browser to download the file instead of opening it.
   <a
  href={resumePDF}
  rel="noopener noreferrer"
  target="_blank"
  className="
    group
    relative
    inline-flex items-center justify-center
    overflow-hidden
    px-8 py-4
    border border-black
    text-black
    font-normal
    shadow-md
    transition-all duration-300
    transform hover:scale-105
  "
>
  {/* This is the background element that slides in */}
  <span
    className="
      absolute left-[-1px] top-0 h-full w-full
      bg-black
      transform -translate-x-full
      transition-transform duration-300 ease-in-out
      group-hover:translate-x-0
    "
    aria-hidden="true"
  ></span>

  {/* This is your content, which needs to be relative to stay on top */}
  <span className="relative flex items-center transition-colors duration-300 group-hover:text-white">
    <Download className="mr-2 h-5 w-5 inline group-hover:animate-bounce" />
    View My Resume
  </span>
</a>
  );
};

export default DownloadResumeButton;