'use client';
import React, { useState } from 'react';
import Loader from '../components/Loader';
import LandingHero from '../components/LandingHero';
import BestSellers from '../components/BestSellers';
import FAQ from '../components/FAQ';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <main className={loading ? 'overflow-hidden h-screen' : ''}>
        {!loading && (
          <>
            <LandingHero />
            <BestSellers />
            <FAQ />
          </>
        )}
      </main>
    </>
  );
}
