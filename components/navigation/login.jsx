import Button1 from "../ui/button1"

export default function login({style}) {
  return (
    <div className={"gap-8 text-secondary " + style}>
    <a href="#" className="font-bold text-[18px]">Register</a>
        <Button1 href="#" title="Login"/>
    </div>
  )
}
