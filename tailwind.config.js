/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tailwind-scrollbar-hide")],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "global.d.ts",
  ],
  theme: {
    extend: {
      spacing: {
        'customWidth': '32%',
        'customHeight': '10%',
        'customLeft': '35%',
        'customTop': '10%',
        'customLeftMark': '13%',
        'customTopMark': '6%',
      },
      backgroundImage: {
        'fog': `radial-gradient(circle, 
          rgba(255, 255, 255, 0.5) 0%, 
          rgba(255, 255, 255, 0.3) 50%, 
          rgba(255, 255, 255, 0) 100%)`,
      },
      blur: {
        fog: '30px', // Custom blur for the fog effect
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.2',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },

      },
      animation: {
        ripple: 'ripple 1.3s infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'reverse-infinite-scroll': 'infinite-scroll 25s linear infinite',
        'marquee': 'marquee linear infinite',
        'paused': 'none',
        'fade-in-out': 'fadeInOut 5s infinite', // Fades in and out every 5 seconds
        bounce: 'bounce 2s infinite', 
      },
      colors: {
        footerBg: "#080811",
        textGradientLeft: "#FFFFFF",
        textGradientRight: "#344CB4",
        bgColor: "#050B1C",
        banner7from: "#35116F",
        banner7to: "#6F1111",
        radialGradientFrom: "#FFFFFF",
        radialGradientVia: "#0938DF",
        radialGradientTo: "#151515",
        linerGradientfrom: "#09173D",
        linerGradientto: "#35116F",
      },
      backgroundImage: {
        'bgImage': "url('/bg vectors.svg')",
        'circle': "url('/circle.png')",
        'bgImgaeBanner6': "url('/Frame 1116600025 (1).svg')",
        'customRadialBanner2': 'radial-gradient(ellipse at 25% 65%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.2) 25%, transparent 40%)',
        'customRadialBanner1': 'radial-gradient(ellipse at 80% 50%, rgba(53, 17, 111,4) 0%, rgba(111, 17, 17,0.2) 30%, transparent 50%)',
        'customRadialBanner1-2': 'radial-gradient(ellipse at 0% 40%, rgba(53, 17, 111,0.3) 0%, rgba(53, 17, 111,0.2) 20%, transparent 30%)',
        'customRadialBanner3': 'radial-gradient(ellipse at 30% 40%, rgba(53, 17, 111,0.5) 10%, rgba(53, 17, 111,0.5) 10%, transparent 50%)',
        'customRadialBanner3-2': 'radial-gradient(ellipse at 80% 72%, rgba(53, 17, 111,0.5) 10%, rgba(53, 17, 111,0.5) 10%, transparent 30%)',
        'customRadialBanner4': 'radial-gradient(ellipse at 50% 55%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 30%, transparent 50%)',
        'customRadialBanner5': 'radial-gradient(ellipse at 50% 30%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.3) 20%, transparent 30%)',
        'customRadialBanner5-1': 'radial-gradient(ellipse at 0% 50%, rgba(111, 17, 17,0.2) 0%, rgba(111, 17, 17,0.2) 10%, transparent 70%)',
        'customRadialBanner5-2': 'radial-gradient(ellipse at 50% 50%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.3) 30%, transparent 70%)',
        'customRadialBanner5-3': 'radial-gradient(ellipse at 0% 100%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.3) 30%, transparent 70%)',
        'customRadialBanner6': 'radial-gradient(ellipse at 50% 50%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 30%, transparent 50%)',
        'customRadialBanner6-1': 'radial-gradient(ellipse at 0% 50%, rgba(111, 17, 17,0.2) 0%, rgba(111, 17, 17,0.2) 20%, transparent 70%)',
        'customRadialBanner7': 'radial-gradient(ellipse at 40% 60%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 30%, transparent 50%)',
        'customRadialBanner8': 'radial-gradient(ellipse at 50% 60%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 30%, transparent 50%)',
        'customRadialBanner8-1': 'radial-gradient(ellipse at 0% 60%, rgba(111, 17, 17,0.3) 0%, rgba(111, 17, 17,0.2) 20%, transparent 40%)',

        'customRadialBanner2Mobile': 'radial-gradient(ellipse at 50% 60%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 20%, transparent 50%)',
        'customRadialBanner1Mobile': 'radial-gradient(ellipse at 50% 60%, rgba(53, 17, 111,4) 0%, rgba(53, 17, 111,0.3) 30%, transparent 60%)',
        'customRadialBanner1-2Mobile': 'radial-gradient(ellipse at 0% 40%, rgba(53, 17, 111,0.3) 0%, rgba(53, 17, 111,0.2) 20%, transparent 30%)',
        'customRadialBanner3Mobile': 'radial-gradient(ellipse at 30% 40%, rgba(53, 17, 111,0.5) 10%, rgba(53, 17, 111,0.5) 10%, transparent 50%)',
        'customRadialBanner3-2Mobile': 'radial-gradient(ellipse at 80% 50%, rgba(111, 17, 17,0.3) 10%, rgba(111, 17, 17,0.3) 10%, transparent 80%)',
        'customRadialBanner4Mobile': 'radial-gradient(ellipse at 50% 50%, rgba(53, 17, 111,0.3) 0%, rgba(53, 17, 111,0.3) 30%, transparent 50%)',
        'customRadialBanner5Mobile': 'radial-gradient(ellipse at 50% 30%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.3) 10%, transparent 40%)',
        'customRadialBanner5-1Mobile': 'radial-gradient(ellipse at 0% 50%, rgba(186, 87, 87,0.2) 0%, rgba(186, 87, 87,0.2) 10%, transparent 70%)',
        'customRadialBanner5-2Mobile': 'radial-gradient(ellipse at 50% 50%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.3) 30%, transparent 70%)',
        'customRadialBanner6Mobile': 'radial-gradient(ellipse at 50% 50%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.2) 30%, transparent 70%)',
        'customRadialBanner6-1Mobile': 'radial-gradient(ellipse at 0% 50%, rgba(186, 87, 87,0.2) 0%, rgba(186, 87, 87,0.2) 20%, transparent 70%)',
        'customRadialBanner7Mobile': 'radial-gradient(ellipse at 40% 60%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 30%, transparent 50%)'
      },
      screens: {
        'tablet': "1023px",
        "mobile": "414px",
        "laptop": "1024",
        "dekstop": "1280"
      },
      fontSize: {
        "xxs": '0.5rem'
      },
      height: {
        "500": "620px"
      },
      width: {
        "500": "620px"
      },
      boxShadow: {
        "customShadow": '0 35px 60px -20px rgba(255,255,255,0.2)'
      },
      top: "100px"

    },
  },
}

