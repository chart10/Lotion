import NoteService from './noteService';
import UtilService from './utilService';

const services = {
  noteService: new NoteService(),
  utilService: new UtilService(),
};

// For debugging purposes:
window.services = services;

export default services;
