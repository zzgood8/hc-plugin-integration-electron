import { readFileSync } from 'fs'
import * as Excel from 'node-xlsx'

export const on = {
  readExcel: () => {
    console.log('1')
  },
  readExcel2: () => {
    console.log('2')
  },
  'window-close': () => {
    
  }
}

export const invoke = {
  
}