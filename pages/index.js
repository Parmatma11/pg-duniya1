import Header1 from "../components/Header1"
import Header3 from "@/components/Header3"
import Image from "next/image"
import Header4 from "@/components/Header4"
import Head from "next/head"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div>
      <Head>
        <title> PGduniya : India's best Paying Guest Booking Website </title>
        
        
      </Head>
      <Header1/>
      
      <Header3/>
      <div className="mx-20">
        <div className=" my-14">
         
        </div>
          <div className="mb-14">
           <Image src={'/banner2.avif'}
           alt="banner2" 
           width={200} 
           height={200} 
           className="h-45 w-full"/>
          </div>
          <Header4/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
