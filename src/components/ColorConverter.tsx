import React from 'react'
import { useState} from 'react'

type rgbT = {
  red: number,
  green: number,
  blue: number,
  message: string,
  validate: boolean
}

export const ColorConverter = () => {
  const hexReg: RegExp = /^#[0-9A-Fa-f]{3,6}$/

  const [rgb, setRGB] = useState<rgbT>({red: 0, green: 0, blue: 0, message: '', validate: true})

  const handleInput = (e: React.FormEvent<HTMLFormElement>): void|string => {
    e.preventDefault();
    let inputText = e.target.value

    if (inputText.length === 7) {

      let {red, green, blue} = rgb;
      const regTest: boolean = hexReg.test(inputText)

      if (inputText.length === 7) {
        red =  parseInt(inputText.slice(1, 3), 16)
        green = parseInt(inputText.slice(3, 5), 16)
        blue = parseInt(inputText.slice(5, 7), 16)
        console.log(!red || !green || !blue)
      }
      if (!red || !green || !blue || !regTest) {
        setRGB({red: red, green: green, blue: blue, message: 'Error', validate: false})
        return 'Error'
      }
      setRGB({red: red, green: green, blue: blue, message: `rgb(${red}, ${green}, ${blue})`, validate: true})
      return `rgb(${red}, ${green}, ${blue})`
    }
  }

  return (
    <div className='container' style={{backgroundColor: `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`}}>
      <form className='form-color-converter' onInput={handleInput}>
        <input type="text" className='input_hex' maxLength={7}/>
        <input type="text" className='output-rgb' 
        value={rgb.message}/>
      </form>
    </div>
  )
}

//#34495e
//#9921ff
//#3eeeee