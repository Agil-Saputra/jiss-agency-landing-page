import Button1 from "./ui/button1"
import Button2 from "./ui/button2"

export default function hero() {
  return (
    <section>
      <h1 className='h1'>Your health is our top priority and the most
 complete health solutions in your hands</h1>
      <p className="my-10">Remote health monitoring platform to create a bright smile,
healthy lifestyle and get fast medical services to treat your health.</p>
      <div className="flex-center gap-6">
        <Button1 title="Get Started" href="#"/>
        <Button2 title="Free Consultation" href="#"/>
      </div>
    </section>
  )
}
