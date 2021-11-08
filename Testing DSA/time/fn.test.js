const {printTime}= require('./time1.js');
describe(`1000 ${printTime(7060000)}`,()=>{
    test("input output",()=>{
        expect(printTime(7060000)).toEqual("1 hour 57 minute 40 second");
    
    })
})
describe("60000",()=>{
test("input output",()=>{
    expect([printTime(60000)]).toEqual(["1 minute"]);

})
})
describe("5200",()=>{
    test("input output",()=>{
        expect([printTime(5200)]).toEqual(["5 second"]);
    
    })
    })

    describe("60000",()=>{
        test("input output",()=>{
            expect([printTime(60000)]).toEqual(["1 minute"]);
        
        })
        })    

        describe("200000",()=>{
            test("input output",()=>{
                expect([printTime(200000)]).toEqual(["3 minute 20 second"]);
            
            })
            })        