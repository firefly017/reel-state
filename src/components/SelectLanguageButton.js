import React from "react";

export default function SelectLanguageButton() {
  return (
    <div>
      <select name="language">
        <option value="english">English</option>
        <option value="dutch">Dutch</option>
        <option value="german">German</option>
        <option value="spanish">Spanish</option>
      </select>
    </div>
  );
}
