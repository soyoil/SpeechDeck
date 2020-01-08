async function speak(i: number){
  const column: Element | null = document.getElementsByClassName("js-column").item(i);
  if(column === null) return;
  const tmp = column.getElementsByClassName("js-tweet").item(0);
  if(tmp === null) return;
  var name = tmp.getElementsByClassName("fullname").item(0)?.innerHTML;
  if(name === undefined) name = "";
  const msg = new SpeechSynthesisUtterance(name);
  speechSynthesis.speak(msg);
  await wait(1000);
  var text = tmp.getElementsByClassName("js-tweet-text").item(0)?.innerHTML.replace(/<a.*?a>/g, "");
  if(text === undefined) text = "";
  msg.text = text;
  speechSynthesis.speak(msg);
};

const wait = (s: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, s);
  });
};

window.onload = async () => {
  console.log("SpeechDeck is activated");
  while(document.getElementsByClassName("js-app-header").length === 0) await wait(100);
  await wait(1000);
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
      button.onclick = () => { speak(i) };
      heads[i].appendChild(button);
      console.log("appended");
      break;
    }
  }
};
