
    
    var presidents = [
    {
      name: 'Bongbong Marcos',
      details: '2022-Present',
    },
    {
      name: 'Rodrigo Duterte',
      details: '2016-2012',
    },
    {
      name: 'Benigno Aquino III',
      details: '2010-2016',
    },
    {
      name: 'Gloria Macapagal Arroyo',
      details: '2001-2010',
    },
    {
      name: 'Joseph Ejercito Estrada',
      details: '1998-2001',
    },
    {
      name: 'Fidel V. Ramos',
      details: '1992-1998',
    },
    {
      name: 'Corazon Aquino',
      details: '1986-1992',
    },
    {
      name: 'Ferdinand Marcos',
      details: '1965-1986',
    },
    {
      name: 'Diosdado Macapagal',
      details: '1961-1965',
    },
  ];
  //  Put Logo Image
  let imgVar= document.createElement('img');
  imgVar.setAttribute('src', 'logo.png');
  document.querySelector('#root').appendChild(imgVar);

  // Put Container for Card
  let divE1=document.createElement('div');
  divE1.setAttribute('class','container');
  document.getElementById('root').appendChild(divE1);

  // Loop for presidents array
  for(let i=0; i<presidents.length; i++){
  //  create card
    let divE2=document.createElement('div');
      divE2.setAttribute('class','card');
    // Put presidents name on card
    let h1 = document.createElement('h1')
      divE2.appendChild(h1);
     h1.textContent=presidents[i].name;
    // Put details in card
    let p = document.createElement('p');
      divE2.appendChild(p);
      p.textContent =presidents[i].details;
      // Center details
      p.classList.add('text-center');
      // Put card on container
      document.querySelector('.container').appendChild(divE2);
      

  }




