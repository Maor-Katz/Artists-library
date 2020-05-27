import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _artists = [{
    title: 'Musicians',
    name: 'Geva Alon',
    description: 'Rock-folk artist',
    imageName: 'artist1.png'
  },
    {
      title: 'Producers',
      name: 'Kick Lee',
      description: 'Compose-Producer',
      imageName: 'artist2.png'
    },
    {
      title: 'Composers',
      name: 'Vlad moder',
      description: 'Classical piano',
      imageName: 'artist3.png'
    },
    {
      title: 'Agents',
      name: 'Devis Absol',
      description: 'artist',
      imageName: 'artist4.png'
    }]

  private _things = [
    {
      title: 'Keep your rights',
      description: 'Its your music and you keep all of the rights'
    },
    {
      title: 'Revenue',
      description: 'Join the growing sync-licensing market and tap into a whole new revenue stream'
    },
    {
      title: 'Inspire',
      description: 'Let your music help to tell the story and be the soul of films around the world'
    },
    {
      title: 'Non-exclusive',
      description: 'You can license with artlist and still distribute/license your music anywhere else you choose'
    },
    {
      title: 'Expand your reach',
      description: 'See your social and streaming channels grow as your music recognized in thousands of films worldwide'
    },
    {
      title: 'Creative community',
      description: 'Distribute your music through one of the top music licensing platforms in the world, and be part of a select group of composers and indie artists'
    }]
  private _thingsToCheck = [
    'You have full rights to the music.',
    'The music can be used on any platform worldwide.',
    'Your press kit is complete with photos, bio and great music.'
  ];

  constructor() {

  }

  getArtists() {
    return this._artists
  }

  getThings() {
    return this._things
  }

  getThingsToCheck() {
    return this._thingsToCheck
  }
}
