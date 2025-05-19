export default {
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out both",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, translateX: -100 },
          to: { opacity: 1, translateX: 0 },
        },
      },
    },
  },

};
