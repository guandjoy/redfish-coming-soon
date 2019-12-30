import React from "react";

const RedfishLogo = props => (
  <div {...props}>
    <svg viewBox="0 0 196 196">
      <path
        d="M151.7 184.2h-111c-17.9 0-32.5-14.6-32.5-32.5v-111c0-17.9 14.6-32.5 32.5-32.5h111c17.9 0 32.5 14.6 32.5 32.5v111c0 17.9-14.5 32.5-32.5 32.5z"
        fill="#fff"
      />
      <g>
        <path fill="#3688ff" d="M132.2 52.2h8v88h-8z" />
        <path fill="#ff546c" d="M124.2 40.2v116l-60-72z" />
        <path fill="#22d163" d="M72.2 104.2l-28 16v-48z" />
      </g>
    </svg>
    <span className="sign">coming soon</span>
  </div>
);

export default RedfishLogo;
