import React from 'react';
import { useState } from 'react';

export const Jeu = () => {
  // Jeu de devinette : Créez un jeu où l'utilisateur doit deviner un nombre aléatoire compris entre 1 et 100. Utilisez les state pour gérer le nombre à deviner, les devinettes de l'utilisateur et les messages de feedback.
  let [feedback, setFeedback] = useState('Good luck');
  let [mystere, setMystere] = useState(Math.round(Math.random() * 100));
  let [nombre, setNombre] = useState();

  const essayer = () => {
    let essai = document.getElementsByTagName('input')[0].value;
    if(essai.length > 0){
      nombre = essai;
      setNombre(nombre);
      if(nombre == mystere){
        setFeedback('Félicitations');
        setMystere(Math.round(Math.random() * 100));
      } else if(nombre > mystere){
        setFeedback('Trop grand');
      } else{
        setFeedback('Trop petit');
      }
    }
  }

  return (
    <section>
      <h1 className='font-bold text-xl'>Jeu de devinette</h1>
      <p>Devinez un nombre aléatoire entre 1 et 100.</p>
      <div>
        <input type="text" placeholder='Entrez un nombre' className='border-2 border-gray-300 rounded'/>
        <button className='bg-blue-400 text-white font-bold px-2 py-0.5 rounded' onClick={essayer}>Validez</button>
        <span className='block'>Feedback : {feedback}</span>
      </div>
    </section>
  )
}
