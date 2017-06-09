import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import 'rxjs/add/operator/map';

/*
  Generated class for the ParseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ParseProvider {

  private parseAppId: string = "api-55lab-prd";
  private parseServerUrl: string = "https://api-55lab-prd.herokuapp.com/parse";

  constructor() {
    this.parseInitialize();
    console.log('Initiated Parse');
  }

  parseInitialize(){
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
  }

  loginUser(username: string, pass: string): Promise<any>{
    return Parse.User.logIn(username, pass);
  }

  createAccount(username: string, email: string, pass: string): Promise<any>{

    var user = new Parse.User();
    user.set("username", username);
    user.set("password", pass);
    user.set("email", email);

    return user.signUp(null);
  }
  // getGameScores(offset: number = 0, limit: number = 3): Promise<any> {
  //    return new Promise((resolve,reject) => {
  //       setTimeout(() => {
  //         const GameScore = Parse.Object.extend("GameScore");
  //         let query = new Parse.Query(GameScore);
  //         query.skip(offset);
  //         query.limit(limit);
  //         query.find().then(function(gameScores){
  //           resolve(gameScores);
  //           }, (error) => {
  //           reject(error);
  //         });
  //       }, 500);
  //    });
  //
  // }
  // addGameScore(newScore): Promise<any>{
  //   const GameScore = Parse.Object.extend("GameScore");
  //   let gameScore = new GameScore();
  //
  //   gameScore.set("score", parseInt(newScore.score));
  //   gameScore.set("playerName", newScore.playerName);
  //   gameScore.set("cheatMode", false);
  //
  //   return gameScore.save(null, {
  //     success: function(gameScore) {
  //       console.log(gameScore);
  //       return gameScore;
  //     },
  //     error: function(gameScore, error) {
  //       console.log(error);
  //       return error;
  //     }
  //   });
  // }

}
