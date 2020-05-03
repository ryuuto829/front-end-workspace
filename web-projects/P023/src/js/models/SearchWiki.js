/** AUTHOR INFO FROM WIKI
 * 
 * Example of AuthorWiki object
 * * author: "Dan Brown"
 * * description:
 * * * about: "Daniel Gerhard Brown (born June 22, ...
 * * * img: "https://commons.wikimedia.org/wiki/File:Dan_Brown_bookjacket_cropped.jpg"
 * * * short: "American author"
 * * * url: "https://en.wikipedia.org/wiki/Dan_Brown"
 */

export default class AuthorWiki {
  constructor(author) {
    this.author = author;
    this.description = {};
  }

  async getAboutText() {
    let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${this.author.replace(' ', '%20')}`;
    url += `&prop=extracts&explaintext=&exchars=175&format=json`; // parametres

    try {
      const response = await fetch(url);
      const commits = await response.json();
      const list = Object.values(commits.query.pages)[0];

      this.description.about = list.extract;
      console.log('get info about'); // delete
    } catch (error) {
      alert(error);
    }
  }

  async getAuthorInfo() {
    let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${this.author.replace(' ', '%20')}`;
    url += `&prop=pageprops|info&inprop=url&format=json`; // parametres

    try {
      const response = await fetch(url);
      const commits = await response.json();
      const list = Object.values(commits.query.pages)[0];

      this.description.url = list.fullurl;
      this.description.img = `https://upload.wikimedia.org/wikipedia/commons/8/8b/${list.pageprops.page_image_free}`;
      //this.description.img = `https://commons.wikimedia.org/wiki/File:${list.pageprops.page_image_free}`;
      this.description.short = list.pageprops["wikibase-shortdesc"];
      console.log('get general info'); // delete
    } catch (error) {
      alert(error);
    }
  };
}