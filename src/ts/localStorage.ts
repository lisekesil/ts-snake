export class LocalStorage {
   public addHighscore(newHighscore: number): void {
      let highscoreValue = <string>localStorage.getItem('highscore');
      let highscore = <string>JSON.parse(highscoreValue);
      if (!highscore) {
         highscore = '0';
      }
      highscore = newHighscore.toString();

      localStorage.setItem('highscore', JSON.stringify(highscore));
   }

   public getHighScore(): number {
      let highscoreValue = <string>localStorage.getItem('highscore');
      return <number>JSON.parse(highscoreValue);
   }
}
