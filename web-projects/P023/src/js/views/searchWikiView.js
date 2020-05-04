import { DOMstrings } from './base';

export const renderPopover = (author, authorWiki) => {
  // 1. Render info in popover box  
  DOMstrings.author.textContent = `${author}`;
  DOMstrings.short.textContent = `${authorWiki.short}`;
  DOMstrings.about.textContent = `${authorWiki.about}`;
  DOMstrings.img.src = `${authorWiki.img}`;
  DOMstrings.img.alt = `${authorWiki.author} - ${authorWiki.short}`;
  DOMstrings.url.href = `${authorWiki.url}`;

  // 2. Hide loader and display popover
  DOMstrings.popover.style.display = "block";
  DOMstrings.loader.style.display = "none";
  DOMstrings.content.style.display = "block";
};

export const movePopover = box => {
  const right = box.right;
  const top = box.top;
  DOMstrings.popover.style.left = `${right}px`;
  DOMstrings.popover.style.top = `${top}px`;
};

export const clearPopover = () => {
  DOMstrings.popover.style.display = "none";
}