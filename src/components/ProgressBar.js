import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile,setimg  }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      console.log(url);
      setFile(null);
      setimg(url);
    }
    // eslint-disable-next-line
  }, [url, setFile]);

  return (
    <div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    >

    </div>
  );
} 

export default ProgressBar;