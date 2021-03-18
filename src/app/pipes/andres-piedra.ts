import {Pipe} from '@angular/core';

@Pipe({
  name: 'andresPiedra'
})
export class AndresPiedra {
  transform(value, args) {

    console.log("ESTOS SON LOS ARGUMENTOS"+args);

     //Count how many words were passed in
    let wordCount = value.split(" ").length;
    let newValue = "";

    for(let i = 0; i < wordCount; i++){
        newValue += args;
    }

    return newValue;
  }
}