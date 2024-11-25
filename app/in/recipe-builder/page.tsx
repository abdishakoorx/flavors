"use client"

import React from 'react'
import { useHeader } from '@/app/context/header-context';

function RecipeBuilder() {
  const { setHeaderName } = useHeader();

  React.useEffect(() => {
    setHeaderName('Recipe Builder');
  }, [setHeaderName]);
  return (
    <div>Recipe Builder</div>
  )
}

export default RecipeBuilder