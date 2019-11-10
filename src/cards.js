const readlineSync = require("readline-sync");

let cards = readlineSync.question("\nEnter a playing card: ");
cards = cards.toUpperCase();

const firstPart = cards.charAt(0);
const secondPart = cards.charAt(1);

switch (firstPart){
  case ("2"):
    if ( secondPart == "C") {
      console.log("\nTwo of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nTwo of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nTwo of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nTwo of Spades.\n");
    }
    break;

  case ("3"):
    if ( secondPart == "C") {
      console.log("\nThree of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nThree of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nThree of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nThree of Spades.\n");
    }
    break;

  case ("4"):
    if ( secondPart == "C") {
      console.log("\nFour of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nFour of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nFour of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nFour of Spades.\n");
    }
    break;

  case ("5"):
    if ( secondPart == "C") {
      console.log("\nFive of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nFive of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nFive of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nFive of Spades.\n");
    }
    break;

  case ("6"):
    if ( secondPart == "C") {
      console.log("\nSix of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nSix of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nSix of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nSix of Spades.\n");
    }
    break;

  case ("7"):
    if ( secondPart == "C") {
      console.log("\nSeven of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nSeven of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nSeven of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nSeven of Spades.\n");
    }
    break;

  case ("8"):
    if ( secondPart == "C") {
      console.log("\nEight of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nEight of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nEight of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nEight of Spades.\n");
    }
    break;

  case ("9"):
    if ( secondPart == "C") {
      console.log("\nNine of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nNine of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nNine of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nNine of Spades.\n");
    }
      break;

  case ("T"):
    if ( secondPart == "C") {
      console.log("\nTen of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nTen of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nTen of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nTen of Spades.\n");
    }
    break;

  case ("J"):
    if ( secondPart == "C") {
      console.log("\nJack of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nJack of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nJack of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nJack of Spades.\n");
    }
    break;

  case ("Q"):
    if ( secondPart == "C") {
      console.log("\nQueen of Clubs.\n");
    } else if ( secondPart == "D") {
      console.log("\nQueen of Diamonds.\n");
    } else if ( secondPart == "H") {
      console.log("\nQueen of Hearts.\n");
    } else if ( secondPart == "S") {
      console.log("\nQueen of Spades.\n");
    }
    break;
    case ("K"):
      if ( secondPart == "C") {
        console.log("\nKing of Clubs.\n")
      } else if ( secondPart == "D") {
        console.log("\nKing of Diamonds.\n")
      } else if ( secondPart == "H") {
        console.log("\nKing of Hearts.\n")
      } else if ( secondPart == "S") {
        console.log("\nKing of Spades.\n")
      }
      break;
      case ("A"):
        if ( secondPart == "C") {
          console.log("\nAce of Clubs.\n")
        } else if ( secondPart == "D") {
          console.log("\nAce of Diamonds.\n")
        } else if ( secondPart == "H") {
          console.log("\nAce of Hearts.\n")
        } else if ( secondPart == "S") {
          console.log("\nAce of Spades.\n")
        }
        break;

        default:
          console.log("\nInvalid.\n");
          break;
      }
