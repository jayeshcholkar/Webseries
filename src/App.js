import Leftside from "./component/Leftside";
import Navbar from "./component/Navbar";
import Originals from "./component/Originals";
import Slide from "./component/Slide";

function App() {
  return(
    
    <div className="flex bg-slate-900 ">

<Leftside />
    {/* leftside */} 
<div className="w-[90%] items-center justify-center">
  {/* navbar */}
<Navbar />


{/* <Hero /> */}
<Slide />
{/* orignal */}
<Originals/>

{/* footer */}
    </div>
</div>

  );
}

export default App;
