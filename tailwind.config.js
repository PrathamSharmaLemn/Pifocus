/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fog': `radial-gradient(circle, 
          rgba(255, 255, 255, 0.5) 0%, 
          rgba(255, 255, 255, 0.3) 50%, 
          rgba(255, 255, 255, 0) 100%)`,
      },
      blur: {
        fog: '30px', // Custom blur for the fog effect
      },
      animation: {
        'pulse-scale': 'pulse-scale 2s infinite',
      },
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1.3)', opacity: '0.03' },
          '50%': { transform: 'scale(1.5)', opacity: '0.03' },
        },
      },
      colors:{
        footerBg:"#080811",
        textGradientLeft:"#FFFFFF",
        textGradientRight:"#344CB4",
        bgColor:"#050B1C",
        banner7from:"#35116F",
        banner7to:"#6F1111",
        radialGradientFrom:"#FFFFFF",
        radialGradientVia:"#0938DF",
        radialGradientTo:"#151515",
        linerGradientfrom:"#09173D",
        linerGradientto:"#35116F",
      },
      backgroundImage: {
        'bgImage':"url('/bg vectors.png')",
        'circle':"url('/circle.png')",
        'customRadial': 'radial-gradient(ellipse at 25% 65%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.2) 25%, transparent 50%)',
        'customRadialBanner1':'radial-gradient(ellipse at 80% 50%, rgba(53, 17, 111,4) 0%, rgba(186, 87, 87,0.2) 30%, transparent 50%)',
        'customRadialBanner1-2':'radial-gradient(ellipse at 0% 40%, rgba(53, 17, 111,0.3) 0%, rgba(53, 17, 111,0.2) 20%, transparent 30%)',
        'customRadialBanner3':'radial-gradient(ellipse at 30% 40%, rgba(53, 17, 111,0.5) 10%, rgba(53, 17, 111,0.5) 10%, transparent 50%)',
        'customRadialBanner3-2':'radial-gradient(ellipse at 80% 72%, rgba(53, 17, 111,0.5) 10%, rgba(53, 17, 111,0.5) 10%, transparent 30%)',
        'customRadialBanner4':'radial-gradient(ellipse at 50% 55%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 30%, transparent 50%)',
        'customRadialBanner5':'radial-gradient(ellipse at 50% 30%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.3) 20%, transparent 40%)',
        'customRadialBanner5-1':'radial-gradient(ellipse at 0% 50%, rgba(186, 87, 87,0.2) 0%, rgba(186, 87, 87,0.2) 10%, transparent 70%)',
        'customRadialBanner5-2':'radial-gradient(ellipse at 50% 50%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.3) 30%, transparent 70%)',
        'customRadialBanner6':'radial-gradient(ellipse at 50% 50%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 30%, transparent 50%)',
        'customRadialBanner6-1':'radial-gradient(ellipse at 0% 50%, rgba(186, 87, 87,0.2) 0%, rgba(186, 87, 87,0.2) 20%, transparent 70%)',
        'customRadialBanner7':'radial-gradient(ellipse at 40% 60%, rgba(53, 17, 111,0.5) 0%, rgba(53, 17, 111,0.5) 30%, transparent 50%)'

      },
      screens:{
        'tablet':"640px",
        "mobile":"414px",
        "laptop":"1024",
        "dekstop":"1280"
      },
      fontSize:{
        "xxs":'0.5rem'
      },
      height:{
        "500":"620px"
      },
      width:{
        "500":"620px"
      },
      boxShadow:{
        "customShadow":'0 35px 60px -20px rgba(255,255,255,0.2)'
      },
      top:"100px"

    },
  },
  plugins: [],
}

