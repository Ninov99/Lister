/**
 * @name Localstorage
 * @description Données persistantes dans le navigateur
 * @author NN
 * @version 1.0
 **/

export default {
  save(key, value) {
    // Convertir les données avant l'insertion
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key) {
    const value = localStorage.getItem(key);
    if (value != null) {
      //Reconvertir le string json en valeurs js
      return JSON.parse(value);
    }

    return null;
  },
  delete() {},
};
