import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from 'react-tooltip';
import "./GithubActiveDays.css"; 
import {Sparkles} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export default function GithubActiveDays({ username, token }) {
  const [values, setValues] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch(`/.netlify/functions/github?username=${username}`);
      const json = await res.json();

      console.log("Respuesta de la función:", json);

      if (!json.data || !json.data.user) {
        console.error("La respuesta no contiene data.user");
        return; // salimos sin romper
      }

      const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;

      const days = weeks.flatMap(week => week.contributionDays)
        .map(day => ({
          date: day.date,
          count: day.contributionCount,
        }));

      setValues(days);
    } catch (err) {
      console.error("Error al obtener datos de GitHub:", err);
    }
  }

  fetchData();
}, [username]);


  const today = new Date();

  return (
  <section id="github-active-days" style={{ position: "relative" }}>
    {/* Fondo animado con Canvas */}
    <Canvas
      className="canvas-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <Sparkles
        size={3}
        scale={[30, 5, 10]}
        speed={0.9}
        color="rgb(88, 88, 228)"
      />
    </Canvas>

    <div className="container-github-active-days" style={{ position: "relative", zIndex: 1 }}>
      <h2>Actividad en GitHub</h2>
      <div className="github-activity-container">
        <CalendarHeatmap
          startDate={new Date(today.getFullYear(), today.getMonth() - 11, 1)}
          endDate={today}
          values={values}
          monthLabels={[
            "Ene", "Feb", "Mar", "Abr", "May", "Jun",
            "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
          ]}
          weekdayLabels={["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]}
          classForValue={value => {
            if (!value || value.count === 0) return "color-empty";
            if (value.count >= 4) return "color-scale-4";
            if (value.count === 3) return "color-scale-3";
            if (value.count === 2) return "color-scale-2";
            return "color-scale-1";
          }}
          tooltipDataAttrs={value =>
            value?.date
              ? {
                  "data-tooltip-id": "heatmap-tooltip",
                  "data-tooltip-content": `${new Date(value.date).toLocaleDateString(
                    'es-ES',
                    { day: 'numeric', month: 'long', year: 'numeric' }
                  )}: ${value.count} contribuciones`,
                }
              : {}
          }
          showWeekdayLabels={true}
        />
        <Tooltip id="heatmap-tooltip" />
      </div>
    </div>
  </section>
);
}