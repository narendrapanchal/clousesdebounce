const {tax}=require(`./tax`);

test("Calculating tax",()=>{
    // earn money and saved moeney
    expect(tax(100000,30000)).toBe(0);
})
test("Calculating tax",()=>{
    expect(tax(1000000,10000)).toBe(103000);
})
test("Calculating tax",()=>{
    expect(tax(500000,1000)).toBe(50300);
})
test("Calculating tax",()=>{
    expect(tax(750000,30000)).toBe(84000);
})
test("Calculating tax",()=>{
    expect(tax(800000,300000)).toBe(170000);
})
test("Calculating tax",()=>{
    expect(tax(2000000,300000)).toBe(630000);
})
