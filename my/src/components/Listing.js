import "../styles/Listing.css";
import Timer from "./Timer"

function Listing({ Name, Preis }) {
  return (
    <div>
      <Timer styles={{color:"blue"}}/>
      <img
      
      
      src="https://platform.cstatic-images.com/xlarge/in/v2/9601529b-fb0c-5325-b37d-e0e8edcc2dc5/7a6bded2-8274-4a63-8da9-41920563de43/1vMCsQyT7Z3o2mYvUL-w3mEZ9C0.jpg"

      alt="alternativtext"
     
    
      />
      <h2>Automarke: {Name} </h2>
      <h2>Preis: Euro{Preis}</h2>
      <div style={{ border: "10px solid grey" }} />
      <div style={{ border: "10px solid white" }} />
    </div>
  );
}

export default Listing;
