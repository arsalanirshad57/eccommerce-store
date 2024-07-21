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
      path: '../../public/assets/fonts/integral-cf/Fontspring-DEMO-integralcf-regular.otf',
      weight: "400",
      style: 'normal'
    },
  ],
  variable: '--font-cf'
});

const stoshi = LocalFont({
  src: [
    {
      path: '../../public/assets/fonts/stoshi/Satoshi-Light.otf',
      weight: "300",
      style: 'normal'
    },
    {
      path: '../../public/assets/fonts/stoshi/Satoshi-Regular.otf',
      weight: "400",
      style: 'normal'
    },
    {
      path: '../../public/assets/fonts/stoshi/Satoshi-Medium.otf',
      weight: "500",
      style: 'normal'
    },
    {
      path: '../../public/assets/fonts/stoshi/Satoshi-Bold.otf',
      weight: "800",
      style: 'normal'
    },
    {
      path: '../../public/assets/fonts/stoshi/Satoshi-Black.otf',
      weight: "900",
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
