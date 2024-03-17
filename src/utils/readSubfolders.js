import fs from 'fs';

/**
 * Reads the subfolders from a main folder.
 *
 * @param {string} mainFolder Main folder to read subfolders from.
 * @returns An array of subfolders objects with the 'name' and 'path' properties of each subfolder.
 */
export default function readSubfolders(mainFolder) {
  return fs.readdirSync(mainFolder, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent);
}
