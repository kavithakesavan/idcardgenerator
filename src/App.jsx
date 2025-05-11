import './style.css';
import orchidlogo from'./orchidlogo.jpg';
import studentphoto from'./orchidlogo.jpg';

function App() {  
  return (
    <>
<div id="wrapper">
<div id="logo">
  <div class="schoollogo">
    <img src={orchidlogo} height='60px' width='60px'/>
  </div>
  <div class="schoolname">
    <span id="temp">ORCHIDS</span><br/>
    The International School
  </div>
</div>
  <div class="schooladdress">
    Orchids- The international school - Perumbakkam,Bollinenni Zion,Nookampalayam Link Road,Chennai-600126
  </div>
  <div class="studentphoto">
    Academic Year - 2025-26<br/>
    <img src={studentphoto} height='60px' width='60px'/>
  </div>
  <div class="studentdetails">
    <div class="item1">Student Name</div>
      <div class="item1">:  Devarapalem Rakshitha Krivi </div>
    <div class="item2">Father Name</div>
    <div class="item2">:  Devarapalem Bharat Kumar</div>
    <div class="item3">Enrollment Code</div>
     <div class="item3">:  52534656456</div>
    <div class="item4">Grade</div>
    <div class="item4">:  Grade 1</div>
    <div class="item5">Date of Birth</div>
     <div class="item5">:  09-03-2019</div>
    <div class="item6">Contact No</div>
    <div class="item6">:  9884595702</div>
    <div class="item7">Address</div>
    <div class="item7">:  KG (HOC) , Door No:301,3rd Floor,Perumbakkam , Chennai</div>
  </div>
  
</div>
    <span class="signature">Principal</span>

</>

  );
}

export default App;
