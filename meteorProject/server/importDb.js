//////////////////////////////////////////////////
//
// This file only serve to populate the database
// Just put Meteor.importDb() whenever you want to call it
//
// DO NOT USE IT FOR ANYTHING ELSE !!!
//
/////////////////////////////////////////////////


import { Mongo } from 'meteor/mongo'
import { Menu } from '../lib/collections/menu.js'
import { Expense } from '../lib/collections/expense.js'
import { News } from '../lib/collections/news.js'
import { Ranks } from '../lib/collections/ranks.js'
import { Vacant_position } from '../lib/collections/vacantPosition.js'
import { Vacations } from '../lib/collections/vacations.js'
import { Curriculum_vitae } from '../lib/collections/curriculumVitae.js'

Meteor.importDb = function() {

  // Insert Ranks
  Ranks.insert({email: 'renaud.cayol@gmail.com', role: 'adminTestRank'}, function(err, user) {
    if(err) {
      return err;
    }
    Expense.insert({user_id: new Mongo.ObjectID(user._id), name: 'testUser1ExpenseName', description: 'testUser1DescriptionName', total: 183.12, date: new Date()});
    Vacations.insert({user_id: new Mongo.ObjectID(user._id), date_start: new Date(), date_end: new Date(), type: 'testVacationType'});
    News.insert({user_id: new Mongo.ObjectID(user._id), title: 'testNewsTitle', description: 'testNewsDescription', date: new Date()});

    Vacant_position.insert({name: 'testPositionName', date: new Date(), description: 'testPositionDescription', type: 'testPositionType', category: 'testPositionCategory'}, function(err, vacant) {
      if(err) {
        return err;
      }
      Curriculum_vitae.insert({vacantPositionId: new Mongo.ObjectID(vacant._id), userId: new Mongo.ObjectID(user._id), extension: '.pdf', gender: 'M',
      first_name: 'testCVFirstName', last_name: 'testCVLastName', address: 'testCVAddress', country : 'testCVCountry', city: 'testCVCity', zipcode: 'testCVCode',
      phone: 'testCVPhone', email: 'CVMail@test.com'})
    });
  });
  Ranks.insert({email: 'testMail@test.com', role: 'userTestRank'});

  // Insert Menu
  Menu.insert({ name : 'group',label: 'Le groupe', content: '<h1>Le groupe</h1>', position:'navBar'}, function(err, groupMenu) {
      if(err){return err;}

      Menu.insert({label: 'Présentation', name: 'presentation', content: '<h1> Présentation </h1>', parentId: groupMenu}, function(err, presentationMenu) {
        if(err)return err;
        Menu.insert({label: 'La société', name: 'society', content: '<h1> La société </h1>', parentId: presentationMenu});
      });

      Menu.insert({label: 'Chiffres clés', name: 'keyfigures', content: '<h1> Chiffres clés </h1>', parentId: groupMenu},function(err, numberMenu) {
        if(err)return err;
        Menu.insert({label: 'Détails', name: 'details', content: '<h1> Détails </h1>', parentId: numberMenu});
      });

      Menu.insert({label: 'Notre expertise', name: 'ourexpertise', content: '<h1> Notre expertise </h1>', parentId: groupMenu},function(err, expertiseMenu) {
        if(err){return err;}

        Menu.insert({label: 'Présentation des expertises', name: 'presentationexpertise', content: '<h1> Présentation des expertises </h1>', parentId: expertiseMenu});
        Menu.insert({label: 'Assistance technique', name: 'technicalassistance', content: '<h1> Assistance technique </h1>', parentId: expertiseMenu});
        Menu.insert({label: 'Formation', name: 'training', content: '<h1> Formation </h1>', parentId: expertiseMenu});
        Menu.insert({label: 'Forfait', name: 'flatrate', content: '<h1> Forfait </h1>', parentId: expertiseMenu});
      });

      Menu.insert({label: 'Les valeurs du groupe', name: 'groupvalue', content: '<h1> Les valeurs du groupe </h1>', parentId: groupMenu},function(err, groupvalueMenu) {
        if(err){return err;}
      });



  });
  Menu.insert({ name : 'activite',label: 'L\'activite', content: '<h1>L\'activite</h1>', position:'navBar'}, function(err, activiteMenu) {
      if(err){return err;}

      Menu.insert({label: 'Nos métiers', name: 'nosMetiers', content: '<h1> Nos métiers </h1>', parentId: activiteMenu});
      Menu.insert({label: ' Nos secteurs d\'activité', name: 'nosSecteurs', content: '<h1> Nos secteurs d\'activité </h1>', parentId: activiteMenu});

      Menu.insert({label: 'Energies', name: 'energies', content: '<h1> Energies </h1>', parentId: activiteMenu},function(err, energiesMenu) {
        if(err)return err;
        Menu.insert({label: 'Chimie, pétrochimie, pharmacie', name: 'chimiePP', content: '<h1> Chimie, pétrochimie, pharmacie </h1>', parentId: energiesMenu});
        Menu.insert({label: 'Industrie lourde', name: 'industrieLourde', content: '<h1> Industrie lourde </h1>', parentId: energiesMenu});
        Menu.insert({label: 'Transport', name: 'transport', content: '<h1> Transport </h1>', parentId: energiesMenu});

      });

      Menu.insert({label: 'Ils nous font confiance', name: 'nousFontConfiance', content: '<h1> Ils nous font confiance </h1>', parentId: activiteMenu});
  });

  Menu.insert({ name : 'nousRejoindre',label: 'Nous rejoindre', content: '<h1>Nous rejoindre</h1>', position:'navBar'}, function(err, nousRejoindreMenu) {
      if(err){return err;}
      Menu.insert({label: 'Postes à pourvoir', name: 'postes', content: '<h1> Postes à pourvoir </h1>', parentId: nousRejoindreMenu});
      Menu.insert({label: 'Postuler', name: 'postuler', content: '<h1> Postuler</h1>', parentId: nousRejoindreMenu});
  });

  Menu.insert({ name : 'espaceCollaborateur',label: 'Espace collaborateur', content: '<h1>Espace collaborateur</h1>', position:'navBar'}, function(err, espaceCollaborateurMenu) {
      if(err){return err;}

  });
  Menu.insert({ name : 'contact',label: 'Contact', content: `<div class="container contact">
    <h3>Contactez-nous</h3>
    <hr>
    <div class="row">
        <form class="col s12 m6 l6">
          <div class = "row">
            <div class="input-field col s6">
              <select>
                <option value="" disabled selected>Choissisez qui vous êtes</option>
                <option value="1">Une personne riche</option>
                <option value="2">Une personne vivante</option>
                <option value="3">Un candidat</option>
                <option value="4">Messi</option>
                <option value="5">Un annimal</option>
              </select>
              <label>Vous êtes :</label>
            </div>
            <div class="input-field col s6">
              <select>
                <option value="" disabled selected>Choissisez une demande</option>
                <option value="1">Un incident technique</option>
                <option value="2">Une demande d'entretien</option>
                <option value="3">Une panne de courant</option>
                <option value="4">Un cadeau du père noël</option>
                <option value="5">Un poisson rouge</option>
              </select>
              <label>Votre demande concerne :</label>
            </div>
          </div>

            <div class="row">
              <div class="input-field col s12">
                <div class = "col s2">
                  <p>Sexe : </p>
                </div>
                <div class=" col s1">


                   <input name="group1" type="radio" id="test1" />
                   <label for="test1">Homme</label>

                   <input name="group1" type="radio" id="test2" />
                   <label for="test2">Femme</label>

               </div>

               </div>
              </div>

            <div class="row">
                <div class="input-field col s6">
                    <i class="mdi-action-account-circle prefix"></i> <input
                        id="icon_prefix" type="text" class="validate"> <label
                        for="icon_prefix">Nom</label>
                </div>

                <div class="input-field col s6">
                    <i class="mdi-action-account-circle prefix"></i> <input
                        id="icon_prefix" type="text" class="validate"> <label
                        for="icon_prefix">Prénom</label>
                </div>

            </div>
            <div class="row">
                <div class="input-field col s6">
                    <i class="mdi-communication-business prefix"></i> <input
                        id="icon_prefix" type="text" class="validate"> <label
                        for="icon_prefix">Fonction</label>
                </div>

                <div class="input-field col s6">
                    <i class="mdi-action-dns prefix"></i> <input
                        id="icon_telephone" type="text" class="validate"> <label
                        for="icon_telephone">Société</label>
                </div>

            </div>
            <div class="row">
                <div class="input-field col s6">
                    <i class="mdi-communication-contacts prefix"></i> <input
                        id="icon_prefix" type="text" class="validate"> <label
                        for="icon_prefix">Email</label>
                </div>

                <div class="input-field col s6">
                    <i class="mdi-communication-phone prefix"></i> <input
                        id="icon_telephone" type="tel" class="validate"> <label
                        for="icon_telephone">Téléphone</label>
                </div>

            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="mdi-editor-mode-edit prefix"></i>
                    <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                    <label for="icon_prefix2">Message</label>
                </div>
            </div>

          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
        <div class="col s12 m6 l6 contact-holder">

        </div>

    </div>
</div>`, position:'navBar'}, function(err, contactMenu) {
      if(err){return err;}

  });
  console.log('IMPORT FINISHED');
}
