"use client"

import styles from "@/styles/Register.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function register() {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState("May");
  const [selectedDay, setSelectedDay] = useState("");
  const [days, setDays] = useState<number[]>([]);

  const years = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }

  useEffect(() => {
    setDays([]);

    const dayCounter = [];

    if (
      selectedMonth === "June" ||
      selectedMonth === "September" ||
      selectedMonth === "November" ||
      selectedMonth === "April"
    ) {
      for (let i = 1; i <= 30; i++) {
        dayCounter.push(i);
      }
    } else if (selectedMonth === "February") {
      if (selectedYear / 4) {
        for (let i = 1; i <= 29; i++) {
          dayCounter.push(i);
        }
      } else {
        for (let i = 1; i <= 28; i++) {
          dayCounter.push(i);
        }
      }
    } else {
      for (let i = 1; i <= 31; i++) {
        dayCounter.push(i);
      }
    }
    setDays(dayCounter);
  }, [selectedMonth]);
  return (
    <section className={styles.section}>
      <div className={styles.register__box}>
        <form action="/register" method="post" autoComplete="off" autoFocus={false}>
          <h2>Register</h2>
          <div className={styles.get__name}>
            <div className={styles.first__name}>
              <input type="text" name="firstName" id="firstName" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className={styles.last__name}>
              <input type="text" name="lastName" id="lastName" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className={styles.email}>
            <input type="email" name="email" id="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.birth__date}>
            <div className={styles.date__select} id="date__select">
              <select
                name="month"
                id="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="day"
                id="day"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                name="year"
                id="year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <label htmlFor="date__select">Birth Date</label>
          </div>
          <div className={styles.get__gender} id="get__gender">
            <div className={styles.gender__option}>
              <div>
                <input type="radio" name="gender" id="male" value={"male"} />
                <h3>Male</h3>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value={"female"}
                />
                <h3>Female</h3>
              </div>
              <div>
                <input type="radio" name="gender" id="other" value={"other"} />
                <h3>Other</h3>
              </div>
            </div>
            <label htmlFor="get__gender">Gender</label>
          </div>
          <div className={styles.password}>
            <input type="password" name="password" id="password" />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
