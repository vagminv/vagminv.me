import { Download } from 'lucide-react';
import { resume } from '../data/content';

function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume.path;
    link.download = resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="button"
      aria-label="Download resume"
    >
      <Download size={18} />
      <span>{resume.downloadText}</span>
    </button>
  );
}

export default ResumeDownload;
