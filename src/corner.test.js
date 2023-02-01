import {getMonth} from "./getMonth.js" ;

describe('tests for getMonth function', () =>{
    it("should operate correctly with number from 1 to 12", () => {
        expect(getMonth(2)).toBe('февраль - 29 дней')
    })
})