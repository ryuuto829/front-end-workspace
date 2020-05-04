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
    } catch (error) {
      this.description.about = 'Find more info on wiki ..';
    }
  }

  async getAuthorInfo() {
    let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${this.author.replace(' ', '%20')}`;
    url += `&prop=pageprops|pageimages&=formatversion=2&piprop=thumbnail&pithumbsize=600&format=json`; // parametres

    try {
      const response = await fetch(url);
      const commits = await response.json();
      const list = Object.values(commits.query.pages)[0];

      this.description.url = `https://en.wikipedia.org/wiki/${this.author.replace(' ', '_')}`;
      this.description.img = list.thumbnail.source;
      this.description.short = list.pageprops["wikibase-shortdesc"];
    } catch (error) {
      DOMstrings.loader.style.display = "block";
      DOMstrings.content.style.display = "none";
    }
  };
}