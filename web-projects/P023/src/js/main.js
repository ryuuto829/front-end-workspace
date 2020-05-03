/** AUTHOR INFO FROM WIKI */

class AuthorWiki {
  constructor(author) {
    this.author = author
  }

  async getAboutText() {
    let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${this.author.replace(' ', '%20')}`;
    url += `&prop=extracts&explaintext=&exchars=175&format=json`; // parametres

    try {
      const response = await fetch(url);
      const commits = await response.json();
      const list = Object.values(commits.query.pages)[0];

      this.about = list.extract;
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

      this.url = list.fullurl;
      this.img = `https://commons.wikimedia.org/wiki/File:${list.pageprops.page_image_free}`;
      this.short = list.pageprops["wikibase-shortdesc"];
    } catch (error) {
      alert(error);
    }
  };

}

const test = new AuthorWiki('Dan Brown');
test.getAboutText();
test.getAuthorInfo();
console.log(test);