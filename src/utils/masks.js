export const onlyText = (text) => {
  let validText = [];
  if (text) {
    validText = [...text].filter((carac) =>
      carac.match(/^(ç|Ç|\.|[a-zA-Zà-úÀ-Ú]|\s+)+$/)
    );
  } else {
    validText = [""];
  }

  return validText.join("");
};

export const onlyNumbers = (text) => {
  if (text) {
    return text.split("").filter((letter) => letter.match(/\d/));
  } else {
    return "";
  }
};

export const maskText = (entry) => {
  const text = onlyText(entry);

  const capitalize = (name) => name.slice(0, 1).toUpperCase() + name.slice(1);

  // const abrev = (name) => name.includes('.') ? capitalize(name) : name.toLowerCase()
  const minor = (name) =>
    name.includes(".") || name.charAt(0) !== "d"
      ? capitalize(name)
      : name.toLowerCase();

  const formatedText = text
    .split(" ")
    .map((elem) => (elem.length < 4 ? minor(elem) : capitalize(elem)))
    .join(" ");

  return formatedText;
};

export const maskPhone = (text) => {
  if (!text) {
    return "";
  }

  let numbers = onlyNumbers(text.toString());

  if (numbers.length < 1) {
    return "";
  }

  let country = numbers.slice(0, 2).join("");
  let rest = numbers.slice(2, 15).join("");

  return `+${country}${rest}`;
};
