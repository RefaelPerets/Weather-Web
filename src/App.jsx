import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Today from './components/Today';

export default function App() {
  const [isDayTime, setIsDayTime] = useState(true);

  useEffect(() => {
    const currentHour = new Date().getHours();
    const isDay = currentHour >= 6 && currentHour < 18;
    setIsDayTime(isDay);

    document.body.className = isDay ? 'daytime' : 'nighttime';
  }, []);

  return (
    <div>
      <Header />
      <Today />
      <Footer /> 
    </div>
  );
}
