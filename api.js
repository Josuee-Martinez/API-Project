let url = 'https://api.spacexdata.com/v3/launches';
let body = document.querySelector('body');
let para = document.querySelector('.para');
let ul = document.querySelector('.list-items');
let ul2 = document.querySelector('.list-items-two')


fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {

    for(let i = 0; i < data.length; i ++) {

      console.log(data[0]);
      let missionName = data[i].mission_name;
      let flightNumber = data[i].flight_number;
      let launchYear = data[i].launch_year;
      let rocketName = data[i].rocket.rocket_name;
      let details = data[i].details;
      let rocketType = data[i].rocket.rocket_type;
      
      let li = document.createElement('li');
      let link = document.createElement('a');
      link.setAttribute('href', '#');
      link.appendChild(document.createTextNode('Click for launch information'));
      li.appendChild(link)
      // li.appendChild(document.createTextNode(`Mission Name: ${missionName} Flight Number: ${flightNumber} Launch Year: ${launchYear} Rocket Name: ${rocketName}`));
      ul.appendChild(li);
      
      link.addEventListener('click', () => {
        li.appendChild(document.createTextNode(`Mission Name: ${missionName} Flight Number: ${flightNumber} Launch Year: ${launchYear} Rocket Name: ${rocketName} Rockey Type: ${rocketType}`));

        link.style.display = 'none';
      })
      //display none
      //on click -> display info

      // li.addEventListener('click', () => {

      // let lis = document.createElement('li');
      // lis.appendChild(document.createTextNode(`Mission Name: ${missionName} Flight Number: ${flightNumber} Launch Year: ${launchYear} Rocket Name: ${rocketName}`));

      // ul.appendChild(lis);
      // console.log(lis):
      // })
    }
    
  }) 