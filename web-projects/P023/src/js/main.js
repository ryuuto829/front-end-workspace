import AuthorWiki from './models/SearchWiki';

/** APP STATE */
const state = {
  wikiAuthors: new Map(),
  delayHover: 0,
};



const renderPopover = (author) => {
  let test = state.wikiAuthors.get(author);
  

  document.querySelector('.popover__author').textContent = `${author}`;
  document.querySelector('.popover__short').textContent = `${test.short}`;
  document.querySelector('.popover__about').textContent = `${test.about}`;
  document.querySelector('.popover__img').src = `${test.img}`;
  document.querySelector('.popover__img').alt = `${test.author} - ${test.short}`;
  document.querySelector('.popover__url').href = `${test.url}`;


  document.querySelector('.popover__loader').style.display = "none";
  document.querySelector('.popover__content').style.display = "block";
};


/** HOVER OVER THE AUTHOR NAME */
document.querySelector('.author').addEventListener('mouseover', e => {

  // 1. Move popover box
  let test = e.target.getBoundingClientRect();
  let right = test.right;
  let top = test.top;
  document.querySelector('.popover').style.left = `${right}px`;
  document.querySelector('.popover').style.top = `${top}px`;


  // 1. Add delay to the hover
  state.delayHover = setTimeout(setData, 1000);

  async function setData() {
    //e.target.insertAdjacentHTML('afterend', box);




    const authorName = e.target.textContent;
    console.log(authorName); // delete

    // 1. Test if author name was already requested fro, wiki
    if (state.wikiAuthors.has(authorName)) {
      console.log(state.wikiAuthors); // delete

      // 1. Display box in UI


    } else {

      // 1. Fetch data
      const newAuthor = new AuthorWiki(authorName);

      try {
        await newAuthor.getAboutText();
        await newAuthor.getAuthorInfo();
        state.wikiAuthors.set(newAuthor.author, newAuthor.description);
        console.log(state.wikiAuthors); // delete

        renderPopover(authorName);
        
      } catch (error) {
        alert(error);
      }

      // 2. Display box in UI

    }
  };

});


/** LEAVE AUTHOR NAME */
document.querySelector('.author').addEventListener('mouseout', e => {

  // 1. Reset hover dalay
  clearTimeout(state.delayHover);

  //e.target.innerHTML = 'Dan Brown';

  // 2. Remove box from UI


});