import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

// to get a number between 1 and 49
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // to not get the same prompt 2-3 times in a row
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

// downloading image using file saver
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
