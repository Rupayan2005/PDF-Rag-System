"use client";
import * as React from "react";
import { Upload } from "lucide-react";
const FileUpload: React.FC = () => {
  const handleFileUpload = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", ".pdf");
    el.addEventListener("change", async (ev) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);
        if (file) {
          const formData = new FormData();
          formData.append("pdf", file);
          await fetch("http://localhost:8000/upload/pdf", {
            method: "POST",
            body: formData,
          });
          console.log("File uploaded successfully");
        }
      }
    });
    el.click();
  };
  return (
    <div className="flex items-center justify-center text-white p-4 bg-slate-900 rounded-lg shadow-md">
      <div
        onClick={handleFileUpload}
        className="flex flex-col items-center justify-center w-full h-full p-4 bg-slate-800 rounded-lg shadow-md border-white border-2"
      >
        <h3>Upload Your PDF</h3>
        <Upload />
      </div>
    </div>
  );
};
export default FileUpload;
