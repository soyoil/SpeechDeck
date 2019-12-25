const wait = (s: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, s);
  });
};

window.onload = async () => {
  console.log("SpeechDeck is activated");
  await wait(10000);
  const heads: Element[] = Array.from(
    document.getElementsByClassName("column-header-title")
  );
  const button: HTMLButtonElement = document.createElement("button");
  button.textContent = "Speech";
  button.type = "button";
  button.style.marginLeft = "5px";
  console.log("search finished.");
  for (var i = 0; i < heads.length; ++i) {
    if (heads[i].firstElementChild?.textContent === "Home") {
      heads[i].appendChild(button);
      console.log("appended");
    }
  }
};
