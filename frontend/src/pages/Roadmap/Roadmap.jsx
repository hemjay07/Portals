import React from 'react'
import {Chrono} from "react-chrono";

export default function Roadmap() {
    const newRoadmap = JSON.parse(localStorage.getItem("roadmap"));
    console.log(newRoadmap);

    function calculateSubsequentDate(baseDate, duration) {
        const millisecondsInDay = 24 * 60 * 60 * 1000;
        const millisecondsInWeek = millisecondsInDay * 7;
      
        const parts = duration.split(' ');
        const value = parseInt(parts[0]);
        const unit = parts[1].toLowerCase();
      
        let timeToAdd = 0;
      
        if (unit === 'days') {
          timeToAdd = value * millisecondsInDay;
        } else if (unit === 'weeks') {
          timeToAdd = value * millisecondsInWeek;
        } else if (unit === 'months') {
          // Note: Calculating exact months can be more complex due to varying month lengths and leap years.
          // For simplicity, this example uses an approximate month length of 30.44 days.
          timeToAdd = value * 30.44 * millisecondsInDay;
        }
      
        const subsequentTimestamp = baseDate + timeToAdd;
        return new Date(subsequentTimestamp).toLocaleDateString("en-US", {"year": "numeric", "month": "short", "day": "numeric"});
      }
      

    let items = [];
    let projects = [];
    if (newRoadmap !== "") {
        for (const resource in newRoadmap) {
            for(const project in newRoadmap[resource].projects){
                projects.push({
                    cardTitle: newRoadmap[resource].projects[project].projectTitle,
                    cardDetailedText: newRoadmap[resource].projects[project].projectDescription,
                    time: newRoadmap[resource].projects[project].projectTime
                })
            }

            
            if(items.length === 0){
                items.push(
                    {
                        title: new Date().toLocaleDateString("en-US", {"year": "numeric", "month": "short", "day": "numeric"}),
                        cardTitle: newRoadmap[resource].resourceTitle,
                        url: newRoadmap[resource].resourceLink,
                        cardSubtitle: newRoadmap[resource].resourceDetails,
                        items: projects
                    }
                )
            }
            else {
                const today = Date.parse(items[items.length - 1].title);
                
                const subsequentDate = calculateSubsequentDate(today, newRoadmap[resource].allocatedTime);
                items.push(
                    {
                        title: subsequentDate,
                        cardTitle: newRoadmap[resource].resourceTitle,
                        url: newRoadmap[resource].resourceLink,
                        cardSubtitle: newRoadmap[resource].resourceDetails,
                        items: projects
                    }
                )
            }
        }
    }

  return (
    <div style={{ width: '500px', height: '950px' }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING"/>
    </div>
  )
}
