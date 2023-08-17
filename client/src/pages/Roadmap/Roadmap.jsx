import React, { useContext } from "react";
import { Chrono } from "react-chrono";
import { StyledRoadmap, StyledFeedback, StyledLink } from "./Roadmap.styled";
import Placeholder from "./placeholder";
import { loadingContext } from "../../App";
// import FeedbackModal from "./FeedbackModal"

export default function Roadmap() {
  const { loading, setLoading } = useContext(loadingContext);
  const newRoadmap = JSON.parse(localStorage.getItem("roadmap"));

  // const handleScrollEnd = () => {
  //     setModal(true);
  //     console.log("at the end of page");
  // }

  function calculateSubsequentDate(baseDate, duration) {
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInWeek = millisecondsInDay * 7;

    const parts = duration.split(" ");
    const value = parseInt(parts[0]);
    const unit = parts[1].toLowerCase();

    let timeToAdd = 0;

    if (unit === "days") {
      timeToAdd = value * millisecondsInDay;
    } else if (unit === "weeks") {
      timeToAdd = value * millisecondsInWeek;
    } else if (unit === "months") {
      // Note: Calculating exact months can be more complex due to varying month lengths and leap years.
      // For simplicity, this example uses an approximate month length of 30.44 days.
      timeToAdd = value * 30.44 * millisecondsInDay;
    }

    const subsequentTimestamp = baseDate + timeToAdd;
    return new Date(subsequentTimestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  let items = [];
  let projects = [];
  if (newRoadmap !== "") {
    for (const resource in newRoadmap) {
      for (const project in newRoadmap[resource].projects) {
        projects.push({
          cardTitle: newRoadmap[resource].projects[project].projectTitle,
          cardDetailedText:
            newRoadmap[resource].projects[project].projectDescription,
          cardSubtitle: newRoadmap[resource].projects[project].projectTime,
        });
      }

      if (items.length === 0) {
        items.push({
          title: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          cardTitle: newRoadmap[resource].resourceTitle,
          url: newRoadmap[resource].resourceLink,
          cardDetailedText: newRoadmap[resource].resourceDetails,
          cardSubtitle: newRoadmap[resource].allocatedTime,
          items: projects,
        });
      } else {
        const today = Date.parse(items[items.length - 1].title);

        const subsequentDate = calculateSubsequentDate(
          today,
          newRoadmap[resource].allocatedTime
        );
        items.push({
          title: subsequentDate,
          cardTitle: newRoadmap[resource].resourceTitle,
          url: newRoadmap[resource].resourceLink,
          cardDetailedText: newRoadmap[resource].resourceDetails,
          cardSubtitle: newRoadmap[resource].allocatedTime,
          items: projects,
        });
      }
    }
  }

  return !loading ? (
    <StyledRoadmap
      style={{
        maxwidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        theme={{
          cardBgColor: `#102009`,
          titleColor: "#ffffff",
          titleColorActive: "#ffffff",
          cardTitleColor: "#aae090",
          cardSubtitleColor: "#ffffff",
          primary: "#ffffff",
          nestedCardBgColor: "#102009",
          nestedCardTitleColor: "#ffffff",
          nestedCardSubtitleColor: "#ffffff",
          cardDetailsColor: "#ffffff",
          iconBackgroundColor: "#7fdb57",
          titleBackgroundColor: "#102009",
        }}
        fontSizes={{
          cardSubtitle: "0.85rem",
          cardDetailedText: "0.75rem",
          cardTitle: "1.2rem",
          title: "1rem",
        }}
        hideControls="true"
        timelinePointShape="circle"
        className="kUOkfN jgZHdE"
        // onScrollEnd={handleScrollEnd}
      />
      <StyledLink
        href="https://docs.google.com/forms/d/e/1FAIpQLSfqbKtH_7bWUtpGhLOtpoOxZ3_vkwQmVZaRXRD5aB06ShJj8g/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledFeedback>Share your feedback with us!</StyledFeedback>
      </StyledLink>
    </StyledRoadmap>
  ) : (
    <Placeholder />
  );
}
