import React, { useRef, useEffect, useState, RefObject } from 'react';

export const isElementVisibleOnScreen = (elementRef: RefObject<HTMLDivElement>) => {
  const element = elementRef.current;
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
