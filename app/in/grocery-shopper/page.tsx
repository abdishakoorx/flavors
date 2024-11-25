"use client"

import { useHeader } from '@/app/context/header-context';
import React from 'react'

function GroceryShopper() {
  const { setHeaderName } = useHeader();

  React.useEffect(() => {
    setHeaderName('Grocery Shopper');
  }, [setHeaderName]);
  return (
    <div>Grocery Shopper</div>
  )
}

export default GroceryShopper