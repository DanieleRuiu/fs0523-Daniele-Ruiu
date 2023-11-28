import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceTsService {



  posts = [
    {id: 1, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  1', descrizione: 'Dolor sit amet, consectetur adipiscing elit.',stato: 'attivo' },
    {id: 2, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  2', descrizione: 'Dolor sit amet, consectetur adipiscing elit.',stato: 'attivo'  },
    {id: 3, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  3', descrizione: 'Dolor sit amet, consectetur adipiscing elit.' ,stato: 'attivo' },
    {id: 4, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  4', descrizione: 'Dolor sit amet, consectetur adipiscing elit.', stato: 'attivo' },
    {id: 5, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  5', descrizione: 'Dolor sit amet, consectetur adipiscing elit.',stato: 'attivo'  },
    {id: 6, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  6', descrizione: 'Dolor sit amet, consectetur adipiscing elit.',stato: 'inattivo'   },
    {id: 7, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  7', descrizione: 'Dolor sit amet, consectetur adipiscing elit.',stato: 'inattivo'   },
    {id: 8, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  8', descrizione: 'Dolor sit amet, consectetur adipiscing elit.', stato: 'inattivo'  },
    {id: 9, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  9', descrizione: 'Dolor sit amet, consectetur adipiscing elit.',stato: 'inattivo'   },
    {id: 10, titolo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  10', descrizione: 'Dolor sit amet, consectetur adipiscing elit.',stato: 'inattivo'   },
  ]
}

/*getPosts() {
  return this.posts.filter(posts => posts.stato === 'attivo'); }*/
