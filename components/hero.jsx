import Button1 from "./ui/button1"
import Button2 from "./ui/button2"

export default function hero() {
  return (
    <section className="mb-[8.5625rem] mt-24 text-center flex flex-col items-center ">
      <h1 className='h1 md:px-10 '>Your health is our top priority and the most
 complete health solutions in your hands</h1>
      <p className="my-10 p">Remote health monitoring platform to create a bright smile,<br/>
healthy lifestyle and get fast medical services to treat your health.</p>
      <div className="flex-center gap-6 max-sm:flex-col w-full justify-center">
        <Button1 title="Get Started" href="#"/>
        <Button2 title="Free Consultation" href="#" style="border-primary"/>
      </div>
    </section>
  )
}
