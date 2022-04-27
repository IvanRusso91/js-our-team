
/*

Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

*/

//-------------------------------------------------

const teamArray =[
  {
    image:'img/wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnett',
    position : 'Founder & CEO',
    
  },
  {
    image:'img/angela-caroll-chief-editor.jpg',
    name: 'Angela Caroll',
    position : 'Chief Editor',
    
  },
  {
    image:'img/walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    position : 'Office Manager',

  },
  {
    image:'img/angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    position : 'Social Media Manager',
    
  },
  {
    image:'img/scott-estrada-developer.jpg',
    name: 'Scott Extrada',
    position : 'Developer',
    
  },
  {
    image:'img/barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    position : 'Graphic Designer',
    
  }
];

console.log('-->', teamArray);


for(let i in teamArray){
  const team = teamArray[i];
  console.log(team);
  const output =
  `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${team.image}"
        />
    </div>
    <div class="card-text">
      <h3>${team.name}</h3>
      <p>${team.position}</p>
    </div>
  </div>
  `;
  document.querySelector('.team-container').innerHTML += output;
};

//------------------------[Extra]--------------------------


const newImage =[
  'img/new-team-member-01.jpg',
  'img/new-team-member-02.jpg',
  'img/new-team-member-03.jpg',
  'img/new-team-member-04.jpg'
];

document.getElementById('addMemberButton').addEventListener('click',function(){

  let index = getRandomNumber(0, newImage.length - 1);

  const newMember = {
    image: newImage[index],
    name:document.querySelector('#name').value,
    position :document.querySelector('#role').value,
   };

  teamArray.push(newMember);

  output =
  ` 
  <div class="team-card">
    <div class="card-image">
      <img
        src="${newMember.image}"
        />
    </div>
    <div class="card-text">
      <h3>${newMember.name}</h3>
      <p>${newMember.position}</p>
    </div>
  </div>
  `;

  document.querySelector('.team-container').innerHTML += output;

}); 


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}