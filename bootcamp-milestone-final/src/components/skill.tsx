/*
    based on resume data, generates a skill component for resume page
    @author Amelia Harris
    @version 1.0
*/

import React from "react";
import style from "./skill.module.css";
import { Skill } from "@/app/resumeData";

export default function SkillPreview(props: Skill) {
  return (
    <div>
      <li>
        <b>
          <u>{props.title}</u>
        </b>
        {props.entry}
      </li>
    </div>
  );
}
