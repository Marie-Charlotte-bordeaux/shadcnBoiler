import React, { useEffect, useState } from "react";
import { userServices } from "@/lib/services/userServices";
import { GenderPieChart } from "@/components/charts/GenderPieChart";
import { UsersMap } from "@/components/charts/chartMap";
import { UsersByCountryBarChart } from "@/components/charts/barchartloc";
import { AgeHistogramChart } from "@/components/charts/AgeHistoChart";
import { RegistrationChart } from "@/components/charts/RegistrationChart";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const UsersAdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const totalUsers = users.length;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userServices.getSomePeople(100);
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // --- Stats Calculations ---
  const genderStats = React.useMemo(() => {
    const male = users.filter((u) => u.gender === "male").length;
    const female = users.filter((u) => u.gender === "female").length;
    return [
      { gender: "male", value: male, fill: "var(--color-male)" },
      { gender: "female", value: female, fill: "var(--color-female)" },
    ];
  }, [users]);

  const ageStats = React.useMemo(() => {
    const bins = { "0-20": 0, "21-40": 0, "41-60": 0, "60+": 0 };
    users.forEach((u) => {
      const age = u.dob?.age || 0;
      if (age <= 20) bins["0-20"]++;
      else if (age <= 40) bins["21-40"]++;
      else if (age <= 60) bins["41-60"]++;
      else bins["60+"]++;
    });
    return Object.entries(bins).map(([range, value]) => ({ range, value }));
  }, [users]);

  const registrationStats = React.useMemo(() => {
    const years = {};
    users.forEach((u) => {
      if (!u.registered?.date) return;
      const date = new Date(u.registered.date);
      const key = date.getFullYear();
      years[key] = (years[key] || 0) + 1;
    });
    return Object.entries(years).map(([year, registration]) => ({ year, registration }));
  }, [users]);

  const countryStats = React.useMemo(() => {
    const map = {};
    users.forEach((u) => {
      const country = u.location?.country;
      if (!country) return;
      map[country] = (map[country] || 0) + 1;
    });
    return Object.entries(map).map(([country, value]) => ({ country, value }));
  }, [users]);

  const usersByCountry = React.useMemo(() => {
    const stats = {};
    users.forEach((u) => {
      const country = u.location?.country;
      if (!country) return;
      if (!stats[country]) stats[country] = { country, male: 0, female: 0 };
      if (u.gender === "male") stats[country].male++;
      if (u.gender === "female") stats[country].female++;
    });
    return Object.values(stats);
  }, [users]);

  const mapPoints = React.useMemo(() => {
    return users
      .map((u) => {
        const lat = Number(u.location?.coordinates?.latitude);
        const lng = Number(u.location?.coordinates?.longitude);
        if (isNaN(lat) || isNaN(lng)) return null;
        return { position: [lat, lng], name: `${u.name.first} ${u.name.last}`, country: u.location.country };
      })
      .filter(Boolean);
  }, [users]);

  if (loading)
    return <div className="flex items-center justify-center min-h-screen text-slate-400">Chargement des utilisateurs…</div>;
  if (error)
    return <div className="flex items-center justify-center min-h-screen text-red-500">Erreur : {error}</div>;

  return (
  <div className="min-h-screen w-full bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white px-6 py-20">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-6xl sm:text-7xl font-extrabold drop-shadow-lg">
            Dashboard Utilisateurs
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 drop-shadow-md mt-2">
            Suivi complet des utilisateurs
          </h2>
        </div>
        <div className="text-lg text-slate-300 mt-4 md:mt-0">
          Total utilisateurs : <span className="font-semibold text-white">{totalUsers}</span>
        </div>
      </div>

      {/* Registration + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900/50 p-4 rounded-2xl shadow-lg">
          <RegistrationChart data={registrationStats} />
        </div>
        <div className="bg-slate-900/50 p-4 rounded-2xl shadow-lg">
          <UsersMap points={mapPoints} />
        </div>
      </div>

      {/* Gender + Age + Country */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/50 p-4 rounded-2xl shadow-lg">
          <GenderPieChart data={genderStats} />
        </div>
        <div className="bg-slate-900/50 p-4 rounded-2xl shadow-lg">
          <AgeHistogramChart data={ageStats} />
        </div>
        <div className="bg-slate-900/50 p-4 rounded-2xl shadow-lg">
          <UsersByCountryBarChart data={usersByCountry} />
        </div>
      </div>

    </div>
  );
};
