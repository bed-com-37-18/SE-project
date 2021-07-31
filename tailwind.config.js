module.exports = {
  purge: ["./pages/**/*.{js,jsx}","../components/**/*.{js,jsx}"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  theme:{
    extend: {
        backgroundImage: (theme) => ({
            "home-image": "url('/images/bg1.jpg')",
}),
        animation:{
              button:"button 2s infinite",
              blob :"blob 7s infinite"
            },

        keyframes: {
          blob:{
            "0%":{
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%":{
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%":{
              transform: "translate(-20px, 20px) scale(1.9)",
            },
            "100%":{
              transform: "translate(0px, 0px) scale(1)",
            },
          },
          button:{
              "0%":{
                  transfrom: "scale(1)"
              },
              "100%":{
                 transform: "filter blur scale(2)"


              }
          }
        }

    }
  }
};
