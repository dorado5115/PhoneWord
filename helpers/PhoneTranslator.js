const phoneTranslator = (text) => {
    let phoneNumber = [];

    if (text.length === 0) {
      return 'Insert text';

    } else {
      for (let i = 0; i < text.length; i++) {
        switch (text[i].toUpperCase()) {
          case 'A':
            phoneNumber.push(2);
            break;
          case 'B' :
            phoneNumber.push(2);
            phoneNumber.push(2);
            break;
          case 'C':
            phoneNumber.push(2);
            phoneNumber.push(2);
            phoneNumber.push(2);
            break;
          case 'D':
            phoneNumber.push(3);
            break;
          case 'E':
            phoneNumber.push(3);
            phoneNumber.push(3);
            break;
          case 'F':
            phoneNumber.push(3);
            phoneNumber.push(3);
            phoneNumber.push(3);
            break;
          case 'G':
            phoneNumber.push(4);
            break;
          case 'H':
            phoneNumber.push(4);
            phoneNumber.push(4);
            break;
          case 'I':
            phoneNumber.push(4);
            phoneNumber.push(4);
            phoneNumber.push(4);
            break;
          case 'J':
            phoneNumber.push(5);
            break;
          case 'K':
            phoneNumber.push(5);
            phoneNumber.push(5);
            break;
          case 'L':
            phoneNumber.push(5);
            phoneNumber.push(5);
            phoneNumber.push(5);
            break;
          case 'M':
            phoneNumber.push(6);
            break;
          case 'N':
            phoneNumber.push(6);
            phoneNumber.push(6);
            break;
          case 'O':
            phoneNumber.push(6);
            phoneNumber.push(6);
            phoneNumber.push(6);
            break;
          case 'P':
            phoneNumber.push(7);
            break;
          case 'Q':
            phoneNumber.push(7);
            phoneNumber.push(7);
            break;
          case 'R':
            phoneNumber.push(7);
            phoneNumber.push(7);
            phoneNumber.push(7);
            break;
          case 'S':
            phoneNumber.push(7);
            phoneNumber.push(7);
            phoneNumber.push(7);
            phoneNumber.push(7);
            break;
          case 'T':
            phoneNumber.push(8);
            break;
          case 'U':
            phoneNumber.push(8);
            phoneNumber.push(8);
            break;
          case 'V':
            phoneNumber.push(8);
            phoneNumber.push(8);
            phoneNumber.push(8);
            break;
          case 'W':
            phoneNumber.push(9);
            break;
          case 'X':
            phoneNumber.push(9);
            phoneNumber.push(9);
            break;
          case 'Y':
            phoneNumber.push(9);
            phoneNumber.push(9);
            phoneNumber.push(9);
            break;
          case 'Z':
            phoneNumber.push(9);
            phoneNumber.push(9);
            phoneNumber.push(9);
            phoneNumber.push(9);
            break;
        }  
      }
    }
    return phoneNumber.join('');
}

export default phoneTranslator;