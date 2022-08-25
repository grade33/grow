import Choices from "choices.js";

document.querySelectorAll('.select-1').forEach(choicesEl => {
  const choices1 = new Choices(choicesEl, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
    placeholder: true,
  });
});

document.querySelectorAll('.select-2').forEach(choicesEl => {
  const choices2 = new Choices(choicesEl, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
    placeholder: true,
  });
});
