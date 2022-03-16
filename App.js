import logo from './logo.svg';
import './App.css';


import * as XLSX from 'xlsx';
import { useState } from 'react';

function App() {
   const [data,setData] = useState();

  const handleUpload = name => e => {
    

    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];
      

        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws);
        var total = 0;
        for(var i = 0; i < 5; i++) {
          total =  total + parseFloat(dataParse[i].CPd,8);
        }
        console.log(total);
        
    };
    reader.readAsBinaryString(f)
}

  
  return (
    <div className="App">

     <div className="col-12">
       <div className="row">
         <div className="col-4">
         <div className="form-group">
            <label className="text-dark">Photo</label> <br />
            <label className="btn btn-block btn-dark" id="photo_input">
              <input
                
                type="file"
                name="image"
                accept="image"
                placeholder="Choose a File"
                width="100%"
                className="photo_input"

              />
            </label>
          </div>
         </div>
         <div className="col-4">
         <div className="form-group">
            <br />
            <label className="text-dark">Name</label> <br />
            <input
             
              name="photo"
              className="form-control"
              id="addproduct__input"
              
            />
          </div>
         </div>
       </div>
      
     
    
      
      </div>
    </div>

  );
}

export default App;
