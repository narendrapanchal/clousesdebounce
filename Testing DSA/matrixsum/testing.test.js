const {add}= require(`./matrixsum`);
test("Testing validation",()=>{
    expect(add(`9 23 23 23 23
    32 23 324 12 224`)).toBe(716);
})

    test("Testing validation",()=>{
        expect(add(`9 23 23 23 23
        32 23 324 12 a`)).toEqual(NaN);
    })

    test("Testing validation",()=>{
        expect(add(`9 23 23 23 22
        32 23 324 12 224`)).toBe(715);
    })

    test("Testing validation",()=>{
        expect(add(`9 23 23 23 22
        32 23 324 12 224`)).toBe(715);
    })

    test("Testing validation",()=>{
        expect(add(`9 23 23 p3 23
        32 23 324 12 224`)).toBe(NaN);
    })

    test("Testing validation",()=>{
        expect(add(`9 23 23 s 23
        32 23 324 12 224`)).toBe(NaN);
    })

    test("Testing validation",()=>{
        expect(add(`9 23 23 23 22
        32 23  224`)).toBe(379);
    })

    test("Testing validation",()=>{
        expect(add(`9 23 23 23 22
        32 23 324 12 224`)).toBe(715);
    })

    test("Testing validation",()=>{
        expect(add(`9 23 23 p3 23
        32 23 224`)).toBe(NaN);
    })

    test("Testing validation",()=>{
        expect(add(`9 23 s 23
        32 23 324 224`)).toBe(NaN);
    })
