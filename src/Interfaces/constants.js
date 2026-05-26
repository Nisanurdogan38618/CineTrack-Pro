import angryMenPoster from '../assets/12_angry_men.jpg';
import backToTheFuturePoster from '../assets/Back_to_the_Future.jpg';
import eternalSunshinePoster from '../assets/Eternal_sunshine_of_the_spotless_mind.jpg';
import fightClubPoster from '../assets/Fight_club.jpg';
import forrestGumpPoster from '../assets/Forrest_Gump.jpg';
import godfatherPoster from '../assets/Godfather.jpg';
import greenMilePoster from '../assets/Green_mile.jpg';
import inceptionPoster from '../assets/Inception.jpg';
import interstellarPoster from '../assets/Interstellar.jpg';
import lordOfTheRingsPoster from '../assets/Lordofthering_thereturnoftheking.jpg';
import matrixPoster from '../assets/Matrix.jpg';
import prestigePoster from '../assets/Prestige.jpg';
import pulpFictionPoster from '../assets/Pulp_Fiction.jpg';
import schindlersListPoster from '../assets/Schindlers_list.jpg';
import sevenPoster from '../assets/Seven.jpg';
import shawshankPoster from '../assets/ShawshankRedemption.jpg';
import silenceOfLambsPoster from '../assets/Silence_of_lambs.jpg';
import darkKnightPoster from '../assets/The_Dark_Knight.jpg';
import pianistPoster from '../assets/The_Pianist.jpg';
import usualSuspectsPoster from '../assets/Usual_suspects.jpg';

export const initialDatabase = [
  { imdbID: '1', Title: 'The Shawshank Redemption', Year: '1994', Poster: shawshankPoster },
  { imdbID: '2', Title: 'The Godfather', Year: '1972', Poster: godfatherPoster },
  { imdbID: '3', Title: 'The Dark Knight', Year: '2008', Poster: darkKnightPoster },
  { imdbID: '4', Title: '12 Angry Men', Year: '1957', Poster: angryMenPoster },
  { imdbID: '5', Title: 'Schindlers List', Year: '1993', Poster: schindlersListPoster },
  { imdbID: '6', Title: 'The Lord of the Rings: The Return of the King', Year: '2003', Poster: lordOfTheRingsPoster },
  { imdbID: '7', Title: 'Pulp Fiction', Year: '1994', Poster: pulpFictionPoster },
  { imdbID: '8', Title: 'Inception', Year: '2010', Poster: inceptionPoster },
  { imdbID: '9', Title: 'Fight Club', Year: '1999', Poster: fightClubPoster },
  { imdbID: '10', Title: 'Forrest Gump', Year: '1994', Poster: forrestGumpPoster },
  { imdbID: '11', Title: 'Interstellar', Year: '2014', Poster: interstellarPoster },
  { imdbID: '12', Title: 'The Matrix', Year: '1999', Poster: matrixPoster },
  { imdbID: '13', Title: 'The Silence of the Lambs', Year: '1991', Poster: silenceOfLambsPoster },
  { imdbID: '14', Title: 'The Pianist', Year: '2002', Poster: pianistPoster },
  { imdbID: '15', Title: 'The Prestige', Year: '2006', Poster: prestigePoster },
  { imdbID: '16', Title: 'The Green Mile', Year: '1999', Poster: greenMilePoster },
  { imdbID: '17', Title: 'Se7en', Year: '1995', Poster: sevenPoster },
  { imdbID: '18', Title: 'Back to the Future', Year: '1985', Poster: backToTheFuturePoster },
  { imdbID: '19', Title: 'The Usual Suspects', Year: '1995', Poster: usualSuspectsPoster },
  { imdbID: '20', Title: 'Eternal Sunshine of the Spotless Mind', Year: '2004', Poster: eternalSunshinePoster }
];

export const STORAGE_KEY = 'my_watchlist';