"use client";

import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const getCountry = async () => {
      // ต้องมี api key
      const response = await fetch(`https://extreme-ip-lookup.com/json/`)
        .then((res) => res.json())
        .then((data) => data.country);

      if (!response) return;

      setCountry(response);
    };

    getCountry();
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
