export default function firstLetterToUpperCase(text: string): string {
  const trimedText = text.trim();
  const firstLetter = trimedText[0].toUpperCase();
  const restOfText = text.slice(1);
  
  return firstLetter + restOfText;
}