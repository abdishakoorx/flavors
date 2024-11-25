"use client"

import React from 'react'
import { useHeader } from '@/app/context/header-context';

function MealPlanner() {
  const { setHeaderName } = useHeader();

  React.useEffect(() => {
    setHeaderName('Meal Planner');
  }, [setHeaderName]);
  return (
    <div>Meal Planner</div>
  )
}

export default MealPlanner