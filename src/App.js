import UserSpecificGuide from './UserSpecificGuide'
import './App.css';

function App() {
  const elig=["A Candidate should have secured a minimum of 60% marks in Minimum Entry Qualification i.e. 10+2/Diploma/Graduation",
              "Family Income less than 8 Lakh",
              "Students should belong to Rural area"];
  const benif=["Students will get 50% Tution Fee back","Free Internet Facility","Decreases future debt"]
  const docs=["10th Marksheet","12th Marksheet","Aadhar Card"] 
  return (
    <div >
      <header >
        <UserSpecificGuide name="Scholorship" authority="State Government" eligibilityCriteria={elig} benefits={benif} documents={docs}/>
      </header>
    </div>
  );
}
export default App;