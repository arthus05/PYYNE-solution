# Challenge Solution

### Applicant: Arthus Vinicius Cruz de Moura
### e-mail: arthusvinicius.dev@gmail.com 

This challenge was made using `node`, `typescript` and `express`.

I've adapted the given `Java` code, I tried to change as little as possible from the classes `bank1` and `bank2`, but minor changes were needed to adapt to Typescript.

I tried to use SOLID principals and apply some Clean Architecture concepts. I also tried to not overcomplicate the problem, which is a simple one, but still show the most of those concepts that I could.

I spent approximatelly **4h** to develop this challenge. It was the time that I had at my disposal in a week, so unfortunately I didn't had time to write unit tests. 

## How to run

- **Install dependencies**

```bash
yarn
```

- **Run dev server**
```bash
yarn dev
```

## How to use
The application runs on `http//localhost:3333`, and the requested methods are available on those endpoints:
- printBalances -> `http//localhost:3333/balances`
  - You should also send a body with the following structure:
   ```json
    {
      "account": {
        "id": 1,
        "num": 2,
        "name": "john",
        "email": "johndoe@gmail.com"
      }
    }
   ```
- printTransactions -> `http//localhost:3333/transactions`
  - You should also send a body with the following structure:
  ```json
    {
      "account": {
        "id": 1,
        "num": 2,
        "name": "arthus",
        "email": "arthus@gmail.com"
      },
      "fromDate": "20-10-2022",
      "toDate": "21-11-2022"
    }
  ```

**The printed data will appear on the application console**