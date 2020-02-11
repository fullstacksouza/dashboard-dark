import { IoIosSpeedometer, IoMdCard } from "react-icons/io";
import React from "react";
export default [
  {
    icon: () => <IoIosSpeedometer size={35} color="#FFFFFF" />,
    title: "Finance",
    expanded: {
      title: "Finance",
      options: [
        {
          title: "Finance Account"
        },
        {
          title: "Balance"
        },
        {
          title: "My Cards"
        },
        {
          title: "Speeding"
        },
        {
          title: "Analysis"
        }
      ]
    }
  },
  {
    icon: () => <IoMdCard size={35} color="#FFFFFF" />,
    title: "Finance",
    expanded: {
      title: "Finance",
      options: [
        {
          title: "Finance Account"
        },
        {
          title: "Balance"
        },
        {
          title: "My Cards"
        },
        {
          title: "Speeding"
        },
        {
          title: "Analysis"
        }
      ]
    }
  }
];
