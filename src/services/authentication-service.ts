export default class AuthenticationService {

  static isAuthenticated:boolean = false;

  static login(username: string, password: string): Promise<boolean> {
    const isAuthenticated = (username === 'pikachu' && password === 'pikachu');

    // fetch('http://api.jeromimmo.cda4.lh.manusien-ecolelamanu.fr/api/v1/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({

    //   })
    // });
    
    // const isAuthenticated = true;
    
    return new Promise(resolve => {
      setTimeout(() => {
        this.isAuthenticated = isAuthenticated;
        resolve(isAuthenticated);
      }, 1000);
    });
  }
}