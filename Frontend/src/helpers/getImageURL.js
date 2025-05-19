import axios from "axios";

export const getImageURL = (type) => {
          const fallback = "Frontend/public/Modern-house-with-pool.jpg";
          if (typeof type === "string" && type.trim() !== "") {
            const formatted = type.toLowerCase().trim().replace(/_/g, " ");            return formatted;
          } else {
          return fallback;
          }
        };