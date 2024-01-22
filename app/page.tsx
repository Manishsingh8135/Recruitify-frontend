
import NewJob  from "@/components/dashboard/NewJob";
import Hero from "@/components/hero/Hero";


export default function Home() {
  return (
    <div className="min-w-full bg-background text-foreground">
      <Hero/>
      <NewJob />
      
    </div>
  );
}
