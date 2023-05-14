let students =['Elen','Sam','Piolo','Dingdong','Pia','Barbie','Jessie','Luis','Robi','Marian']

 //  console.log all students
   
  for (let name in students){
   console.log(students[name]);
  }

 // Remove Robi
    
  let newStudents =students.splice(8,1);
    console.log(students);

     // index of Pia
    
     let orderOfPia=students.indexOf("Pia");
    console.log(orderOfPia);
    
     // add my name to the end of array
    
     let newStudents2=students.push("Riza");
    console.log(students);

    // return all the girls name in the array of students
   
    let girls=students.filter(checkGirls)
      console.log(girls);
    function checkGirls(name){
     return name!=='Piolo'&& name!=='Dingdong' && name!=='Robi'&& name!=='Luis' 
    }

     
            
        
