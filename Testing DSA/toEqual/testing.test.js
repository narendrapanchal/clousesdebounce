const {asitis}= require(`./toequal`);
test(`testing as it is`,()=>{
    expect(asitis([])).toEqual([]);
})
test(`testing as it is`,()=>{
expect( {} ).toEqual( {} )
})
test(`testing as it is`,()=>{
expect( [] ).toEqual( [] )
})
test(`testing as it is`,()=>{
expect( { a: 1, b: 2 } ).toEqual( { a:1 , b:2 } )
})
test(`testing as it is`,()=>{
expect( [ 1, 2, 3 ] ).toEqual( [ 1, 2, 3 ] )
})
test(`testing as it is`,()=>{
expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { c: 1, d: 2 }} ) 
})
test(`testing as it is`,()=>{
expect( [ 1, 2, [ 1, 2 ] ] ).toEqual( [ 1, 2, [ 1, 2 ]  ] )
})