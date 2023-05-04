/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        collection:
          "url('https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/SF90-Stradale/7858/1591619661237/front-left-side-47.jpg')",
        magazine:
          "url('https://imgd.aeplcdn.com/0x0/n/cw/ec/49376/f8-tributo-exterior-right-front-three-quarter-11.jpeg')",
        approved:
          "url('https://media.architecturaldigest.com/photos/56a15d8cf62777972f2fe140/4:3/w_2131,h_1598,c_limit/ferrari-announces-winner-top-design-school-challenge-2040-concept-car-01.jpg')",
        pilota:
          "url('https://cdn.motor1.com/images/mgl/P33WYL/s1/ferrari-sp48-unica.jpg')",
        pastModel: "url('https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/cms/uploads/pvyiuvkzer4kstxx87ho')",
        fia: "url('https://media.zigcdn.com/media/content/2022/Nov/cover_638487d746b00_640x480.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
