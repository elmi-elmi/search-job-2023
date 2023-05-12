import nextElementInList from "@/utils/nextElementInList";
import { describe, expect } from "vitest";

describe("nextElementInList",()=>{
    describe("When element is not at the end of the list",()=>{
        it("returns the next element of the list",()=>{
            const list = ['A', 'B', 'C', 'D', 'E'];
            const current = 'C'; 
            const nextEl = nextElementInList(list, current)
            expect(nextEl).toBe('D')
        })
    })

    describe('When element is at the end of the list', ()=>{
        it("locates next element at start of the list", ()=>{
            const list = ['A', 'B', 'C', 'D', 'E'];
            const current = 'E';
            const nextEl = nextElementInList(list, current)
            expect(nextEl).toBe('A')
        })
    })
})