import RtkProvider from "@/redux/redux-provider";
import LocalFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "SHOP.CO",
  description: 'Ecommerce Store',
  icons: [
    {
      url: '/assets/images/online-shop.png',
    }
  ]
};

// CUSTOM FONTS 
const IntegralCF = LocalFont({
  src: [
    {
      path: '../../public/assets/fonts/Fontspring-DEMO-integralcf-regular.otf',
      weight: "400",
      style: 'normal'
    },
  ],
  variable: '--font-cf'
});

const stoshi = LocalFont({
  src: [
    {
      path: '../../public/assets/fonts/Satoshi-Variable.ttf',
      weight: "400",
      style: 'normal'
    },
  ],
  variable: "--font-stoshi"
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` font-stoshi ${stoshi.variable} ${IntegralCF.variable}`}>
        <RtkProvider>
          {children}
        </RtkProvider>
      </body>
    </html>
  );
}
