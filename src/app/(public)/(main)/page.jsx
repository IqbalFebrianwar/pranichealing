import dynamic from "next/dynamic";

const Banner = dynamic (()=> import ("@/app/components/banner"))
const About = dynamic (()=> import ("@/app/components/about"))
const Aktiviti = dynamic (()=> import ("@/app/components/actifitas"))
const Faq = dynamic (()=> import ("@/app/components/faq"))
const Further = dynamic (()=> import ("@/app/components/informasifuther"))

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Aktiviti />
      <Faq />
      <Further />
    </>
  );
}
