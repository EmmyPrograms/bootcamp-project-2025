/*
    based on resume data, generates a project component for the resume page
    @author Amelia Harris
    @version 1.0
*/

import React from "react";
import { Project } from "@/app/resumeData";

export default function ProjectPreview(props: Project) {
  return (
    <div>
      <li>
        <u>
          <i> {props.title} </i>
        </u>
      </li>
      <div>
        <ul>
          {props.entry.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
