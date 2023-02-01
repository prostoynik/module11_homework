import {getMonth} from "./getMonth.js" ;

describe('tests for getMonth function', () =>{
    it("should operate correctly with number from 1 to 12", () => {
        expect(getMonth(6)).toBe('июнь - 30 дней')
    }),
    it("should operate correctly with number from 1 to 12", () => {
        expect(getMonth('world')).toBe('неизвестно')
    }),
    it("should operate correctly with number from 1 to 12", () => {
        expect(getMonth(50)).toBe('неизвестно')
    })
})