import Hero from "./component/Hero";
import Leftside from "./component/Leftside";
import Navbar from "./component/Navbar";
import Originals from "./component/Originals";
import Slide from "./component/Slide";

function App() {
  return(
  <div className="flex bg-slate-900">
{/* leftside */} 
<Leftside />
<div className="w-full xl:w-[85vw] ">
  {/* navbar */}
<Navbar />
{/* hero */}
{/* <Hero /> */}
<Slide />
{/* orignal */}
<Originals/>
{/* footer */}
</div>

<div className ="h-screen"></div>
  </div>
  );
}

export default App;
