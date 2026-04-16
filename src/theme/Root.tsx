import React from 'react';
import CustomCursor from '@site/src/components/CustomCursor';

export default function Root({children}: {children: React.ReactNode}) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
