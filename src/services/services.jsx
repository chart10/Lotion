import NoteService from './noteService';

const services = { noteService: new NoteService() };

// For debugging purposes:
window.services = services;

export default services;
