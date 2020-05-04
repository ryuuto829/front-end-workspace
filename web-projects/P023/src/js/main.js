import AuthorWiki from './models/SearchWiki';
import { DOMstrings } from './views/base';
import * as searchWikiView from './views/searchWikiView';

searchWikiView.clearPopover(); // change


/**
 *  APP STATE
 */
const state = {
  wikiAuthors: new Map(),
  delayHover: 0,
};

/**
 *  HOVER OVER THE AUTHOR NAME
 */
DOMstrings.authorTable.addEventListener('mouseover', e => {

  if (e.target.classList.contains('author__name')) {
    searchWikiView.clearPopover();
    // 1. Add delay to the hover
    state.delayHover = setTimeout(setData, 1000);
  };

  // 2. Retrieve data and update UI
  async function setData() {
    const authorName = e.target.textContent;

    // 1. Move popover box
    searchWikiView.movePopover(e.target.getBoundingClientRect());

    // 2. Test if author name was already requested fro, wiki
    if (!state.wikiAuthors.has(authorName)) {
      const newAuthor = new AuthorWiki(authorName);

      // Fetch data
      try {
        DOMstrings.popover.style.display = "block";
        DOMstrings.loader.style.display = "block";
        DOMstrings.content.style.display = "none";
        // 1. Create wiki obj
        await newAuthor.getAboutText();
        await newAuthor.getAuthorInfo();
        state.wikiAuthors.set(newAuthor.author, newAuthor.description);

        // 2. Render UI
        searchWikiView.renderPopover(authorName, state.wikiAuthors.get(authorName));

      } catch (error) {
        DOMstrings.loader.textContent = "Not found ..";
      }
    } else {
      searchWikiView.renderPopover(authorName, state.wikiAuthors.get(authorName));
    }
  };

});

/**
 *  LEAVE AUTHOR NAME 
 */
DOMstrings.authorTable.addEventListener('mouseout', e => {
  // 1. Reset hover dalay
  clearTimeout(state.delayHover);  
});

DOMstrings.popover.addEventListener('mouseleave', e => {
  // 1. Clear popover
  searchWikiView.clearPopover();
});

DOMstrings.btn.addEventListener('click', () => {

  if (DOMstrings.inAuthor.value && DOMstrings.inBook.value) {
    const html = `
    <tr class="author__line">
      <td class="author__name">${DOMstrings.inAuthor.value}</td>
      <td class="author__book">${DOMstrings.inBook.value}</td>
    </tr>
    `;
    DOMstrings.authorTable.insertAdjacentHTML('beforeend', html);
  }
});