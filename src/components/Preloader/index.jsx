import React, { useState, useEffect } from 'react';

function Pre() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return <div id={load ? 'preloader' : 'preloader-none'} />;
}

export default Pre;
