'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const currentYear = new Date().getFullYear();

const AdmissionCAT = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  console.log('isVisible:', isVisible); // Debug: Check if isVisible state changes

  return (
    <div className={`${styles.admissionOpen} bg-sky-400 ${isVisible ? styles.visible : ''}`}>
      Admission Open {currentYear}
    </div>
  );
};

export default AdmissionCAT;
