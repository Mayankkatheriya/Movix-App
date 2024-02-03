// Component for switching between tabs
import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./styles.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  // State for the selected tab and position of the moving background
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  // Handle tab selection
  const handleTabSelection = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          // Tab item with unique key
          <span
            key={nanoid()}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => handleTabSelection(tab, index)}
          >
            {tab}
          </span>
        ))}
        {/* Moving background indicating selected tab */}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
