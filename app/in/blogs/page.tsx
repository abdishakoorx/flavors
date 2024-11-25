"use client"

import React from 'react'
import { useHeader } from '@/app/context/header-context';

function Blogs() {
  const { setHeaderName } = useHeader();

  React.useEffect(() => {
    setHeaderName('Blogs');
  }, [setHeaderName]);
  return (
    <div>Blogs</div>
  )
}

export default Blogs