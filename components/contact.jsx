import Button2 from "./ui/button2";

export default function contact() {
  return (
    <section className="bg-primary rounded-[2rem] py-10 text-center mt-32 px-4 placeholder flex-center flex-col">
      <h2 className="h2 text-white max-w-[26ch]">
        Time to change your lifestyle to find health services. join us for any
        updates on medicare
      </h2>
      <p className="text-[22px] my-10 max-w-[45ch] text-white opacity-90 font-[300]">
      Begin your wellness journey in a structured way by 
consulting with the best doctors available on medicare.
      </p>
      <Button2 title="Join us now!" href="" style="bg-white border-transparent shadow-lg hover:border-white"/>
    </section>
  );
}
