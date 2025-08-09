import React, { useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc, doc, setDoc, updateDoc, increment, serverTimestamp } from 'firebase/firestore';

/**
 * Passive client-side analytics + geo tracking.
 * Writes lightweight visit documents and increments global counters.
 */
const AnalyticsTracker = () => {
  useEffect(() => {
    let cancelled = false;

    const recordVisit = async () => {
      try {
        // Attempt geo/IP lookup (free services, may rate-limit)
        let geo = {};
        try {
          const res = await fetch('https://ipapi.co/json/');
          if (res.ok) {
            const data = await res.json();
            geo = {
              ip: data.ip,
              country: data.country_name,
              countryCode: data.country_code,
              city: data.city,
              region: data.region,
              latitude: data.latitude,
              longitude: data.longitude,
              org: data.org
            };
          }
        } catch (_) { /* silent */ }

        if (cancelled) return;

        const visitsCol = collection(db, 'visits');
        await addDoc(visitsCol, {
          timestamp: serverTimestamp(),
          path: window.location.pathname,
          userAgent: navigator.userAgent,
          language: navigator.language,
            ...geo
        });

        // Increment aggregate counters doc
        const countersRef = doc(db, 'metrics', 'counters');
        await setDoc(countersRef, { initialized: true }, { merge: true });
        await updateDoc(countersRef, {
          pageViews: increment(1),
          visitors: increment(1)
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('Analytics tracking failed', err);
      }
    };

    recordVisit();

    return () => { cancelled = true; };
  }, []);

  return null;
};

export default AnalyticsTracker;
